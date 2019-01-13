import Command from "./Command";

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface Commandable {
    getCommand(): Command;
}