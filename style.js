$(document).ready(function() {
$(".transp").wrapInner('<div>').children().addClass("content");
$(".transp .content").before('<div>').prev().addClass(«transparency»);
});