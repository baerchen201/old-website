function fadeout(element, upwards) {
  element.style.transition = "all 0.7s ease-in";
  element.style.opacity = "0";
  if (upwards) {
    element.style.transform = "translateY(-30px)";
  } else {
    element.style.transform = "translateX(30px)";
  }
  setTimeout(() => {
    element.outerHTML = "";
  }, 1000);
}

if (localStorage.getItem("hideDevWarning") !== "true") {
  const warning = document.createElement("div"),
    warn_img = document.createElement("img"),
    warn_text = document.createElement("span"),
    warn_hide = document.createElement("span"),
    warn_bg = document.createElement("span");

  warn_bg.style.backgroundColor = "#f1f137";
  warn_bg.style.opacity = "0.7";
  warn_bg.style.height = "100%";
  warn_bg.style.width = "100%";
  warn_bg.style.position = "absolute";
  warn_bg.style.zIndex = "-1";

  warn_hide.style.position = "absolute";
  warn_hide.style.left = "8px";
  warn_hide.style.fontSize = "28px";
  warn_hide.style.cursor = "pointer";

  warning.style.position = "fixed";
  warning.style.top = "0";
  warning.style.zIndex = "9999";
  warning.style.display = "flex";
  warning.style.fontFamily = "monospace";
  warning.style.fontSize = "24px";
  warning.style.minHeight = "60px";
  warning.style.width = "100vw";
  warning.style.left = "0";
  warning.style.justifyContent = "center";
  warning.style.alignItems = "center";
  warning.style.gap = "5px";
  warning.style.border = "5px solid #cc0";

  warn_text.innerHTML = "This site is still under development.";
  warn_hide.innerHTML = "X";

  warn_hide.addEventListener("click", (ev) => {
    fadeout(warning, true);
    localStorage.setItem("hideDevWarning", "true");
  });

  warning.appendChild(warn_bg);
  warning.appendChild(warn_img);
  warning.appendChild(warn_text);
  warning.appendChild(warn_hide);

  document.body.appendChild(warning);
} else {
  const warning = document.createElement("div"),
    warn_img = document.createElement("img"),
    warn_text = document.createElement("span"),
    warn_bg = document.createElement("span");

  warn_bg.style.backgroundColor = "#cece00";
  warn_bg.style.opacity = "0.8";
  warn_bg.style.height = "100%";
  warn_bg.style.width = "100%";
  warn_bg.style.position = "absolute";
  warn_bg.style.zIndex = "-1";

  warning.style.position = "fixed";
  warning.style.bottom = "20px";
  warning.style.zIndex = "9999";
  warning.style.display = "flex";
  warning.style.fontFamily = "monospace";
  warning.style.fontSize = "24px";
  warning.style.minHeight = "60px";
  warning.style.width = "fit-content";
  warning.style.right = "5px";
  warning.style.justifyContent = "center";
  warning.style.alignItems = "center";
  warning.style.gap = "5px";
  warning.style.border = "5px solid #cc0";
  warning.style.cursor = "not-allowed";

  warn_text.innerHTML = "This site is still under development.";

  setTimeout(() => {
    fadeout(warning, false);
  }, 4000);

  warning.appendChild(warn_bg);
  warning.appendChild(warn_img);
  warning.appendChild(warn_text);

  document.body.appendChild(warning);
}
