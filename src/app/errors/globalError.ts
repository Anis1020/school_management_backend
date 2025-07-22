import { NextFunction, Request, Response } from "express";

const globalError = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = 500;
  const message = "global error";
  res.status(statusCode).json({
    success: false,
    message,
    err: err.message,
  });
};
export default globalError;
