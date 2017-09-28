$(function() {
	$(".nav3 li").mouseenter(function() {
		$(this).find("p").show("300");
		$(this).find(".nav3_cover").css("background","rgba(0,0,0,0.2)")
	})
	$(".nav3 li").mouseleave(function() {
		$(this).find("p").hide("fast");
			$(this).find(".nav3_cover").css("background","")
	})
})