let timer = setInterval(() => {
  console.log("Running...");
}, 1000);

// Stop it after 5 seconds:
setTimeout(() => {
  clearInterval(timer);
  console.log("Stopped!");
}, 5000);
