export default function get<T>(response: T): T {
  if (!response) throw new Error('null - tbd');
  const _isError = response => response.constructor.name === 'ApplicationError';
  if (_isError(response)) throw new Error('null - tbd');
  return response;
}
