// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var chat_pb = require('./chat_pb.js');

function serialize_chatpb_HelloReply(arg) {
  if (!(arg instanceof chat_pb.HelloReply)) {
    throw new Error('Expected argument of type chatpb.HelloReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chatpb_HelloReply(buffer_arg) {
  return chat_pb.HelloReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_chatpb_HelloRequest(arg) {
  if (!(arg instanceof chat_pb.HelloRequest)) {
    throw new Error('Expected argument of type chatpb.HelloRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chatpb_HelloRequest(buffer_arg) {
  return chat_pb.HelloRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var ChatServiceService = exports.ChatServiceService = {
  sayHello: {
    path: '/chatpb.ChatService/SayHello',
    requestStream: false,
    responseStream: false,
    requestType: chat_pb.HelloRequest,
    responseType: chat_pb.HelloReply,
    requestSerialize: serialize_chatpb_HelloRequest,
    requestDeserialize: deserialize_chatpb_HelloRequest,
    responseSerialize: serialize_chatpb_HelloReply,
    responseDeserialize: deserialize_chatpb_HelloReply,
  },
  sayHelloAgain: {
    path: '/chatpb.ChatService/SayHelloAgain',
    requestStream: false,
    responseStream: false,
    requestType: chat_pb.HelloRequest,
    responseType: chat_pb.HelloReply,
    requestSerialize: serialize_chatpb_HelloRequest,
    requestDeserialize: deserialize_chatpb_HelloRequest,
    responseSerialize: serialize_chatpb_HelloReply,
    responseDeserialize: deserialize_chatpb_HelloReply,
  },
};

exports.ChatServiceClient = grpc.makeGenericClientConstructor(ChatServiceService);
