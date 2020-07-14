declare namespace Express {
  // overwriting and anexing some definition to the Express lib
  export interface Request {
    user: {
      id: string;
    };
  }
}
