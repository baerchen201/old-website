const canvas = document
	.getElementById("fireworkButton")
	.querySelector("canvas");
const ctx = canvas.getContext("2d");

const sounds = [
	"./fireworks-01.mp3",
	"./fireworks-01.mp3",
	"./fireworks-01.mp3",
	"./fireworks-01.mp3",
	"./fireworks-01.mp3",
	"./fireworks-01.mp3",

	"./fireworks-04_multiple.mp3",
];

const particles = [];

class Particle {
	constructor(x, y, color) {
		this.x = x;
		this.y = y;
		this.color = color;
		this.radius = Math.random() * 2 + 1;
		this.velocity = {
			x: (Math.random() - 0.5) * 5,
			y: (Math.random() - 0.5) * 5,
		};
		this.alpha = 1;
	}

	update() {
		this.x += this.velocity.x;
		this.y += this.velocity.y;
		this.alpha -= 0.01;
	}

	draw() {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		ctx.fillStyle = this.color;
		ctx.globalAlpha = this.alpha;
		ctx.fill();
		ctx.closePath();
	}
}

function createFirework(playAudio = true) {
	const x = Math.random() * (canvas.width / 4) + canvas.width / 4;
	const y = canvas.height / 2 + (Math.random() - 0.5) * 300;
	const color = `hsl(${Math.random() * 360}, 100%, 50%)`;
	const particleCount = 100;
	if (playAudio) {
		const audioElement = document.createElement("audio");
		audioElement.src = sounds[Math.floor(Math.random() * sounds.length)];
		audioElement.play();
		console.log(audioElement.src);
		if (audioElement.src.includes("multiple")) {
			setTimeout(() => {
				createFirework(false);
			}, 70);
			setTimeout(() => {
				createFirework(false);
			}, 130);
		}
	}

	for (let i = 0; i < particleCount; i++) {
		particles.push(new Particle(x, y, color));
	}
}

function animateFireworkParticles() {
	requestAnimationFrame(animateFireworkParticles);
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	particles.forEach((particle, index) => {
		particle.update();
		particle.draw();

		if (particle.alpha <= 0) {
			particles.splice(index, 1);
		}
	});
}

function adjustCanvasSize(e) {
	document.getElementById("fireworkButton").querySelector("canvas").height =
		window.innerHeight;
	document.getElementById("fireworkButton").querySelector("canvas").width =
		document.getElementById("fireworkButton").querySelector("button")
			.clientWidth * 8;
}

function adjustSvgSize() {
	let prev = document
			.getElementById("fireworkButton")
			.getElementsByClassName("prev")[0],
		n = document
			.getElementById("fireworkButton")
			.getElementsByClassName("new")[0];
	console.log(prev, n);
	if (prev.clientWidth == n.clientWidth) {
		return;
	} else if (prev.clientWidth > n.clientWidth) {
		n.style.width = prev.clientWidth.toString() + "px";
	} else {
		prev.style.width = n.clientWidth.toString() + "px";
	}
}

document
	.getElementById("fireworkButton")
	.querySelector("button")
	.addEventListener("click", createFirework);

animateFireworkParticles();
adjustCanvasSize();
adjustSvgSize();

window.addEventListener("resize", (e) => adjustCanvasSize);
