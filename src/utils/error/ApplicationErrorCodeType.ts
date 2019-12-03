/**
 * @description ApplicationErrorType
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
enum ApplicationErrorCodeType {
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
  PROVIDER_NOT_AVAILABLE_ERROR = 'PROVIDER_NOT_AVAILABLE_ERROR',
  SERVICE_ERROR = 'SERVICE_ERROR',
  INPUT_PARAMETERS_ERROR = 'INPUT_PARAMETERS_ERROR',
  PROVIDER_TRANSFORMATION_ERROR = 'PROVIDER_TRANSFORMATION_ERROR'
}

export default ApplicationErrorCodeType;
