function showSurprise() {
    const surprise = document.getElementById("surprise");
    surprise.classList.remove("hidden");
    startConfetti();
  }
  
  // Confetti Animation
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  let confetti = [];
  
  for (let i = 0; i < 300; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 6 + 4,
      d: Math.random() * 100 + 10,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`,
      tilt: Math.floor(Math.random() * 10) - 10
    });
  }
  
  function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach(c => {
      ctx.beginPath();
      ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2, false);
      ctx.fillStyle = c.color;
      ctx.fill();
    });
  
    moveConfetti();
  }
  
  function moveConfetti() {
    confetti.forEach(c => {
      c.y += Math.cos(c.d) + 1 + c.r / 2;
      c.x += Math.sin(c.d);
      if (c.y > canvas.height) {
        c.y = -10;
        c.x = Math.random() * canvas.width;
      }
    });
  }
  
  function startConfetti() {
    setInterval(drawConfetti, 20);
  }
  