# Async Wrapper Pattern

This repository is to demonstrate a re-usable pattern for executing async code. This handles the try/catch logic in one place and uses currying to expose a re-usable function.

### async-wrapper.js
The async-wrapper.js file exports a single method called `fetchAsync`. This however can be called anything, perhaps `asyncWrapper` might have been a more suitable name. 

The function handles the try catch logic and returns an array in both the try - and catch block. The array stores the data at index 0 and the error at index 1. Therefore, if the error is null, the assumption is that the request was successfully exectuted. However, if the data is null, and the error has information, it is assumed that the request failed and an error object returned. 

### api.js
Simple contains a collection of API requests. 

> Special thanks to the https://jsonplaceholder.typicode.com/ for providing the API to get test data into the app.

### index.js
The index.js file contains the logic to execute the asyncWrapper along with the API requests. The AsyncWrapper uses currying to obtain an optional parameter list that may be forwarded to the final fetch request. 

