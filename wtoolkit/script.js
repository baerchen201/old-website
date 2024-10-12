const mirrors = document
		.getElementsByClassName("download")[0]
		.querySelector("ul")
		.getElementsByTagName("a"),
	colormode = document.getElementById("lightmode");

for (let i = 0; i < mirrors.length; i++) {
	const element = mirrors[i];
	element.innerHTML = element.href
		.replace("https://", "")
		.replace("http://", "")
		.split("/")[0];
}

document.querySelector("baerl").addEventListener("mouseover", (e) => {
	document.querySelector("baerl").innerHTML = "baerl";
});
document.querySelector("baerl").addEventListener("mouseout", (e) => {
	document.querySelector("baerl").innerHTML = "baer1";
});
function darkmode() {
	document.body.style.color = "gray";
	document.body.style.backgroundColor = "black";
	localStorage.setItem("mode", "dark");
}
function lightmode() {
	document.body.style.color = "black";
	document.body.style.backgroundColor = "white";
	localStorage.setItem("mode", "light");
}
colormode.addEventListener("click", (e) => {
	if (document.body.style.color == "black" || document.body.style.color == "") {
		darkmode();
	} else {
		lightmode();
	}
});
if (localStorage.getItem("mode") == "light") {
	lightmode();
} else {
	darkmode();
}

function checkMobile() {
	if (window.innerWidth < 800 || window.innerHeight < 300) {
		document.getElementById("mobile").style.display = "block";
	} else {
		document.getElementById("mobile").style.display = "none";
	}
}

window.addEventListener("resize", checkMobile);
checkMobile();
