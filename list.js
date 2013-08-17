var inbox = require("inbox"),
    util = require("util");

var client = inbox.createConnection(false, "imap.gmail.com", {
    secureConnection: true,
    auth:{
        user: "node.inbox@gmail.com",
        pass: "Testikas123"
    },
    debug: true
});

client.connect();

client.on("connect", function(){

    client.listMailboxes(console.log);

    client.openMailbox("INBOX", function(error, mailbox){
        if(error) throw error;
        client.listMessages(0, function(err, messages){
            client.close();
        });
    });
});

client.on('close', function (){
    console.log('DISCONNECTED!');
});
