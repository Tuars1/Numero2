const question = document.querySelector(".question");
const gif = document.querySelector(".gif")
const yesBtn = document.querySelector(".yes-btn")
const noBtn = document.querySelector(".no-btn")


yesBtn.addEventListener("click", ()=> {
    question.innerHTML = "Looo sabia ";
    gif.src="https://media.tenor.com/kBDMplHmLb8AAAAC/cat-cat-meme.gif" /*el gif*/
})

noBtn.addEventListener("mouseover", ()=> {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX)
    const randomY = Math.floor(Math.random() * maxY)

    noBtn.style.left = randomX + "px"; /*lo mando el No a un lado ramdon*/ 
    noBtn.style.top = randomY + "px"
})

<!DOCTYPE html>
<html>
<body>
<h1>Hello World</h1>
<p>I'm hosted with GitHub Pages.</p>
</body>
</html>
