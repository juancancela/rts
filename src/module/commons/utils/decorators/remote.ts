/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default function remote<T extends {new(...args:any[]):{}}>(constructor:T) {
    return class extends constructor {
        isRemoteExecution = true;
    }
}
