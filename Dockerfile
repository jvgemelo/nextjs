# # Etapa 1: Construcción
# FROM node:latest 
# # Establecer el directorio de trabajo en el contenedor
# WORKDIR /app

# COPY package.json .

# RUN yarn

# COPY . .

# RUN yarn build || true
# #Este true hace que se ignoren los errores de typescript al crear la imagen de docker
# # RUN yarn build || true

# CMD ["yarn","start"]

## Etapa 1: Construcción
FROM node:latest AS builder

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar los archivos de dependencias de npm
COPY package.json yarn.lock ./

# Instalar dependencias
RUN yarn install

# Copiar el resto del código de la aplicación
COPY . .

# Construir la aplicación Next.js
RUN yarn build 

# Etapa 2: Producción
FROM node:alpine AS runner

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar los archivos necesarios desde la etapa de construcción
COPY --from=builder /app/package.json /app/yarn.lock ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Instalar solo las dependencias de producción
RUN yarn install --production

# Exponer el puerto que la aplicación utilizará
EXPOSE 3000

# Comando por defecto para iniciar la aplicación
CMD ["yarn", "start"]


# ------------------------------------------------------------------------------------------

# # Etapa 1: Construcción
# FROM node:20 AS builder

# # Establecer el directorio de trabajo en el contenedor
# WORKDIR /app

# # Copiar los archivos de dependencias de npm
# COPY package.json package-lock.json ./

# # Actualizar npm a la última versión
# RUN npm install -g npm@latest

# # Instalar dependencias usando legacy-peer-deps
# RUN npm install --legacy-peer-deps

# # Copiar el resto del código de la aplicación, excepto los archivos ignorados por .dockerignore
# COPY . .

# # Construir la aplicación Next.js
# RUN npm run build

# # Etapa 2: Producción
# FROM node:20-alpine AS runner

# # Establecer el directorio de trabajo en el contenedor
# WORKDIR /app

# # Instalar PM2 para la gestión del proceso de producción
# RUN npm install -g pm2

# # Copiar los archivos necesarios desde la etapa de construcción
# COPY --from=builder /app/package.json /app/package-lock.json /app/next.config.js ./
# COPY --from=builder /app/.next ./.next
# COPY --from=builder /app/public ./public
# COPY --from=builder /app/node_modules ./node_modules

# # Exponer el puerto que la aplicación utilizará
# EXPOSE 3000

# # Comando por defecto para iniciar la aplicación
# CMD ["pm2-runtime", "start", "npm", "--", "start"]




