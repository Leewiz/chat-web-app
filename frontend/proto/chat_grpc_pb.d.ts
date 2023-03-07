// package: chatpb
// file: chat.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as chat_pb from "./chat_pb";

interface IChatServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sayHello: IChatServiceService_ISayHello;
    sayHelloAgain: IChatServiceService_ISayHelloAgain;
}

interface IChatServiceService_ISayHello extends grpc.MethodDefinition<chat_pb.HelloRequest, chat_pb.HelloReply> {
    path: "/chatpb.ChatService/SayHello";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<chat_pb.HelloRequest>;
    requestDeserialize: grpc.deserialize<chat_pb.HelloRequest>;
    responseSerialize: grpc.serialize<chat_pb.HelloReply>;
    responseDeserialize: grpc.deserialize<chat_pb.HelloReply>;
}
interface IChatServiceService_ISayHelloAgain extends grpc.MethodDefinition<chat_pb.HelloRequest, chat_pb.HelloReply> {
    path: "/chatpb.ChatService/SayHelloAgain";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<chat_pb.HelloRequest>;
    requestDeserialize: grpc.deserialize<chat_pb.HelloRequest>;
    responseSerialize: grpc.serialize<chat_pb.HelloReply>;
    responseDeserialize: grpc.deserialize<chat_pb.HelloReply>;
}

export const ChatServiceService: IChatServiceService;

export interface IChatServiceServer extends grpc.UntypedServiceImplementation {
    sayHello: grpc.handleUnaryCall<chat_pb.HelloRequest, chat_pb.HelloReply>;
    sayHelloAgain: grpc.handleUnaryCall<chat_pb.HelloRequest, chat_pb.HelloReply>;
}

export interface IChatServiceClient {
    sayHello(request: chat_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: chat_pb.HelloReply) => void): grpc.ClientUnaryCall;
    sayHello(request: chat_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_pb.HelloReply) => void): grpc.ClientUnaryCall;
    sayHello(request: chat_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_pb.HelloReply) => void): grpc.ClientUnaryCall;
    sayHelloAgain(request: chat_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: chat_pb.HelloReply) => void): grpc.ClientUnaryCall;
    sayHelloAgain(request: chat_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_pb.HelloReply) => void): grpc.ClientUnaryCall;
    sayHelloAgain(request: chat_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_pb.HelloReply) => void): grpc.ClientUnaryCall;
}

export class ChatServiceClient extends grpc.Client implements IChatServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public sayHello(request: chat_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: chat_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public sayHello(request: chat_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public sayHello(request: chat_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public sayHelloAgain(request: chat_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: chat_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public sayHelloAgain(request: chat_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public sayHelloAgain(request: chat_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_pb.HelloReply) => void): grpc.ClientUnaryCall;
}
