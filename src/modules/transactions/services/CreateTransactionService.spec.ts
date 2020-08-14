import FakeNotificationsRepository from '@modules/notifications/repositories/fakes/FakeNotificationsRepository';
import FakeTransactionsRepository from '../repositories/fakes/FakeTransactionsRepository';
import CreateTransactionService from './CreateTransactionService';

let fakeTransactionsRepository: FakeTransactionsRepository;
let fakeNotificationsRepository: FakeNotificationsRepository;
let createAppointment: CreateTransactionService;

describe('CreateTransaction', () => {
  beforeEach(() => {
    fakeTransactionsRepository = new FakeTransactionsRepository();
    fakeNotificationsRepository = new FakeNotificationsRepository();
    createAppointment = new CreateTransactionService(
      fakeTransactionsRepository,
      fakeNotificationsRepository,
    );
  });
  it('should be able to create a new transaction', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 4, 10, 12).getTime();
    });
    const transaction = await createAppointment.execute({
      date: new Date(2020, 4, 10, 13),
      value: 123.123,
      user_id: '123',
    });
    expect(transaction).toHaveProperty('id');
  });
});
