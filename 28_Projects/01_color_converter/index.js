const hueSlider = document.getElementById("hue-slider");
const saturationSlider = document.getElementById("saturation-slider");
const lightnessSlider = document.getElementById("lightness-slider");
const colorPreview = document.querySelector(".preview-section");
const hueValue = document.getElementById("hue-value");
const saturationValue = document.getElementById("saturation-value");
const lightnessValue = document.getElementById("lightness-value");
const rgbVal = document.getElementById("rgb-value");
const hexVal = document.getElementById("hex-value");

function updateColor() {
  const hue = hueSlider.value;
  const saturation = saturationSlider.value;
  const lightness = lightnessSlider.value;

  hueValue.textContent = hue;
  saturationValue.textContent = saturation;
  lightnessValue.textContent = lightness;

  const { r, g, b } = hslToRgb(hue, saturation, lightness);
  rgbVal.innerText = `rgb(${r}, ${g}, ${b})`;
  hexVal.innerText = rgbToHex(r, g, b);

  const hslColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  colorPreview.style.backgroundColor = hslColor;
}

hueSlider.addEventListener("input", updateColor);
saturationSlider.addEventListener("input", updateColor);
lightnessSlider.addEventListener("input", updateColor);

updateColor(); // Initialize the color preview on page load

function hslToRgb(h, s, l) {
  s /= 100;
  l /= 100;

  // calculate chromatic components C formula C = (1 - |2L - 1|) × S
  let c = (1 - Math.abs(2 * l - 1)) * s;

  // Calculate X =  C × (1 - |((H / 60) % 2) - 1|)
  let x = c * (1 - Math.abs(((h / 60) % 2) - 1));

  // Calculate m = L - C / 2
  let m = l - c / 2;

  let r, g, b;

  if (h >= 0 && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (h >= 60 && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (h >= 120 && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (h >= 180 && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (h >= 240 && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else {
    r = c;
    g = 0;
    b = x;
  }

  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  return { r, g, b };
}

function rgbToHex(r, g, b) {
  return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
}

function componentToHex(c) {
  const hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}
