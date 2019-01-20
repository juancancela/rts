import Room from './Room';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class RoomImpl implements Room {
  private name: string;
  private id: string;

  constructor(name: string, id: string) {
    this.name = name;
    this.id = id;
  }

  getName(): string {
    return this.name;
  }

  getId(): string {
    return this.id;
  }
}
