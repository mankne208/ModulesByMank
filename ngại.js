const fs = require("fs");
module.exports.config = {
	name: "ngại",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Mank :>>>", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "ngại quá",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("ngại")==0 || (event.body.indexOf("Ngại")==0)) {
		var msg = {
				body: "Ơ ngại 😳",
				attachment: fs.createReadStream(__dirname + `/noprefix/ngại.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}