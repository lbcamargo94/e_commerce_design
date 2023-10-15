// Express
import { NextFunction, Request, Response } from "express";
// API Error
import { ApiError } from "@erro/index";

export default class HandleError {
  public handleError(
    error: Error & Partial<ApiError>,
    _request: Request,
    response: Response,
    next: NextFunction,
  ) {
    const statusCode = error.statusCode ?? 500;

    const message = error.statusCode ? error.message : error.cause;

    return response.status(statusCode).json({ message });

    next();
  }
}
