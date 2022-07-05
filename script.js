class Script {
    /**
     * @params {object} request
     */
    prepare_outgoing_request({ request }) {
      // request.params            {object}
      // request.method            {string}
      // request.url               {string}
      // request.auth              {string}
      // request.headers           {object}
      // request.data.token        {string}
      // request.data.channel_id   {string}
      // request.data.channel_name {string}
      // request.data.timestamp    {date}
      // request.data.user_id      {string}
      // request.data.user_name    {string}
      // request.data.text         {string}
      // request.data.trigger_word {string}
        /*return {
            url: 'https://07f9-148-69-188-77.ngrok.io/',
            headers: {"Content-Type": "application/json"},
            method: 'GET'
        }*/
        
    
        return {
          url: 'https://07f9-148-69-188-77.ngrok.io/',
          headers: {"Content-Type": "application/json"},
          method: 'GET'
        };
  /*
      // Prevent the request and return a new message
      match = request.data.text.match(/^ping$/);
      if (match) {
        return {
          message: {
            text: [
              'Hello World'
            ].join('\n'),
             "channel": "#name-of-channel",
             "attachments": [{
               "color": "#FF0000",
               "author_name": "Rocket.Cat",
               "author_link": "https://open.rocket.chat/direct/rocket.cat",
               "author_icon": "https://open.rocket.chat/avatar/rocket.cat.jpg",
               "title": "Rocket.Chat",
               "title_link": "https://rocket.chat",
               "text": "Rocket.Chat, the best open source chat",
               "fields": [{
                 "title": "Priority",
                 "value": "High",
                 "short": false
               }],
               "image_url": "https://rocket.chat/images/mockup.png",
               "thumb_url": "https://rocket.chat/images/mockup.png"
             }]
          }
        };
      }*/
    }
  
    /**
     * @params {object} request, response
     */
    process_outgoing_response({ request, response }) {
      // request              {object} - the object returned by prepare_outgoing_request
  
      // response.error       {object}
      // response.status_code {integer}
      // response.content     {object}
      // response.content_raw {string/object}
      // response.headers     {object}
  
      var text = [];
      response.content.forEach(function(pr) {
        text.push('Hello World');
      });
  
      // Return false will abort the response
      // return false;
  
      // Return empty will proceed with the default response process
      // return;
  
      return {
        content: {
          text: text.join('\n'),
          parseUrls: false
          // "attachments": [{
          //   "color": "#FF0000",
          //   "author_name": "Rocket.Cat",
          //   "author_link": "https://open.rocket.chat/direct/rocket.cat",
          //   "author_icon": "https://open.rocket.chat/avatar/rocket.cat.jpg",
          //   "title": "Rocket.Chat",
          //   "title_link": "https://rocket.chat",
          //   "text": "Rocket.Chat, the best open source chat",
          //   "fields": [{
          //     "title": "Priority",
          //     "value": "High",
          //     "short": false
          //   }],
          //   "image_url": "https://rocket.chat/images/mockup.png",
          //   "thumb_url": "https://rocket.chat/images/mockup.png"
          // }]
        }
      };
    }
  }