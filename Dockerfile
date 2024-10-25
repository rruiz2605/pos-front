# First stage: Build the angular application
#1. Create a new image from the base image
FROM node:20.18.0 AS build

WORKDIR /app

#2. Copy the package.json and package-lock.json files
COPY package.json package-lock.json ./

#3. Install all the dependencies
RUN npm install

#4. Copy the source code
COPY . .

#5. Build the application
RUN npm run build --configuration=production --aot


# Second stage: Serve the application with Nginx Server
#1. Create a new image from the base image
FROM nginx:alpine

#2. Borra la configuración por defecto de nginx
RUN rm /etc/nginx/conf.d/default.conf

#3. Copy the nginx configuration file
COPY ./pos-nginx.conf /etc/nginx/conf.d/

#4. Copy the build output to replace the default nginx contents.
COPY --from=build /app/dist/pos/browser/ /usr/share/nginx/html/pos-dev

#5. Expose the port the app runs in
EXPOSE 8050

#6. Run the server
CMD ["nginx", "-g", "daemon off;"]