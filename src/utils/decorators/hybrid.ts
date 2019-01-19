import Modules from '../modules/Modules';

/**
 * DO NOT USE
 * @param target
 * @param methodName
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
async function executeRemotely(target: Object, methodName: string) {
  const objectResult = await target['getCommand']().execute(
    Modules.COMMONS,
    'messagingService',
    methodName,
    null,
    'http://localhost:8090/remote'
  );
}

export function hybrid() {
  return (target: any, key: string, descriptor: any) => {
    console.log(target);
    console.log(descriptor);
    const methodName = descriptor.value.name;
    descriptor.value = async function(...args: any[]) {
      return await executeRemotely(target, methodName);
    };
    return descriptor;
  };
}
