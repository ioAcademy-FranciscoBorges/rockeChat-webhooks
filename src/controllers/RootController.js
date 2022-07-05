const { req, res }=  require('express');
const SendMessageService = require("../service/SendMessageService")
const ReceivedNotificationService = require("../service/ReceivedNotificationService")

const sendMessageService = new SendMessageService();
const receivedNotificationService = new ReceivedNotificationService();

let is2SendMessage = 1;
let a = 1;

class RootController{
    async index(req, res){
        if(is2SendMessage == 1){
            return receivedNotificationService.handler();
        }else{
            if(a= 1){
                a= 1;
                return sendMessageService.handler("teste");
            }  
        }  
    }
}

module.exports = RootController;