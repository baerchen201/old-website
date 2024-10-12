const debug = false;

const urlParams = new URLSearchParams(window.location.search);
const mainFrame = document.querySelector("#article");

if (urlParams.has("id")) {
  const id = Number(urlParams.get("id"));
  console.log(id);
  if (isNaN(id)) {
    window.alert("Invalid article id, redirecting to start page.");
    if (!debug) {
      location.href = "index.html";
    }
  } else {
    mainFrame.src = `${id}/index.html`;
    console.log(mainFrame, mainFrame.src);
    mainFrame.onload = () => {
      let iframeDocument =
        mainFrame.contentDocument || mainFrame.contentWindow.document;
      document.title = iframeDocument.title;
    };
  }
} else {
  window.alert("Missing article id, redirecting to start page.");
  if (!debug) {
    location.href = "index.html";
  }
}
