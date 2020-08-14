import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import TransactionsController from '../controllers/TransactionsController';

const appointmentsRouter = Router();
const transactionsController = new TransactionsController();

appointmentsRouter.use(ensureAuthenticated);
appointmentsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      date: Joi.date().required(),
      value: Joi.number().required(),
    },
  }),
  transactionsController.create,
);

export default appointmentsRouter;
