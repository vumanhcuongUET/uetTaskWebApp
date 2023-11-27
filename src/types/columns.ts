export type Column = {
  _id: string;
  sequence?: number;
};

export type ColumnsSlice = {
  columns: Column[];
  status: string;
  doneFetching: boolean;
};
export const config = {
  responseLimit: '100mb',
  bodyParser: {
    sizeLimit: '100mb'
  }
};
