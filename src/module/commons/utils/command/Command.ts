import Remoteable from "./Remoteable";

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface Command extends Remoteable{
    execute(methodName: string, returnType: string, service: string, parameters: any): Promise<Object>;
}