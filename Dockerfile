# 1. Base Image: Use Node.js 20 (Compatible with Next.js 15/16)
FROM node:20-alpine

# 2. Set working directory
WORKDIR /app

# 3. Copy package manager files
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy the rest of your code (src, public, config files, etc.)
COPY . .

# 6. Build the Next.js app
RUN npm run build

# 7. Expose the port
EXPOSE 3000

# 8. Start the app
CMD ["npm", "start"]