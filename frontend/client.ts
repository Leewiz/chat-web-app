import * as grpc from "@grpc/grpc-js"

import { HelloRequest, HelloReply } from "./proto/chat_pb"
import { ChatServiceClient } from "./proto/chat_grpc_pb"

const client = new ChatServiceClient(
    "localhost:9090",
    grpc.credentials.createInsecure()
);

const request = new HelloRequest();
request.setName("world");

client.sayHello(request, (error, response) => {
    console.log("sending request...")
    if(!error) {
        console.info("Greeting:", response.getMessage());
    } else {
        console.error("Error:", error.message);
    }
});
console.info("done");