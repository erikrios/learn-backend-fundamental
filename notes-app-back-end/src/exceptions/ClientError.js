class ClientError extends Error {
  constructor(message, statusCode = 400) {
    super();
    this.statusCode = statusCode;
    this.name = 'ClientError';
  }
}

module.exports = ClientError;
