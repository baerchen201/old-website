document.querySelectorAll(".author").forEach((e) => {
  e.innerHTML = "Author: " + e.innerHTML;
});
document.querySelectorAll(".disclaimer").forEach((e) => {
  e.innerHTML = "Disclaimer: " + e.innerHTML;
});
document.querySelectorAll("a").forEach((e) => {
  e.target = "_blank";
});
document.querySelectorAll(".source").forEach((e) => {
  let f = e.getAttribute("data-for");

  if (f) {
    let f_target = document.getElementById(f);
    if (f_target) {
      let f_name = f_target.getAttribute("data-name");
      if (f_name) {
        e.innerHTML =
          `Source of <a href="#${f}" target="_self">${f_name}</a>: ` +
          e.innerHTML;
      } else {
        e.innerHTML =
          `Source for <a href="#${f}" target="_self">${f}</a>: ` + e.innerHTML;
      }
    } else {
      e.innerHTML = `Source: ` + e.innerHTML;
    }
  } else {
    e.innerHTML = `Source: ` + e.innerHTML;
  }
});
document.querySelectorAll("img").forEach((e) => {
  let label = document.createElement("div");
  label.classList.add("img");
  label.classList.add("label");
  label.innerText = e.alt;
  label.innerHTML = `<i>${label.innerHTML}</i>`;
  label.innerHTML = "Image: " + label.innerHTML;
  label.style.width = `${e.width}px`;
  e.parentElement.insertBefore(label, e.nextSibling);
});
