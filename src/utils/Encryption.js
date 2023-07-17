import CryptoJS from "crypto-js";

export default class Encryption {
  getEncryptedData(content) {
    var key = CryptoJS.enc.Utf8.parse("JhnhSN7RaaWGgWfzeZeJdIMALLlZ1FQ2");
    var iv = CryptoJS.enc.Utf8.parse("JhnhSN7RaaWGgWfz");

    var encrypted = CryptoJS.AES.encrypt(content, key, {
      iv: iv,
    });

    return "00*" + encrypted;
  }
}
