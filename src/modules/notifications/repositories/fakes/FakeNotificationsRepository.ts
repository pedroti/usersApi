import { ObjectId } from 'mongodb';
import ICreateNotificationDTO from '@modules/notifications/dtos/ICreateNotificationDTO';
import INotificationsRepository from '../INotificationsRepository';

export default class FakeNotificationsRepository implements INotificationsRepository {
  private notifications: Array<Notification> = [];

  public async create({
    content,
    recipient_id,
  }: ICreateNotificationDTO): Promise<Notification> {
    const notification = new Notification();
    Object.assign(notification, {id: new ObjectId(), content, recipient_id});
    this.notifications.push(notification);
    return notification;
  }
}