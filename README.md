# webtest

Node.js

events.js:183
      throw er; // Unhandled 'error' event
      ^

Error: listen EADDRINUSE :::3978
    at Object._errnoException (util.js:1022:11)
    at _exceptionWithHostPort (util.js:1044:20)
    at Server.setupListenHandle [as _listen2] (net.js:1351:14)
    at listenInCluster (net.js:1392:12)
    at Server.listen (net.js:1476:7)
    at Server.listen (C:\Users\yu\Documents\GitHub\BotBuilder-
Samples\Node\cards-AdaptiveCards\node_modules\restify\lib\server.js:404:32)
    at Object.<anonymous> (C:\Users\yu\Documents\GitHub\BotBuilder-
Samples\Node\cards-AdaptiveCards\app.js:10:8)
    at Module._compile (module.js:643:30)
    at Object.Module._extensions..js (module.js:654:10)
    at Module.load (module.js:556:32)
    
 [解决方案]https://stackoverflow.com/questions/48765445/node-js-error-message-events-js183-throw-er-unhandled-error-event
