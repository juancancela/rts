/**
 * @description
 * Remote decorator acts as a proxy that intercepts calls to service methods, allowing remote execution of them.
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
function remote<T>(target, key, descriptor) {
  const originalFunction = descriptor.value;
  if (target.isRemote()) {
    descriptor.value = async (params: any[]) => {
      if (!target.isRemote()) {
        return await originalFunction(params);
      } else {
        return await target.execute(key, params, target.getCommand(), target.getServiceName(), target.getModuleName());
      }
    };
  }
  return descriptor;
}

export default remote;
