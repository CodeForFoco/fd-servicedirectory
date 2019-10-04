#Build: docker build -t fd-servicedirectory .
#Run: docker run -it --rm --env-file=.env -p 1234:1234 fd-servicedirectory:latest

#Use LTS slim node base image
FROM node:lts-slim

#Setup basic environment
ENV DEBIAN_FRONTEND=noninteractive \
    LANG=en_US.UTF-8 \
    LC_ALL=C.UTF-8 \
    LANGUAGE=en_US.UTF-8 \
    GOOGLE_API_KEY=

WORKDIR /usr/src/app

#Install yarn
RUN npm install -g yarn

#Copy lock and dep files
COPY yarn.lock package*.json ./

#Run yarn
RUN yarn

#Copy rest of app
COPY . ./

#Expose dev server port
EXPOSE 1234

#Run server
ENTRYPOINT ["yarn"]
CMD ["develop"]
