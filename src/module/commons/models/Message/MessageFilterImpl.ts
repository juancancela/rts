import Message from './Message';
import Filter from '../../utils/filters/Filter';
import { MessageFilter, MessageImpl } from '..';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class MessageFilterImpl implements MessageFilter {
  executeFilter(): Message[] {
    return [null, null, null];
  }
}
