import Room from './Room';

/**
 * A @Room represents a persistible conversation where a group of @User can exchange @Message
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class RoomImpl implements Room {
  private name: string;
  private id: string;

  /**
   * constructor
   * @param name the name of the room
   * @param id the id of the room
   */
  constructor(name: string, id: string) {
    this.name = name;
    this.id = id;
  }

  /**
   *@returns the name of the Room
   */
  getName(): string {
    return this.name;
  }

  /**
   * @returns id of the room object
   */
  getId(): string {
    return this.id;
  }
}
