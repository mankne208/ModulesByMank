module.exports.config = {
    name: "tilemayman",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Mank",
    description: "Tỉ lệ % may mắn của bạn?",
    commandCategory: "Game",
    cooldowns: 5
};

module.exports.run = function ({ api, event }) {
    var tile = Math.floor(Math.random() * 101); 
var msg = {body: `⚜Tỉ lệ may mắn của bạn là ${tile}% ⚜️` }
        return api.sendMessage(msg, event.threadID, event.messageID)
      }


