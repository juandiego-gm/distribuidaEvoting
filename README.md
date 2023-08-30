# Programación distribuida
## Juan Diego Góez
## Jason Rivera

El código de este repositorio corresponde a la actividad de consulta sobre el funcionamiento de los sitemas distribuidos, muestra una idea base de como estan diseñádos los sitemas distribuidos, su funciomnamiento y la interconexión entre los componentes que los conforman.

Ademas del código, se adjunta el informe sobre la actividad realizada.



## Sistena Distibuido (evoting)


## Configuración y Despliegue

### Requisitos

- Node.js
- npm
- Angular
- Ionic
- Docker

### Pasos

1. Clonar el repositorio.
2. Instalar las dependencias: En la terminal, navega a la carpeta del servidor y de la aplicación móvil y ejecuta el comando `npm install` para instalar todas las dependencias necesarias.
3. Cambiar la URL del Socket.io: En la aplicación móvil, en los archivos `app.module.ts` y `home.page.ts`, cambia la URL de socket.io para que coincida con la dirección IP o nombre de host del nuevo computador donde se está ejecutando el servidor (por ejemplo, `http://192.168.0.100:3000`).
4. Iniciar Servidor y Base de Datos: En la terminal, navega a la carpeta que contiene el archivo `docker-compose.yml` y ejecuta el comando `docker-compose up` para iniciar el contenedor del servidor y de MongoDB.
5. Compilar y Ejecutar la Aplicación Móvil: En la terminal, navega a la carpeta de la aplicación móvil y ejecuta el comando `ionic serve` para compilar y ejecutar la aplicación en el navegador.

**Nota:** Asegúrate de que ambos computadores puedan comunicarse entre sí en la misma red local o que hayas configurado las direcciones IP y los puertos correctamente si están en redes diferentes.

