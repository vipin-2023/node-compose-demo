# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Copy app source code
COPY . .

# Install dependencies
RUN npm ci

# Expose the port on which the app will run
EXPOSE 3000

# Transpile TypeScript to JavaScript
RUN npm run build 

# Start the application
CMD ["npm", "start"]
