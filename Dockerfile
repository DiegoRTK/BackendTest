# Usa una imagen oficial de Node.js como base
FROM node:16

# Crea el directorio de trabajo en /home/node/app
WORKDIR /home/node/app

# Copia el archivo package.json e package-lock.json (si existe)
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos
COPY . .

# Expone el puerto 3000 para la aplicación
EXPOSE 3000

# Comando para iniciar la aplicación con npm start
CMD ["npm", "start"]
