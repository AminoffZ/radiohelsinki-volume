var styleRef = document.createElement("link");
styleRef.rel = "stylesheet";
styleRef.href = chrome.runtime.getURL("styles/audio-controller.css");
console.log(styleRef.href);
console.log(styleRef);
(document.head || document.documentElement).appendChild(styleRef);

const audioController = document.createElement("nav");
audioController.className = "audio-controller prevent-select";

audioController.innerHTML = `
<span class="material-symbols-outlined audio-symbol" style="font-size: 18px">
  volume_up
</span>
<span class="audio-slider-container">
  <input class="styled-slider slider-progress" type="range" id="volume" name="volume" min="0" max="100" step="1" />
</span>
`;

const googleIcons = document.createElement("link");
googleIcons.rel = "stylesheet";
googleIcons.href =
  "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0";

(document.head || document.documentElement).appendChild(googleIcons);
(document.body || document.documentElement).appendChild(audioController);

const muteButtonScript: HTMLScriptElement = document.createElement("script");
muteButtonScript.src = chrome.runtime.getURL("mute-button.js");
(document.head || document.documentElement).appendChild(muteButtonScript);
muteButtonScript.onload = function () {
  muteButtonScript.remove();
};

const audioSliderScript: HTMLScriptElement = document.createElement("script");
audioSliderScript.src = chrome.runtime.getURL("audio-slider.js");
(document.head || document.documentElement).appendChild(audioSliderScript);
audioSliderScript.onload = function () {
  audioSliderScript.remove();
};
