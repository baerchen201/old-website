function print(content) {
	console.log(content);
}
function getScrollbarWidth() {
	//* Credits to chatgpt for this one
	const outer = document.createElement("div");
	outer.style.visibility = "hidden";
	outer.style.width = "100px";
	outer.style.msOverflowStyle = "scrollbar";
	document.body.appendChild(outer);
	const widthNoScroll = outer.offsetWidth;
	outer.style.overflow = "scroll";
	const inner = document.createElement("div");
	inner.style.width = "100%";
	outer.appendChild(inner);
	const widthWithScroll = inner.offsetWidth;
	outer.parentNode.removeChild(outer);
	return widthNoScroll - widthWithScroll;
}

function adjustHeaderWidth() {
	const element = document.querySelector("header");
	const scrollbarWidth = getScrollbarWidth();
	const viewportWidth = window.innerWidth;
	const adjustedWidth = viewportWidth - (scrollbarWidth + 4) + "px";
	element.style.width = adjustedWidth;
}
function onload() {
	const bearnoise = document.createElement("audio");
	bearnoise.src = "./bear.mp3";
	document.getElementById("logo").addEventListener("click", (ev) => {
		if (bearnoise.paused) {
			bearnoise.play();
		}
	});

	document.addEventListener("scroll", (ev) => {});

	window.addEventListener("resize", adjustHeaderWidth);

	adjustHeaderWidth();
}

window.addEventListener("load", onload);
