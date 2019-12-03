import ServiceResponse from "./ServiceResponse";
import ApplicationError from "../error/ApplicationError";

/**
 * Class that should be returned by RTS service responses.
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class ServiceResponseImpl<T> implements ServiceResponse<T> {
    private response: T;
    private error: ApplicationError;

    constructor(response: T, error?: ApplicationError) {
        this.response = response;
        this.error = error;
    }

    getResponse(): T {
        if (this.error) throw this.error;
        return this.response;
    }
}