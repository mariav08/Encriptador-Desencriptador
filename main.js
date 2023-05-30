





// Función para validar el texto ingresado
function validarTexto() {
  var input = document.getElementById('inputText').value;
  var forbiddenChars = /[A-ZáéíóúÁÉÍÓÚñÑ!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

  if (input.match(forbiddenChars)) {
    document.getElementById('inputText').value = '';
    alert('Por favor, ingresa solo texto en minúsculas sin acentos ni caracteres especiales.');
  }
}

// Función para encriptar el texto
function encriptar() {
  var input = document.getElementById('inputText').value;
  var output = '';

  for (var i = 0; i < input.length; i++) {
    var letra = input[i];
    switch (letra) {
      case 'e':
        output += '\n';
        break;
      case 'i':
        output += 'imes';
        break;
      case 'a':
        output += 'ai';
        break;
      case 'o':
        output += 'ober';
        break;
      case 'u':
        output += 'ufat';
        break;
      default:
        output += letra;
        break;
    }
  }

  document.getElementById('outputText').textContent = output;
}


// Función para desencriptar el texto
function desencriptar() {
  var input = document.getElementById('inputText').value.toLowerCase();
  var output = '';

  for (var i = 0; i < input.length; i++) {
    var letra = input[i];

    switch (letra) {
      case '\n':
        output += 'e';
        break;
      case 'i':
        if (input.includes('imes', i)) {
          output += 'i';
          i += 3;
        } else {
          output += letra;
        }
        break;
      case 'a':
        if (input.includes('ai', i)) {
          output += 'a';
          i += 1;
        } else {
          output += letra;
        }
        break;
      case 'o':
        if (input.includes('ober', i)) {
          output += 'o';
          i += 3;
        } else {
          output += letra;
        }
        break;
      case 'u':
        if (input.includes('ufat', i)) {
          output += 'u';
          i += 3;
        } else {
          output += letra;
        }
        break;
      default:
        output += letra;
        break;
    }
  }

  document.getElementById('outputText').textContent = output;
}


// Función para copiar el texto generado
function copiar() {
  var output = document.getElementById('outputText').textContent;
  navigator.clipboard.writeText(output);
  
}




 

