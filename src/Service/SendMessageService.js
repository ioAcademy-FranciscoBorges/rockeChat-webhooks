const axios = require('axios');
const path = require('path');

retreiveMessage = 0;

class SendMessageService{
    async handler(message){
        if(retreiveMessage == 1){
            const data = {
                    "text": `${message}`,
                }
                const options = {
                    headers: {"Content-Type": "application/json"}
                }
                
                const response = await axios.post("https://demo.ioconnect.iotech.pt/hooks/62c407886701b303f664e35c/TvT2PgpkKjmAWix4PtWjaWYjY6WHN52q357DB7m6uWNnvitc",data, options);
        
                //console.log(response)
                if(response.data.success){
                    //console.log(response.data)
                    console.log({
                        'response': 'Message sent'
                    })
                }else{
                    console.log({
                        'response': 'Message cant be sent'
                    })
                }
        }else{
            console.log({
                'response': 'Cant send message'
            })
        }
    }
}

module.exports = SendMessageService;