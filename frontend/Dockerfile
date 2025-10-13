FROM node:24-bookworm

# Set work directory
WORKDIR /app

# Sync the project into a new environment, using the frozen lockfile
COPY . /app

RUN apt-get update && apt-get install -y \
    libnspr4 \
    libnss3 \
    libdbus-1-3 \
    libatk1.0-0 \
    libatk-bridge2.0-0 \
    libcups2 \
    libxkbcommon0 \
    libatspi2.0-0 \
    libxcomposite1 \
    libxdamage1 \
    libxfixes3 \
    libxrandr2 \
    libgbm1 \
    libasound2 \
    libx11-xcb1 \
    libxcursor1 \
    libgtk-3-0

RUN rm -rf ./node_modules ./package-lock.json
RUN npm install

ARG OS_TYPE
RUN if [ "$OS_TYPE" = "darwin" ]; then \
      npm install --save-dev @next/swc-linux-arm64-gnu; \
    fi

RUN npx playwright install --with-deps firefox
COPY . .

ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL


