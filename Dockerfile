FROM node:18-slim

# Install dependencies for Gatsby
RUN apt-get update && apt-get install -y \
    python3 \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Create app directory
WORKDIR /app

# Install Gatsby CLI globally
RUN npm install -g gatsby-cli

# Copy package files for more efficient caching
COPY package*.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Set environment variables
ENV NODE_ENV=development
ENV GATSBY_TELEMETRY_DISABLED=1

# Command to run
CMD ["gatsby", "develop", "--host", "0.0.0.0"]

# Expose port
EXPOSE 8000 9000