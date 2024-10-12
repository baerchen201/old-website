const mirrors = document
		.getElementsByClassName("download")[0]
		.querySelector("ul")
		.getElementsByTagName("a"),
	colormode = document.getElementById("lightmode"),
	contentList = document.querySelector("h2"),
	nav = document.querySelector("nav"),
	contentListShowButton = document.getElementById("contents"),
	downloadListShowButton = document.getElementById("download"),
	downloadList = document.getElementsByClassName("download")[0],
	moreInfoShowButton = document.getElementById("more"),
	moreInfoList = document.getElementById("more_info");

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
	if (window.innerWidth > 800 && window.innerHeight > 600) {
		document.getElementById("mobile").style.display = "block";
	} else {
		document.getElementById("mobile").style.display = "none";
	}
}

window.addEventListener("resize", checkMobile);
checkMobile();

contentListShowButton.onclick = (e) => {
	contentList.style.display = "";
	downloadList.style.display = "none";
	moreInfoList.style.display = "none";
	localStorage.setItem("currentTab", "contents");
};
downloadListShowButton.onclick = (e) => {
	contentList.style.display = "none";
	downloadList.style.display = "";
	moreInfoList.style.display = "none";
	localStorage.setItem("currentTab", "down");
};
moreInfoShowButton.onclick = (e) => {
	contentList.style.display = "none";
	downloadList.style.display = "none";
	moreInfoList.style.display = "";
	localStorage.setItem("currentTab", "more");
};

contentList.style.display = "";
downloadList.style.display = "none";
moreInfoList.style.display = "none";
