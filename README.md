# Proyecto de Encriptación de Texto

Este es un proyecto simple de encriptación y desencriptación de texto utilizando reglas de sustitución, como parte del challenge del Proyecto ONE de Oracle+Alura LATAM. 
La aplicación permite al usuario encriptar y desencriptar texto, así como copiar el texto resultante al portapapeles. También incluye un modal para manejar errores cuando el texto contiene caracteres no permitidos.

![357674883-58584c19-d465-434e-b1db-704704861548](https://github.com/user-attachments/assets/55515875-1493-4d07-826b-793a4cd1bec2)


## Características

- **Encriptación**: Convierte texto utilizando reglas de sustitución.
- **Desencriptación**: Revierte el texto encriptado a su forma original.
- **Copiar al portapapeles**: Permite copiar el texto resultante al portapapeles.
- **Validación**: Verifica que el texto solo contenga letras minúsculas del alfabeto inglés.

## Uso

1. **Encriptar Texto**:
   - Escribe o pega el texto que deseas encriptar en el campo de texto.
   - Haz clic en el botón **"Encriptar"** para convertir el texto utilizando las reglas de encriptación definidas.

2. **Desencriptar Texto**:
   - Escribe o pega el texto encriptado en el campo de texto.
   - Haz clic en el botón **"Desencriptar"** para revertir el texto a su forma original.

3. **Copiar Texto**:
   - Una vez que el texto ha sido encriptado o desencriptado, haz clic en el botón **"Copiar"** para copiar el texto al portapapeles.

4. **Errores**:
   - Si el texto contiene caracteres que no están permitidos, se mostrará un modal con un mensaje de error.

## Las "llaves" de encriptación utilizadas son las siguientes:

- La letra "e" es convertida para "enter"
- La letra "i" es convertida para "imes"
- La letra "a" es convertida para "ai"
- La letra "o" es convertida para "ober"
- La letra "u" es convertida para "ufat"

**Requisitos:**

-Debe funcionar solo con letras minúsculas.
- No deben ser utilizados letras con acentos ni caracteres especiales.
- Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.

Por ejemplo:
- "gato" => "gaitober"
- gaitober" => "gato"

## Tecnologías Utilizadas

- HTML
- CSS 
- JavaScript

