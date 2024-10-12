var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status !== 200) {
            fail(xhr.status, xhr.statusText);
        }
        else {
            success(JSON.parse(xhr.response));
        }
    }
};
function fail(statusCode, status) {
    document.body.innerText = "FAIL PLACEHOLDER ".concat(statusCode, " ").concat(status);
}
function success(jsonData) {
    for (var _i = 0, jsonData_1 = jsonData; _i < jsonData_1.length; _i++) {
        var service = jsonData_1[_i];
        console.log(service);
        var container = document.createElement("div");
        container.style.color = service["text_color"];
        if (service["background"]) {
            container.style.background = service["background"]
                .replace("%P", service["primary_color"])
                .replace("%S", service["secondary_color"]);
        }
        else {
            container.style.background = "linear-gradient(to top right, ".concat(service["primary_color"], ", ").concat(service["secondary_color"], ")");
        }
        container.className = "container";
        var icon = document.createElement("img");
        icon.src = service["icon"];
        icon.height = 75;
        var primary = document.createElement("span");
        primary.className = "primary";
        primary.innerText = service["primary"];
        var secondary = document.createElement("span");
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
        container.addEventListener("click", function (ev) {
            window.open(ev.currentTarget.getAttribute("data-link"));
        });
        document.body.appendChild(container);
    }
}
xhr.open("GET", "data/data.json");
xhr.send();
