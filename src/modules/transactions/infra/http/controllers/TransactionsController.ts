import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateTransactionService from '@modules/transactions/services/CreateTransactionService';

export default class TransactionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { value, date } = request.body;
    const user_id = request.user.id;
    const createTransaction = container.resolve(CreateTransactionService);
    const transaction = await createTransaction.execute({
      user_id,
      date,
      value,
    });
    return response.json(transaction);
  }
}
