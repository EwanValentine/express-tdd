default: run

run:
	docker run -d -p 27017:27017 mongo:3.0
	node index.js
