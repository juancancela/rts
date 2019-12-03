/**
 * @description Base class to be implemented by factories
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
abstract class AbstractFactory<T> {
  abstract create(params: any[]): T;
}

export default AbstractFactory;
