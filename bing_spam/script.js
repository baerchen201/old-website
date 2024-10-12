function start() {
	document.getElementById("amount").disabled = true;
	document.getElementById("delay").disabled = true;
	let amount = document.getElementById("amount").value,
		delay = document.getElementById("delay").value;
	if (amount != "" && delay != "") {
		document.getElementById("start").disabled = true;
		alert(
			"This window is now going to open a few popups (they will autoclose). If it is getting blocked by your browser, please allow popups for this page as it is how this works. Then click confirm."
		);
		document.getElementById("start").innerHTML = "Confirm";
		for (let i = 0; i < 20; i++) {
			let w = window.open("https://bing.com/search?q=popup", "_blank");
			setTimeout(() => {
				w.close();
			}, 100);
		}
		document.getElementById("start").disabled = false;
		document.getElementById("start").onclick = spam;
	} else {
		document.getElementById("amount").disabled = false;
		document.getElementById("delay").disabled = false;
		alert("Please enter both amount and delay!");
	}
}
function print(content) {
	console.log(content);
}
function spam() {
	document.getElementById("start").disabled = true;

	let amount = document.getElementById("amount").value,
		delay = document.getElementById("delay").value;

	let xhr = new XMLHttpRequest();
	xhr.onreadystatechange = (e) => {
		if (xhr.readyState == 4 && xhr.status == 200) {
			print(xhr.responseText);
			for (let i = 0; i < JSON.parse(xhr.response).length; i++) {
				let element = JSON.parse(xhr.response)[i];
				setTimeout(() => {
					let w = window.open(
						"https://www.bing.com/search?q=" + encodeURIComponent(element),
						"_blank"
					);

					setTimeout(() => {
						w.close();
					}, Number(document.getElementById("autoclose").value));
				}, delay * i);
			}
		}
	};
	xhr.open(
		"GET",
		"https://random-word-api.herokuapp.com/word?number=" + amount
	);
	xhr.send();
}
document.getElementById("amount").disabled = false;
document.getElementById("amount").value = "";
document.getElementById("delay").disabled = false;
document.getElementById("delay").value = "";
document.getElementById("start").disabled = false;
document.getElementById("start").innerHTML = "Start";
document.getElementById("autoclose").value = "";
