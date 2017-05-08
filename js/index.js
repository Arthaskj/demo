window.onload=function(){

	var a=document.getElementById("a");
	var b=document.getElementById("b");
	var c=document.getElementById("c");
	var d=document.getElementById("d");
	var e=document.getElementById("e");
	var f=document.getElementById("f");
	var a1=document.getElementById("a1");
	var b1=document.getElementById("b1");
	var c1=document.getElementById("c1");
	var d1=document.getElementById("d1");
	var e1=document.getElementById("e1");
	var f1=document.getElementById("f1");
	
	a1.onclick=function(){
		a1.style.background="#333";
		a.style.opacity="1";
		b.style.opacity=c.style.opacity=d.style.opacity=e.style.opacity="0";
		b1.style.background=c1.style.background=d1.style.background=e1.style.background="#999";
	}
	b1.onclick=function(){
		this.style.background="#333";
		b.style.opacity="1";
		a.style.opacity=c.style.opacity=d.style.opacity=e.style.opacity="0";
		a1.style.background=c1.style.background=d1.style.background=e1.style.background="#999";
	}
	c1.onclick=function(){
		this.style.background="#333";
		c.style.opacity="1";
		b.style.opacity=a.style.opacity=d.style.opacity=e.style.opacity="0";
		b1.style.background=a1.style.background=d1.style.background=e1.style.background="#999";
	}
	d1.onclick=function(){
		this.style.background="#333";
		d.style.opacity="1";
		b.style.opacity=c.style.opacity=a.style.opacity=e.style.opacity="0";
		b1.style.background=c1.style.background=a1.style.background=e1.style.background="#999";
	}
	e1.onclick=function(){
		this.style.background="#333";
		e.style.opacity="1";
		b.style.opacity=c.style.opacity=d.style.opacity=a.style.opacity="0";
		b1.style.background=c1.style.background=d1.style.background=a1.style.background="#999";

	}
	




	var laotiename=document.getElementById("laotiename");
	var laotiebutton=document.getElementById("laotiebutton");

	laotiebutton.onclick=function(){
		if (laotiename.value=="老铁") {
			window.location.href="laotie/dongrui/dr.html";
		}
		else if (laotiename.value=="陈都会") {
			window.location.href="laotie/chenghui/chenghui.html" ;
		}
		else if (laotiename.value=="梅梅") {
			window.location.href="laotie/meimei/meimei.html";
		}
	}



}
