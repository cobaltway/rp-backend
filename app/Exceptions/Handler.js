const BaseExceptionHandler = use('BaseExceptionHandler');
const errorsStatus = { USER_NOT_FOUND: 400 };

class ExceptionHandler extends BaseExceptionHandler {
  async handle(error, { response, request }) {
    response.status(errorsStatus[error.message] || error.status).send(error.message.split(':')[0]);
    if (error.message && error.message.indexOf('E_MISSING_DATABASE_ROW') !== -1) return;
    console.error(`${request.method()} ${request.originalUrl()}:`, error);
  }
}

module.exports = ExceptionHandler;
