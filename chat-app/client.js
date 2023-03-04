const { HelloRequest, HelloReply } = require('./proto/chat_pb.js')
const { ChatServiceClient } = require('./proto/chat_grpc_web_pb.js')

var client = new ChatServiceClient('http://localhost:8080', null, null);

var request = new HelloRequest();
request.setName('World');

client.sayHello(request, {}, (err, response) => {
    if(err) {
        console.log(`unexpected error for sayHello: code = ${err.code}` +
        `, message = "${err.message}"`);
    } else {
        console.log('received hello response');
        console.log(response.getMessage());
    }
})

request.setName('Leewiz');

client.sayHelloAgain(request, {}, (err, response) => {
    if(err) {
        console.log(`unexpected error for sayHelloAgain: code = ${err.code}` +
        `, message = "${err.message}"`);
    } else {
        console.log('received hello again response');
        console.log(response.getMessage());
    }
})