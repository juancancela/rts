import BaseService from '../../utils/services/BaseService';
import Message from '../../models/Message/Message';
import User from '../user/models/User/User';
import MessageFilter from '../../models/Message/MessageFilter';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface MessagingService extends BaseService {
  pinMessage(message: Message): Promise<Message>;
  unpinMessage(message: Message): Promise<Message>;
  reportMessage(reportedMessage: Message, reportedUser: User): Promise<void>;
  getLastMessage(user: User): Promise<Message>;
  sendMessage(message: Message): Promise<Message>;
  getMessage(messageId: string): Promise<Message>;
  getMessages(messageFilter: MessageFilter): Promise<Message[]>;
  updateMessage(updatedMessage: Message): Promise<Message>;
  deleteMessage(messageId: string): Promise<Message>;
}
