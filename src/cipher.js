const cipher = {
  encode: function (mensaje, offset) {
    let result = "";
    let code;
    for (let i = 0; i < mensaje.length; i++) {

      if (mensaje.charCodeAt(i) >= 65 && mensaje.charCodeAt(i) <= 90) {
        code = (((mensaje.charCodeAt(i) - 65) + offset) % 26) + 65;

      }
      else if (mensaje.charCodeAt(i) >= 97 && mensaje.charCodeAt(i) <= 122) {
        code = (((mensaje.charCodeAt(i) - 97) + offset) % 26) + 97;
      }
      else if (mensaje.charCodeAt(i) === 32) {
        code = 32;
      }

      result += String.fromCharCode(code)

    }

    return result;

  },

};
const decodificar = {
  decode: function (message, offset) {
    let result = "";
    let codigo;
    for (let i = 0; i < string.length; i++) {
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
        codigo = (((message.charCodeAt(i) - 65) - offset) % 26) + 65;
      }
      else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
        codigo = (((message.charCodeAt(i) - 97) - offset) % 26) + 97;
      }
      else if (message.charCodeAt(i) === 32) {
        codigo = 32;
      }
      result += String.fromCharCode(codigo);
    }
    return result;
  };
}

export default cipher;
