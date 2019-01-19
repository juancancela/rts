import MessagingService from './MessagingService';
import Message from '../../models/Message/Message';
import MessageImpl from '../../models/Message/MessageImpl';
import User from '../user/models/User/User';
import MessageFilter from '../../models/Message/MessageFilter';
import MessageMetadataImpl from '../../models/MessageMetadata/MessageMetadataImpl';
import Modules from '../../../../utils/modules/Modules';
import Commandable from '../../../../utils/command/Commandable';
import Command from '../../../../utils/command/Command';
import CommandImpl from '../../../../utils/command/CommandImpl';
import AbstractService from '../../utils/services/AbstractService';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class MessagingServiceImpl extends AbstractService implements MessagingService, Commandable {
  private isRemoteExecution: boolean = false;

  constructor(isRemote: boolean = false) {
    super();
    this.isRemoteExecution = isRemote;
  }

  getCommand(): Command {
    if (this.isRemote()) return new CommandImpl(true);
    return new CommandImpl(false);
  }

  isRemote(): boolean {
    return this.isRemoteExecution;
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
    if (this.isRemote()) return await this.execute('getMessage', null, this.getCommand(), this.getServiceName(), this.getModuleName());
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

  getModuleName(): Modules {
    return Modules.COMMONS;
  }

  getServiceName(): string {
    return 'messagingService';
  }
}
