const canvas = document.querySelector("canvas"),
	ctx = canvas.getContext("2d");
function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = "black";
	ctx.fillRect(0, canvas.height / 2 - 1, canvas.width, 2);
	ctx.fillRect(canvas.width / 2 - 1, 0, 2, canvas.height);
	ctx.fillStyle = "red";
	window.formula = true;
	let lastX = undefined,
		lastY = undefined;

	let errors = 0;

	ctx.fillStyle = "red";
	ctx.strokeStyle = "red";
	canvas.height *= 2;
	canvas.width *= 2;
	let xs = [],
		ys = [];
	for (let j = -canvas.width / 2; j < canvas.width / 2; j++) {
		for (let i = -canvas.height / 2; i < canvas.height / 2; i++) {
			window.formula = false;
			let form = document.querySelector("input").value;
			form = form.replace("^", "**").replace("X", "x").replace("x", "j");
			try {
				eval(
					"if (i == " +
						form +
						") { window.formula = true; console.log('Formula matches on', i, j);}"
				);
			} catch (error) {
				errors += 1;
			}

			if (window.formula) {
				xs.push(j);
				ys.push(i);
			}
		}
	}
	canvas.height /= 2;
	canvas.width /= 2;
	for (let index = 0; index < xs.length; index++) {
		const j = xs[index],
			i = ys[index];
		ctx.fillRect(j + canvas.width / 2, -i + canvas.height / 2, 1, 1);
		if (lastX !== undefined && lastY !== undefined) {
			ctx.beginPath();
			ctx.moveTo(lastX + canvas.width / 2, lastY + canvas.height / 2);
			ctx.lineTo(j + canvas.width / 2, -i + canvas.height / 2);
			ctx.stroke();
		}
		lastX = j;
		lastY = -i;
	}
	document.getElementById("errors").innerHTML += errors;
	ctx.fillStyle = "black";
	ctx.fillRect(0, canvas.height / 2 - 1, canvas.width, 2);
	ctx.fillRect(canvas.width / 2 - 1, 0, 2, canvas.height);
	alert("Finished!");
}
