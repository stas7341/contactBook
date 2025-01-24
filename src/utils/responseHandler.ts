import {Response} from 'express';

export const sendErrorResponse = (res: Response, code: number, error: string) => {
  res.status(code).send({
    status: 'fail',
    error,
  });
};

export const sendSuccessResponse = (res: Response, code = 200, message = '', data = {}) => {
  res.status(code).send({
    status: 'success',
    message,
    data,
  });
};

export const sendBaseResponse = (res: Response, code = 200, data = {}) => {
  res.status(code).send({
    status: 'success',
    data,
  });
};

export const sendJsonResponse = (res: Response, code = 200, data = {}) => {
  res.status(code).json(data);
};
