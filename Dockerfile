# --- Stage 1: Build the frontend ---
FROM node:18-alpine AS builder

WORKDIR /app

# Install git and build tools
RUN apk add --no-cache git

# Copy dependency files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Build production assets
RUN npm run build

# --- Stage 2: Serve static files with a minimal web server ---
FROM node:18-alpine AS runner

WORKDIR /app

# Install the "serve" static server
RUN npm install -g serve

# Copy the built assets from the builder stage
COPY --from=builder /app/dist ./dist

# Cloud Run uses PORT env variable
ENV PORT=5173

EXPOSE 5173

# Serve the app
CMD ["serve", "-s", "dist", "-l", "5173"]
