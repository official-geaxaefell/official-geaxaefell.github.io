// Сначала все ChatGPT написал сам, потом я кое-как смог понять сам и кое-что написать.
const follow = document.querySelector(".flw");
follow.innerHTML = follow.textContent
    .split("")
    .map(letter => `<span>${letter === " " ? "&nbsp;" : letter}</span>`)
    .join("");
const letters = document.querySelectorAll(".flw span");

function jumpLetter(index) {
    const letter = letters[index];

    if (!letter) return;

    if (letter.dataset.jump === "1") return;

    letter.dataset.jump = "1";

    let y = 0;
    let velocity = -11; 
    const gravity = 0.5;

    function frame() {

        velocity += gravity;
        y += velocity;

        if (y < 0) {

            letter.style.transform = `translateY(${y}px)`;

            requestAnimationFrame(frame);

        } else {

            letter.style.transform = "translateY(0px)";
            letter.dataset.jump = "0";

        }

    }

    requestAnimationFrame(frame);

}

let i = 0;
let pae_ki = 0
// Pae Ki AHAHAHAHA

setInterval(() => {

    if (pae_ki === 0) {

    jumpLetter(i);

    i++;

    if(i >= letters.length){
        pae_ki = 1
        setTimeout(() => {
        i = 0;
        pae_ki = 0
        },3000)
    }

    }

},80);