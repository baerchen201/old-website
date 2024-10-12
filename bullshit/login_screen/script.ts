const DELAY = 5;

const consoleText = "";
var passState = false;
const loginconsole = document.getElementById("console")?.querySelector("span");
const consolein = loginconsole?.parentElement?.querySelector("input");
var outputText = Array();

function output(): void {
	if (!loginconsole || !consolein) {
		console.error(
			"Login console or console input is null",
			loginconsole,
			consolein
		);
		return;
	}
	if (outputText.length > 0) {
		loginconsole.innerHTML =
			loginconsole?.innerHTML + outputText.shift().replace("\n", "<br />");
		toggleInput(false);
	} else {
		toggleInput(true);
	}
}
function toggleInput(state: boolean): void {
	if (!consolein) {
		console.error("Consolein is not defined:", consolein);
		return;
	}
	if (state) {
		consolein.disabled = false;
		consolein.focus();
	} else {
		consolein.disabled = true;
		consolein.value = "";
	}
}

function init(): void {
	consolein?.addEventListener("keydown", (e) => {
		console.log(e.key);
		if (e.key == "Enter") {
			if (!passState) {
				pass(consolein.value);
			}
		}
	});
}

setInterval(output, DELAY);

function addTextToQueue(text: string): number {
	text.split("").forEach((element) => {
		outputText.push(element);
	});
	return text.split("").length * DELAY;
}

function example(): void {
	let exampleText = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rutrum nec eros sit amet condimentum. Donec ac metus eu quam elementum feugiat id at felis. Mauris congue facilisis nibh, et rhoncus sem convallis eu. Nulla sit amet urna sed lorem lacinia rutrum. Sed commodo lacus justo, sed imperdiet orci lobortis ut. Fusce vehicula ut nibh eget iaculis. Ut vitae mattis nibh. Etiam condimentum arcu in libero rutrum, et pellentesque dolor ultricies. Duis commodo euismod posuere. Morbi pulvinar nisl ut rhoncus auctor. Cras tincidunt vitae sem ac venenatis. Maecenas tortor ipsum, varius ac commodo vel, pellentesque ut nunc. Sed ligula nisl, euismod in dolor nec, tincidunt sodales ipsum.

In pharetra augue erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean et commodo velit. Fusce arcu risus, semper vel massa id, blandit consectetur lorem. In mollis elit vitae mauris egestas, quis pulvinar eros lobortis. Vivamus nunc sapien, tempus ut mattis non, ornare eget velit. Integer id tellus ut ligula luctus ullamcorper. Aenean lobortis lacus nec lacus sodales, vitae scelerisque nisl consectetur. Vestibulum et bibendum ex. Mauris porttitor, lorem quis sollicitudin vestibulum, odio lectus lacinia purus, ut feugiat felis nunc eu lacus. Etiam eget sem ut dui interdum pretium sed et eros. Aenean elit purus, viverra sit amet consectetur quis, dictum quis turpis. Sed blandit erat ut mattis pretium. Nullam eu leo quis turpis tristique consequat vitae nec nisl.`;
	addTextToQueue(exampleText);
}

function loginname(): void {
	let loginText = `Welcome to the login console.

Please enter your login id:
login> `;
	addTextToQueue(loginText);
}

function pass(
	login: string,
	amount: number = 50,
	minamount: number = 20
): void {
	let wait = Array();
	let wstring = "";
	wait.push(minamount + Math.floor(Math.random() * amount));
	wait.push(minamount + Math.floor(Math.random() * amount));
	wait.push(minamount + Math.floor(Math.random() * amount));
	wait.forEach((element) => {
		let zstr = "";
		for (let i = 0; i < element; i++) {
			zstr = zstr + "‍";
		}
		wstring = wstring + "." + zstr;
	});
	let passText = `
${wstring}

Please enter the corresponding password for the login id '${login}':
key> `;
	addTextToQueue(passText);
	passState = true;
}
init();

loginname();
