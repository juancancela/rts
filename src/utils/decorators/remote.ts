import Config from '../../config/Config';

/**
 * @description
 * Remote decorator acts as a proxy that intercepts calls to service methods, allowing remote execution of them.
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
function remote<T>(target, originalFunctionName, descriptor) {
  const originalFunction = descriptor.value;
  descriptor.value = async (...parameters) => {
    if (Config.isRemote) {
      const { execute, getCommand, getServiceName, getModuleName } = target;
      return await execute(originalFunctionName, parameters, getCommand(), getServiceName(), getModuleName());
    } else {
      return await originalFunction(...parameters);
    }
  };
  return descriptor;
}

export default remote;
