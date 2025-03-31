import { WebSocketServer, WebSocket } from "ws";
import { Server } from "http";

export function setupWebSocket(server: Server){

    // wss - server
    // ws - individual client
    const wss  = new WebSocketServer({server}); 

    let clientNum = 0; 

    wss.on('connection', (ws: WebSocket) =>{
        clientNum++; 
        console.log(`Client ${clientNum} connected`)

        ws.on('message', (message) =>{
            console.log('received: ', message.toString());
            
            wss.clients.forEach((client) => {
                if(client.readyState === WebSocket.OPEN){
                    client.send(`Echo:  ${message}`)
                }
            })
        }); 

        ws.on('close', () =>  console.log(`Client ${clientNum} disconnected`))
    })

    console.log('websocket is running...')
   


    
}