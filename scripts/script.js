document.addEventListener("DOMContentLoaded", function() {
    const smashAudio = new Audio('./audio/smash.mp3');
    const backgroundMusic = document.querySelector('.background-music');
    backgroundMusic.volume = 0.1;

    const characters = [
        './images/kittie.png',
        './images/puppies.png',
        './images/dad.png',
        './images/mom.png',
        './images/grandfather.png',
        './images/grandmother.png',
        './images/uncle.png',
        './images/aunt.png',
        './images/neighbor.png',
        './images/crush.png',
        './images/money.png'
    ];

    const objectOne = document.querySelector('.one');
    const objectTwo = document.querySelector('.two');
    const train = document.querySelector('.train');

    const objectOneRect = train.getBoundingClientRect()
    console.log(objectOneRect)


    function setObjects() {

        let currentObjectOne = characters[Math.floor(Math.random() * characters.length)]
        let currentObjectTwo = characters[Math.floor(Math.random() * characters.length)]

        if(currentObjectTwo === currentObjectOne) {
            currentObjectTwo = characters[Math.floor(Math.random() * characters.length)]
        }

        objectOne.src = currentObjectOne
        objectTwo.src = currentObjectTwo
    }

    function saveOne() {
        objectOne.addEventListener('click', () => {
            objectOne.style.display = 'none'
            objectTwo.classList.add("disabled")
        })
        objectTwo.addEventListener('click', () => {
            objectTwo.style.display = 'none'
            objectOne.classList.add("disabled")
        })
    }   

    setObjects()
    saveOne()

})