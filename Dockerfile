# pull official base image
FROM public.ecr.aws/m1y1h0w4/node:20-alpine

# create root directory for our project in the container
RUN mkdir /app

# Set the working directory to /app
WORKDIR /app

# copy files to the app directory
ADD . /app/

# install dependencies
RUN npm install --legacy-peer-deps

#


EXPOSE 3000
CMD ["npm", "run", "start"]
