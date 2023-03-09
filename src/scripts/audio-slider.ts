const slider = document.querySelector(
  'input[type="range"].slider-progress'
) as HTMLInputElement;

slider.style.setProperty("--min", slider.min == "" ? "0" : slider.min);
slider.style.setProperty("--max", slider.max == "" ? "100" : slider.max);

function getStoredVolume() {
  return localStorage.getItem("radio-helsinki-volume");
}

function setStoredVolume(volume: number) {
  localStorage.setItem("radio-helsinki-volume", volume.toString());
}

function setPlayerVolume(volume: number) {
  const audioElement = document.querySelector("audio") as HTMLAudioElement;
  audioElement.volume = volume / 100;
  setStoredVolume(volume);
}

function getPlayerVolume() {
  const audioElement = document.querySelector("audio") as HTMLAudioElement;
  return audioElement.volume * 100;
}

function setSliderVolume(volume: number) {
  const slider = document.querySelector(
    'input[type="range"].slider-progress'
  ) as HTMLInputElement;
  slider.value = volume.toString();
}

function setSliderUIVolume(volume: number) {
  const slider = document.querySelector(
    'input[type="range"].slider-progress'
  ) as HTMLInputElement;
  slider.style.setProperty("--value", volume.toString());
}

function setupSliderListener() {
  slider.addEventListener("input", () => {
    console.log("Volume changed to " + slider.value);
    setPlayerVolume(parseInt(slider.value));
    setSliderUIVolume(parseInt(slider.value));
  });
}

function setupVolume() {
  let volume = getStoredVolume();
  if (volume) {
    setSliderVolume(parseInt(volume));
  } else {
    const volume = document.querySelector("audio").volume * 100;
    setSliderVolume(volume);
  }
  slider.dispatchEvent(new Event("input"));
}

function startSliderHandler() {
  setupSliderListener();
  setupVolume();
}

startSliderHandler();
