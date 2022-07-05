class ReceivedNotificationService{
    async handler(whereMessageCameFrom = "Teste"){
        console.log(`Message Received from ${whereMessageCameFrom}`)
    }
}

module.exports = ReceivedNotificationService;