var Botkit = require('botkit');

var controller = Botkit.slackbot();

var bot = controller.spawn({

    token: "xoxb-64447209091-pBwDlxGQGJSoGqDXSWSNL3ei"

});

bot.startRTM(function(err,bot,payload) {
    bot.say("I have been activated!");

    if (err) {

        throw new Error('Could not connect to Slack');

    }

});

controller.hears('open the (.*) doors','direct_message,direct_mention',function(bot,message) {
    var doorType = message.match[1]; //match[1] is the (.*) group. match[0] is the entire group (open the (.*) doors).
    if (doorType === 'pod bay') {
        return bot.reply(message, 'I\'m sorry, Dave. I\'m afraid I can\'t do that.');
    }
    return bot.reply(message, 'Okay');
});


controller.hears('help','direct_message,direct_mention',function(bot,message) {
    console.log(controller);
    var reply_with_attachments = {
        'as_user': true ,
        'text': 'Got it! :ambulance:',
        'attachments': [
            {
                'fallback': 'To be usefulsss, I need you to invite me in a channel.',
                'title': 'How can I help you?',
                'text': 'To be useful, I need you to invite me in a channel ',
                'color': '#7CD197'
            }
        ],
        'token' : "xoxb-64447209091-pBwDlxGQGJSoGqDXSWSNL3ei",
        'link_names' : 'tbeardjr'

    };

    bot.reply(message, "Hold on...");

    bot.reply(message, reply_with_attachments);
});