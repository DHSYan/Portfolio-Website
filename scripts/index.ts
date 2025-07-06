function loadAboutMe() {
  const current = document.getElementById("sceneHome");
  const next = document.getElementById("sceneAboutMe");

  
  setTimeout(() => {
    current?.classList.remove("scene-enable");
    current?.classList.add("scene-disable");
    next?.classList.remove("scene-disable");
    next?.classList.add("scene-enable");
  }, 1000);
}

function main() {
  document
  .getElementById("aboutMeButton")
    ?.addEventListener("click", loadAboutMe);
}

main();
