import MessagingServiceImpl from './MessagingServiceImpl';
import remote from '../../utils/decorators/remote';

@remote
export default class RemoteMessagingServiceImpl extends MessagingServiceImpl {}
