import React, { FC } from 'react';
import { Button, Image, Flex, Box, Spacer, Text } from '@chakra-ui/react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useAppSelector } from '@/src/hooks';
import { GrLogout } from 'react-icons/gr';

type IProps = {
  bg?: string;
};

const NavBar: FC<IProps> = ({ bg }) => {
  const user = useAppSelector((state) => state.user);

  const logout = async () => {
    const URL = '/api/logout';

    const response = await fetch(URL, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify({})
    });

    const responseInJson = await response.json();

    if (responseInJson.message === 'success') {
      window.location.href = `${window.location.origin}/login`;
    }
  };

  const renderButtons = () => {
    if (user?.isValid) {
      return (
        <Button
          fontSize="20"
          color="danger"
          variant="link"
          float="right"
          mr="2"
          pr="2"
          onClick={logout}>
          <GrLogout />
        </Button>
      );
    }

    return (
      <>
        <Button fontSize="20" color="brand" variant="link" float="right" mr="2" pr="2">
          <Link href="/login">Log in</Link>
        </Button>
        <Button fontSize="md" colorScheme="green" color="white" m="4">
          <Link href="/signup">Sign up</Link>
        </Button>
      </>
    );
  };

  return (
    <Box bg={bg} boxShadow="md">
      <Flex>
        <Image
          height="10"
          margin={['15px', '15px', '15px', '15px']}
          marginRight={['5px', '5px', '5px', '5px']}
          src="/logo_homepage.png "
          alt="brand logo"
          m="5"></Image>
        <Text
          marginLeft="5px"
          fontSize={['20px', '20px', '20px', '20px']}
          fontWeight="bold"
          lineHeight="72px">
          UET Task Web App
        </Text>
        <Spacer />
        {renderButtons()}
      </Flex>
    </Box>
  );
};

NavBar.propTypes = {
  bg: PropTypes.string
};

export default NavBar;
