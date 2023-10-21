# Use an official Node.js runtime as the base image
FROM node:16-alpine

# Set the working directory in the Docker container
WORKDIR /Dinerpro-seller-side/src/app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the application's dependencies inside the container
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Build the Next.js app
RUN npm run build

# Expose port 3000 to be accessed externally
EXPOSE 3000

# Define the command to run the application
CMD [ "npm", "start" ]
