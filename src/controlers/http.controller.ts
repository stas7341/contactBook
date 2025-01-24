import { sendErrorResponse, sendJsonResponse } from '../utils/responseHandler';
import { asyncMiddleware } from '../middlewares';
import ContactManagerService from '../services/contactManager';
import { Request, Response } from 'express';

const getAllContact = asyncMiddleware(async (req: Request, res: Response) => {
  const data = await ContactManagerService.getAllContact();
  return data ? sendJsonResponse(res, 200, data) : sendErrorResponse(res, 500, 'failed');
});

const searchContact = asyncMiddleware(async (req: Request, res: Response) => {
  const query = req.body.query as string;
  if (!query) {
    return res.render('index', {
      contacts: [],
      query,
      error: 'Query is required',
    });
  }
  //return res.status(400).json({ message: 'Query is required' });

  const results = ContactManagerService.findContact(query);

  if (results.length === 0) {
    return res.render('index', {
      contacts: [],
      query,
      error: 'No results, please review your search or try a different one',
    });
  }

  res.render('index', { contacts: results, query, error: null });
});

const HttpController = {
  getAllContact,
  searchContact,
};

export default HttpController;
