# twitch-style chat web app
----
## usage
### from the project's top-level directory
- start the server
  
    ```$ go run server/main.go```
- run the client (optionally provide a name)

    ```$ go run chat-app/main.go --name leewiz```


----
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
- setup grpc with go
- replace go client in `chat-app/` with react frontend (using grpc-web)

