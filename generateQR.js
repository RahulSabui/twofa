const otplib = require('otplib');
const qrcode = require('qrcode');

class QRCodeGenerator {
  constructor() {
    this.secret = otplib.authenticator.generateSecret();
  }

  generateSecret() {
    return this.secret;
  }

  generateQRCodeURL(user) {
    return otplib.authenticator.keyuri(user, 'MyApp', this.secret);
  }

  generateQRCode(user, callback) {
    const otpauth = this.generateQRCodeURL(user);
    qrcode.toDataURL(otpauth, (err, imageUrl) => {
      if (err) {
        callback(new Error('Failed to generate QR code'), null);
      } else {
        callback(null, imageUrl);
      }
    });
  }
}

module.exports = QRCodeGenerator;
