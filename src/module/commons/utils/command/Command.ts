import Remoteable from "./Remoteable";

export default interface Command extends Remoteable{
    execute(methodName: string, returnType: string, service: string, parameters: any): Promise<Object>;
}