# Utiliza una imagen base de Node.js
FROM node:14

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el archivo package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código al directorio de trabajo
COPY . /app

# Expone el puerto 3000 para la aplicación
EXPOSE 3000

# Comando para iniciar el servidor
CMD [ "node", "server.js" ]
