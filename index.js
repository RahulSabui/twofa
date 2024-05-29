const QRCodeGenerator = require('./generateQR');
const TokenVerifier = require('./verify');

class TwoFactorAuth {
  constructor(secret) {
    this.qrCodeGenerator = new QRCodeGenerator(secret);
    this.secret = secret || this.qrCodeGenerator.generateSecret();
    this.tokenVerifier = new TokenVerifier(this.secret);
  }

  generateQRCodeURL(user) {
    return this.qrCodeGenerator.generateQRCodeURL(user);
  }

  generateQRCode(user, callback) {
    this.qrCodeGenerator.generateQRCode(user, callback);
  }

  verifyToken(token) {
    return this.tokenVerifier.verifyToken(token);
  }
}

module.exports = TwoFactorAuth;
