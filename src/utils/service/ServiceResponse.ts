/**
 * Base interface that must be implemented by RTS service responses.
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface ServiceResponse<T> {
    getResponse(): T;
}