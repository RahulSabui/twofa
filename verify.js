const otplib = require('otplib');

class TokenVerifier {
  constructor(secret) {
    this.secret = secret;
  }

  verifyToken(token) {
    return otplib.authenticator.check(token, this.secret);
  }
}

module.exports = TokenVerifier;
