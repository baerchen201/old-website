const xhr = new XMLHttpRequest();

xhr.onreadystatechange = () => {
  if (xhr.readyState === 4) {
    if (xhr.status !== 200) {
      fail(xhr.status, xhr.statusText);
    } else {
      success(JSON.parse(xhr.response));
    }
  }
};

function fail(statusCode: number, status: string) {
  document.body.innerText = `FAIL PLACEHOLDER ${statusCode} ${status}`;
}

function success(jsonData: Array<Array<string>>) {
  for (let service of jsonData) {
    console.log(service);
    let container = document.createElement("div");
    container.style.color = service["text_color"];
    if (service["background"]) {
      container.style.background = service["background"]
        .replace("%P", service["primary_color"])
        .replace("%S", service["secondary_color"]);
    } else {
      container.style.background = `linear-gradient(to top right, ${service["primary_color"]}, ${service["secondary_color"]})`;
    }
    container.className = "container";

    let icon = document.createElement("img");
    icon.src = service["icon"];
    icon.height = 75;

    let primary = document.createElement("span");
    primary.className = "primary";
    primary.innerText = service["primary"];

    let secondary = document.createElement("span");
    secondary.className = "secondary";
    secondary.innerText = service["secondary"];

    if (service["font"]) {
      primary.style.fontFamily = service["font"];
      secondary.style.fontFamily = service["font"];
    }

    container.appendChild(icon);
    container.appendChild(primary);
    container.appendChild(secondary);

    container.setAttribute("data-link", service["link"]);
    container.addEventListener("click", (ev) => {
      window.open((<HTMLElement>ev.currentTarget).getAttribute("data-link"));
    });

    document.body.appendChild(container);
  }
}

xhr.open("GET", "data/data.json");
xhr.send();
