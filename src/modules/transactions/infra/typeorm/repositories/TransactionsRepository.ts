import { getRepository, Repository } from 'typeorm';
import ICreateTransactionDTO from '@modules/transactions/dtos/ICreateTransactionDTO';
import ITransactionsRepository from '@modules/transactions/repositories/ITransactionsRepository';
import Transaction from '../entities/Transaction';

export default class TransactionsRepository implements ITransactionsRepository {
  private ormRepository: Repository<Transaction>;

  constructor() {
    this.ormRepository = getRepository(Transaction);
  }

  public async create({
    user_id,
    date,
    value,
  }: ICreateTransactionDTO): Promise<Transaction> {
    const transaction = this.ormRepository.create({
      user_id,
      date,
      value,
    });

    await this.ormRepository.save(transaction);
    return transaction;
  }
}
