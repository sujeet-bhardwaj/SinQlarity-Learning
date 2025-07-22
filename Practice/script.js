// let timer = setInterval(() => {
//   console.log("Running...");
// }, 1000);

// // Stop it after 5 seconds:
// setTimeout(() => {
//   clearInterval(timer);
//   console.log("Stopped!");
// }, 5000);

// 

const mainBtn = document.getElementById("mainBtn");

mainBtn.addEventListener("click", () => {
    console.log("Main Button Clicked");

    mainBtn.addEventListener("click", () => {
        console.log("Second Listener Added");
    });
});

