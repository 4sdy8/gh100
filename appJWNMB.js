var p_w="100px";  //广告宽度,单位px,如自适应宽度就改为100%;
var p_h="100px";    //广告高度,单位px
var p_s="https://img13.360buyimg.com/ddimg/jfs/t1/186545/34/14555/2409260/60fab8b7E42048a67/623837c2f7a76965.gif";  //广告图片地址
var p_l="http://daaiwujianglubei.com/?c=JWNMB";  //广告图片链接
function closeWin(){
	var box=document.getElementById("f_f");
	box.parentNode.removeChild(box);
}
document.writeln("<style type=\"text/css\">");
document.writeln(".f_f{ width:100%; position:fixed; left:75%;top:50%;width:"+p_w+"; height:"+p_h+"; bottom:0px; z-index:9999;}");
document.writeln(".f_pic{ width:"+p_w+"; height:"+p_h+"; margin:0px auto; position:relative; }");
document.writeln(".f_pic img{ width:"+p_w+"; height:"+p_h+";}");
document.writeln(".f_pic .f_close{z-index:2157999999 !important;height:16px; width:16px; font-size:13px; color:white;text-align:center;line-height:14px;background:rgba(0,0,0,0.7); position:absolute; top:-5px; right:-5px;border-radius:50%;}");
document.writeln("</style>");
document.writeln("<div class=\"f_f\" id=\"f_f\">");
document.writeln("<div class=\"f_pic\">");
document.writeln("<a href=\""+p_l+"\" target=\"_blank\"><img src=\""+p_s+"\" /></a>");
document.writeln("<span onclick='closeWin()' class=\"f_close\" id=\"f_close\">X</span>");
document.writeln("</div>");
document.writeln("</div>");