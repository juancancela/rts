import MessagingService from './MessagingService';
import Message from '../../models/Message/Message';
import MessageImpl from '../../models/Message/MessageImpl';
import User from '../user/models/User/User';
import MessageFilter from '../../models/Message/MessageFilter';
import MessageMetadataImpl from '../../models/MessageMetadata/MessageMetadataImpl';
import AbstractService from '../../utils/services/AbstractService';
import ModuleType from '../../../../utils/modules/ModuleType';
import Commandable from '../../../../utils/command/Commandable';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class MessagingServiceImpl extends AbstractService implements MessagingService, Commandable {
  constructor(isRemote: boolean = false) {
    super(isRemote);
  }

  async pinMessage(message: Message): Promise<Message> {
    throw new Error('Method not implemented.');
  }

  async unpinMessage(message: Message): Promise<Message> {
    throw new Error('Method not implemented.');
  }

  async reportMessage(reportedMessage: Message, reportedUser: User): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async getLastMessage(user: User): Promise<Message> {
    throw new Error('Method not implemented.');
  }

  async sendMessage(message: Message): Promise<Message> {
    throw new Error('Method not implemented.');
  }

  async getMessage(messageId: string): Promise<Message> {
    if (this.isRemote()) {
      const objectResult = await this.getCommand().execute(ModuleType.COMMONS, 'MessageService', 'getMessage', 'Message', null);
      const typedResult = await MessageImpl.fromJSON(objectResult);
      return typedResult;
    }
    return await new MessageImpl(new MessageMetadataImpl(new Date(), true, '23'), messageId, true, 'local text content');
  }

  async getMessages(messageFilter: MessageFilter): Promise<Message[]> {
    throw new Error('Method not implemented.');
  }

  async updateMessage(updatedMessage: Message): Promise<Message> {
    throw new Error('Method not implemented.');
  }

  async deleteMessage(messageId: string): Promise<Message> {
    throw new Error('Method not implemented.');
  }
}
