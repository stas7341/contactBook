import express from 'express';
import HttpController from '../controlers/http.controller';

const router = express.Router();

router.get('/getAll', HttpController.getAllContact);
router.post('/find', HttpController.searchContact);

export default router;
