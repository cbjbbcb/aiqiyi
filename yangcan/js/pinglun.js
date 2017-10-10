function aaa() {
	var date1 = new Date();
	var time = date1.getHours() + ":" + date1.getMinutes() + ":" + date1.getSeconds();
	if($("textarea").val() != "") {
		var contain = $("textarea").val();
		var str;
		str = "<div class='chat'>";
		str += '<div class="chat_left">';
		str += "<img src='./img/pinglun/QQ图片20171004221313.jpg' />";
		str += "</div>";
		str += '<div class="chat_right">';
		str += '<p><a href="javascript:;" class="user_name">杨灿</a>';
		str += "<span class='pinglun_time'>&nbsp;" + time + "<span></p>";
		str += "<p>" + contain + "</p>";
		str += "<p><span><i></i>浏览1</span>";
		str += '<div style="float: right;">';
		str += '<a href="javascript:;"class="pinglun_zan"><i></i>点赞0</a>';
		str += '<a href="javascript:;"class="pinglun_pinglun"><i></i>评论0</a>';
		str += "</div></p></div></div>";
		$(str).prependTo(".chatBody");

	}
}

