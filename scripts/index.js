"use strict";
function loadAboutMe() {
    const current = document.getElementById("sceneHome");
    const next = document.getElementById("sceneAboutMe");
    setTimeout(() => {
        current === null || current === void 0 ? void 0 : current.classList.remove("scene-enable");
        current === null || current === void 0 ? void 0 : current.classList.add("scene-disable");
        next === null || next === void 0 ? void 0 : next.classList.remove("scene-disable");
        next === null || next === void 0 ? void 0 : next.classList.add("scene-enable");
    }, 1000);
}
function main() {
    var _a;
    (_a = document
        .getElementById("aboutMeButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", loadAboutMe);
}
main();
