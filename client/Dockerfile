FROM node:6.9
COPY ./app /app
EXPOSE 3000
WORKDIR /app
RUN rm -rf node_modules && \
	apt-get update -qq && \ 
	apt-get install -y -qq libzmq-dev && \ 
	npm install --silent

CMD ["node", "/app/client.js"] 
