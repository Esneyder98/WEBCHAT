module.exports = httpServer => {

    const { Server } = require("socket.io");
    const io = new Server(httpServer);

    io.on("connection", socket => {
        const cookie = socket.handshake.headers.cookie
        const user = cookie.split("=").pop()
        
        socket.on("message",message => {
            // se emite a todos los conectados
            io.emit("senMessageconnected",{
                user,message
            });
        })

    });

}