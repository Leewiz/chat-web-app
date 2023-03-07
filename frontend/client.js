"use strict";
exports.__esModule = true;
var grpc = require("@grpc/grpc-js");
var chat_pb_1 = require("./proto/chat_pb");
var chat_grpc_pb_1 = require("./proto/chat_grpc_pb");
var client = new chat_grpc_pb_1.ChatServiceClient("localhost:9090", grpc.credentials.createInsecure());
var request = new chat_pb_1.HelloRequest();
request.setName("world");
client.sayHello(request, function (error, response) {
    console.log("sending request...");
    if (!error) {
        console.info("Greeting:", response.getMessage());
    }
    else {
        console.error("Error:", error.message);
    }
});
console.info("done");
