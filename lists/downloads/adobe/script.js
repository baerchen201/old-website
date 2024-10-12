const xhr = new XMLHttpRequest(),
	list = document.querySelector("ol");
xhr.onreadystatechange = () => {
	if (xhr.readyState == 4 && xhr.status == 200) {
		list.innerHTML = "";
		xhr.responseText.split("\n").forEach((element) => {
			if (element == "") {
				return;
			}
			let url = element.split(";")[0],
				url_suffix = element.split(";")[1],
				name = element.split(";")[2],
				provider = element.split(";")[3],
				li = document.createElement("li"),
				a = document.createElement("a"),
				span = document.createElement("span");
			a.innerText = name;
			a.href = url + url_suffix;

			span.innerHTML = `  (${provider.trimEnd()})`;
			li.appendChild(a);
			li.appendChild(span);
			list.appendChild(li);
			console.log(name, url, url_suffix);
		});
	}
};
xhr.open("GET", "list.csv");
xhr.send();
