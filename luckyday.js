
module.exports.config = {
	name: "luckyday", // Tên lệnh, được sử dụng trong việc gọi lệnh
	version: "1.0.0", // phiên bản của module này
	hasPermssion: 0, // Quyền hạn sử dụng, với 0 là toàn bộ thành viên, 1 là quản trị viên trở lên, 2 là admin/owner
	credits: "Mank :>", // Công nhận module sở hữu là ai
	description: "Xem vận", // Thông tin chi tiết về lệnh
	commandCategory: "Game-sp", // Thuộc vào nhóm nào
	usages: "luckyday", // Cách sử dụng lệnh
	cooldowns: 86400, // Thời gian một người có thể lặp lại lệnh
	//Liệt kê các package module ở ngoài tại đây để khi load lệnh nó sẽ tự động cài!
	// Info là phần chi tiết thêm của cách sử dụng lệnh
	// Key: Từ khoá thuộc trong usages
	// prompt: Chi tiết dữ liệu đầu vào của key
	// type: Định dạng dữ liệu đầu vào của key
	// example: Ví dụ ¯\_(ツ)_/¯ 
	envConfig: {
		//Đây là nơi bạn sẽ setup toàn bộ env của module, chẳng hạn APIKEY, ...
	}
};
module.exports.run = function({ api, event, args, client, __GLOBAL }) {
	//Làm cái gì ở đây tuỳ thuộc vào bạn ¯\_(ツ)_/¯ 
return (Math.random() > 0.5) ? api.sendMessage("Nay là ngày măn mắn của bạn \n- Hãy xem lời khuyên sau để được may mắn x100 : \n- Khi đi đường nên nhòm dưới đất có khi nhặt được tiền hoặc vật có giá trị \n- Nên đi xin việc , xây nhà hoặc những việc trọng đại vào ngày này \n- Đi mua vé số đi trúng đấy 🎫", event.threadID, event.messageID) : api.sendMessage("❌ Nay là ngày đen đủi \n- Những điều lưu ý cho bạn : \n+Hạn chế ra ngoài đường khi không cần thiết \n+Đề phòng mọi người xung quanh kể cả người thân, bạn bè \n+Không ăn linh tinh bậy bạ tránh ngộ độc mà lăn đùng :>> \n+ Khi ra ngoài đường tốt nhất không đem những món đắt tiền kẻo bị cướp \n❤ Chúc bạn may mắn 🍀", event.threadID, event.messageID);

}
