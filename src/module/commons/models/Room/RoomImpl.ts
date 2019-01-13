import Room from './Room';
import Serializable from '../../utils/serialization/Serializable';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class RoomImpl implements Room, Serializable<RoomImpl> {
  getName(): string {
    throw new Error('Method not implemented.');
  }

  setName(): string {
    throw new Error('Method not implemented.');
  }

  getId(): string {
    throw new Error('Method not implemented.');
  }

  fromJSON(serializedObject: Object): RoomImpl {
    throw new Error('Method not implemented.');
  }
}
