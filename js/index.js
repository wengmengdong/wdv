/*
* @Author: Administrator
* @Date:   2017-11-28 16:32:52
* @Last Modified by:   Administrator
* @Last Modified time: 2017-11-28 16:52:34
*/
$.getScript(
"http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js",
  function(){

  	// document.getElementById("curcity").innerHTML=remote_ip_info.city;
  	$("#curcity").html(remote_ip_info.city);
  	// console.log (remote_ip_info.city);
  }
	);