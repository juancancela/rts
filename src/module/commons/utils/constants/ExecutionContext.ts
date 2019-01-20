/**
 * @description
 * RTS services provide a hybrid interface that can be executed both locally and on remote through HTTP.
 * ExecutionContext establishes an enumerator that determines them.
 *
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
enum ExecutionContext {
  REMOTE = 1,
  LOCAL
}

export default ExecutionContext;
