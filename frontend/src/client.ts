import * as grpc from "@grpc/grpc-js"

import { HelloRequest, HelloReply } from "../proto/chat_pb"
import { ChatServiceClient } from "../proto/chat_grpc_pb"

const client = new ChatServiceClient(
    "localhost:9090",
    grpc.credentials.createInsecure()
);

const request = new HelloRequest();
request.setName("leewiz");

client.sayHello(request, (error, response) => {
    if(!error) {
        console.info("Greeting:", response.getMessage());
    } else {
        console.error("Error:", error.message);
    }
});

request.setName("ashwiz");
client.sayHelloAgain(request, (error, response) => {
    if(!error) {
        console.info("Another Greeting:", response.getMessage());
    } else {
        console.error("Error:", error.message);
    }
});