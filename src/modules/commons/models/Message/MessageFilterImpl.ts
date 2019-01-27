import Message from './Message';
import MessageFilter from './MessageFilter';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class MessageFilterImpl implements MessageFilter {
  executeFilter(): Message[] {
    return [null, null, null];
  }
}
