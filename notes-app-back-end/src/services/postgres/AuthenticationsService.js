const { Pool } = require('pg');

class AuthenticationsService {
  constructor() {
    this._pool = new Pool();
  }
}

module.exports = AuthenticationsService;
