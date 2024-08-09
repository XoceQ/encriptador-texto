// Validar que el texto solo contenga letras minúsculas y espacios
function validarTexto(texto) {
    const regex = /^[a-z ]+$/;
    return regex.test(texto);
}

// Función para cifrar el texto
function cifrarTexto() {
    
    const texto = document.getElementById("texto").value;
    const mensajes = document.getElementById("mensajes");

    if (!validarTexto(texto)) {
        mensajes.textContent = "Solo se aceptan letras minúsculas y espacios, sin caracteres especiales.";
        return;
    }

    mensajes.textContent = "";
    
    // Reemplazar las letras por secuencias
    const reemplazos = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    let resultado = '';
    
    // Recorrer el texto y aplicar los reemplazos
    for (let i = 0; i < texto.length; i++) {
        const char = texto[i];
        resultado += reemplazos[char] || char;
    }

    document.getElementById("resultado").value = resultado;
}

// Función para descifrar el texto
function descifrarTexto() {

    const texto = document.getElementById("texto").value;
    const mensajes = document.getElementById("mensajes");

    if (!validarTexto(texto)) {
        mensajes.textContent = "Solo se aceptan letras minúsculas y espacios, sin caracteres especiales.";
        return;
    }

    mensajes.textContent = "";
    
    // Reemplazar las secuencias por letras
    const reemplazos = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    // Utilizar una expresión regular para encontrar las secuencias
    let resultado = texto;
    for (const [clave, valor] of Object.entries(reemplazos)) {
        const regex = new RegExp(clave, 'g');
        resultado = resultado.replace(regex, valor);
    }

    document.getElementById("resultado").value = resultado;
}



// Función para copiar el texto cifrado/descifrado
function copiarTexto() {
    const resultado = document.getElementById("resultado");
    resultado.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles.");
}

// Conectar funciones a los botones correspondientes
document.getElementById("btn-cifrar").addEventListener("click", cifrarTexto);
document.getElementById("btn-descifrar").addEventListener("click", descifrarTexto);
document.getElementById("btn-copiar").addEventListener("click", copiarTexto);
