function makeCoffee(coffeeType = "Coffee") {
	alert(`Here is your ${coffeeType}: ☕`);
}

function loadCoffee() {
	let xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (xhr.readyState != 4 || xhr.status != 200 || xhr.responseText == "")
			return;
		console.log(xhr.responseText);
		let coffee = xhr.responseText.split("\n");
		coffee.forEach((element) => {
			let button = document.createElement("button");
			button.innerHTML = element;
			button.onclick = () => {
				makeCoffee(element);
			};
			document.body.appendChild(button);
		});
	};
	xhr.open("GET", "coffee.txt");
	xhr.send();
}

window.addEventListener("load", loadCoffee);
