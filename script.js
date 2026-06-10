particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    color: { value: "#00ffcc" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    line_linked: {
      enable: true,
      color: "#00ffcc"
    },
    move: {
      enable: true,
      speed: 2
    }
  }
});
function openModal() {
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function generateSensitivity() {
  let model = document.getElementById("modelInput").value.toLowerCase();
  let result = "";

  if (model.includes("iphone")) {
    result = `
      🔥 Free Fire Sensitivity (iPhone):
      General: 95
      Red Dot: 90
      2x Scope: 85
      4x Scope: 80
      Sniper: 70
      Free Look: 75
    `;
  } 
  else if (model.includes("infinix") || model.includes("tecno") || model.includes("samsung")) {
    result = `
      🔥 Free Fire Sensitivity (Android):
      General: 100
      Red Dot: 95
      2x Scope: 90
      4x Scope: 85
      Sniper: 75
      Free Look: 80
    `;
  } 
  else {
    result = `
      ⚡ Default Sensitivity:
      General: 90
      Red Dot: 85
      2x Scope: 80
      4x Scope: 75
      Sniper: 70
      Free Look: 75
    `;
  }

  document.getElementById("result").innerText = result;
}
