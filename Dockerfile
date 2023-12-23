# Stage 1: Build Vite project
FROM node:20 AS builder

WORKDIR /

# Copy only yarn.lock to leverage Docker caching
COPY yarn.lock .
COPY package.json .

# Install dependencies using yarn
RUN yarn

# Copy the rest of the application code
COPY . .

# Build Vite project
RUN yarn build-only

FROM nginx:alpine

# Copy the built files from the builder stage to Nginx's default public directory
COPY --from=builder /dist /usr/share/nginx/html

# Copy Nginx configuration
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

