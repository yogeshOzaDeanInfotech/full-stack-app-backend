# Stage 1: Build app
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy app source
COPY . .

# Expose the port your backend runs on (commonly 5000)
EXPOSE 5000

# Start the app
CMD ["npm", "start"]
