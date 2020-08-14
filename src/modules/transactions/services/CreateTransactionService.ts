import { isBefore } from 'date-fns';
import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import INotificationsRepository from '@modules/notifications/repositories/INotificationsRepository';
import ITransactionsRepository from '../repositories/ITransactionsRepository';
import Transaction from '../infra/typeorm/entities/Transaction';

interface IRequest {
  value: number;
  user_id: string;
  date: Date;
}

@injectable()
export default class CreateTransactionService {
  constructor(
    @inject('TransactionsRepository')
    private transactionsRepository: ITransactionsRepository,

    @inject('NotificationsRepository')
    private notificationsRepository: INotificationsRepository,
  ) {}

  public async execute({
    user_id,
    date,
    value,
  }: IRequest): Promise<Transaction> {
    if (isBefore(date, Date.now())) {
      throw new AppError(`You can't create a transaction on a past date.`);
    }

    const transaction = await this.transactionsRepository.create({
      value,
      user_id,
      date,
    });

    await this.notificationsRepository.create({
      recipient_id: user_id,
      content: `New transaction: ${value}`,
    });

    return transaction;
  }
}
