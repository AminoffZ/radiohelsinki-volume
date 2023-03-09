const audioSymbol = document.querySelector("span.audio-symbol") as HTMLElement;

function setSymbol(symbol: "volume_off" | "volume_up") {
  audioSymbol.textContent = symbol;
}

function toggleSymbol() {
  setSymbol(
    audioSymbol.textContent === "volume_off" ? "volume_up" : "volume_off"
  );
}

function togglePlayerMuted() {
  const audioElement = document.querySelector("audio") as HTMLAudioElement;
  mutePlayer(!audioElement.muted);
}

function getStoreMuted(): boolean {
  return localStorage.getItem("radio-helsinki-mute") === "true";
}

function setStoreMuted(muted: boolean) {
  localStorage.setItem("radio-helsinki-mute", muted.toString());
}

function mutePlayer(muted: boolean) {
  const audioElement = document.querySelector("audio") as HTMLAudioElement;
  audioElement.muted = muted;
  setStoreMuted(muted);
}

function setupMuteListener() {
  audioSymbol.addEventListener("click", () => {
    togglePlayerMuted();
    toggleSymbol();
  });
}

function setupMute() {
  if (getStoreMuted()) {
    mutePlayer(true);
    setSymbol("volume_off");
  } else {
    mutePlayer(false);
    setSymbol("volume_up");
  }
}

function startMuteHandler() {
  setupMuteListener();
  setupMute();
}

startMuteHandler();
