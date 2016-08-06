FROM node

MAINTAINER Cory Sabol

# Create the source dir
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy package.js
COPY package.json /usr/src/app
# Install packages
RUN npm install

# Bundle the app source
COPY . /usr/src/app

# Expose port 3000
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
