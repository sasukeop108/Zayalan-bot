require("dotenv").config();

const { App, autoAcknowledge } = require("@slack/bolt");

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    appToken: process.env.SLACK_APP_TOKEN,
    socketMode: true
});

app.command("/zayalan-bot-ping",async({command,ack,respond})=>{
    const start = Date.now();
    await ack();
    const latency = Date.now()-start;
    await respond({ text: `Pong!\nLatency: ${latency}ms` });
});

(async() =>{
    await.app.start();
    console.log("Bot is online!");
})();

app.command("/zayalan-bot-help", async({ack, respond})=>{
    await ack;
    await respond({
        text:
        `/zayalan-bot-ping - Check bot latency
         /zayalan-bot-hello - replies hello`
    })
})

app.command("/zayalan-bot-hello", async({ack, respond})=> {
    await ack;
    await respond({
        text:
        `Hello ! What's up?`
    })
})

app.command("/zayalan-bot-channel-ping", async({command, ack, say}) =>{
    try {
        await ack();
        await say(`<!channel>`)
    }
})

