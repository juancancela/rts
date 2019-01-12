import Command from "./Command";

export default interface Commandable {
    getCommand(): Command;
}