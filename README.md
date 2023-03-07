# twitch-style chat web app
----

## usage
### from the project's top-level directory
- start the server
  
    ```$ go run server/main.go```

- the server must be running a proxy that exposes the services over grpc-web to the browser
  - grpcwebproxy

    `$ grpcwebproxy --backend_addr=localhost:9090 --run_tls_server=false --allow_all_origins`

- serve client files with an http server

    ```$ python -m http.server 8081 &```

- generate the grpc code
  - golang server

    ```$ protoc --go_out=. --go_opt=paths=source_relative --go-grpc_out=. --go-grpc_opt=paths=source_relative proto/chat.proto```

  - js client

    ```$ protoc proto/chat.proto --js_out=import_style=commonjs:./chat-app --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./chat-app```

----

## making changes
### frontend
- changes to front-end will require rebuilding from the top level of the `chat-app` directory
  
  `$ set NODE_OPTIONS=--openssl-legacy-provider`

  `$ npx webpack client.js`
### backend
- make code changes and start the server normally

----
## notes for typescript frontend
### GRPC notes
- gerenate js code
  - ```$ mkdir frontend/proto```
  - ```$ protoc proto/chat.proto --js_out=import_style=commonjs:./frontend --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./frontend```

- generate d.ts code
  - ```$ cd frontend```
  - ```$ npm install grpc_tools_node_protoc_ts --save-dev```
  - ```$ npx grpc_tools_node_protoc.cmd --plugin=protoc-gen-ts=%CD%/node_modules/.bin/protoc-gen-ts.cmd --ts_out=grpc_js:./proto --js_out=import_style=commonjs:./proto --grpc_out=grpc_js:./proto -I ../proto ../proto/chat.proto```

## project features

### general features
- uses GRPC to communicate between services
- frontend will resemble twitch chat
- displays BTTV, FFZ, etc. twitch emotes inline with chat messages (likely using RESTful APIs from providers)

### backend features
- users will be able to authenticate and login
- users will have a profile that they can manage (username, pfp, etc.)

----

## development thoughts

### tentative backlog
- build the chat interface
- connect chat interface with backend


