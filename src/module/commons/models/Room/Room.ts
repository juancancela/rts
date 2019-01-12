import BaseResource from "../BaseResource/BaseResource";

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface Room extends BaseResource {
    getName(): string;
    setName(): string;
}