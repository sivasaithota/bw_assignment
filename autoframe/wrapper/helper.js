const path = require('path');

class Helper {
  static getPath(filepath) {
    const filePath = path.resolve(__dirname, filepath);
    console.log(filePath);// eslint-disable-line no-console
    return filePath;
  }

  static getOS() {
    const os = process.platform;
    switch (os) {
      case 'darwin': return 'macOS';
      case 'win32': return 'windows';
      default: return 'linux';
    }
  }

  static isLinux() {
    return this.getOS().includes('linux');
  }

  timeout(ms, fun) {
    return new Promise(resolve => {
      return setTimeout(() => {
        resolve(fun);
      }, ms);
    });
  }
}
module.exports = Helper;
