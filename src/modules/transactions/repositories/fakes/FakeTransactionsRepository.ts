import { uuid } from 'uuidv4';
import Transaction from '@modules/transactions/infra/typeorm/entities/Transaction';
import ICreateTransactionDTO from '@modules/transactions/dtos/ICreateTransactionDTO';
import ITransactionsRepository from '../ITransactionsRepository';

export default class FakeTransactionsRepository
  implements ITransactionsRepository {
  private transactions: Array<Transaction> = [];

  public async create({
    user_id,
    date,
    value,
  }: ICreateTransactionDTO): Promise<Transaction> {
    const transaction = new Transaction();
    Object.assign(transaction, { id: uuid(), date, value, user_id });
    this.transactions.push(transaction);
    return transaction;
  }
}
