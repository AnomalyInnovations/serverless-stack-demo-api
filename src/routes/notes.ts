import { Router } from 'express'
import { list } from '../controllers/notes';
const noteRouter: Router = Router();

noteRouter.get('/', list);

export { noteRouter };
