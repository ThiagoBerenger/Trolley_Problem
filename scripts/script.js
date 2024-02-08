document.addEventListener("DOMContentLoaded", function() {
    const smashAudio = new Audio('./audio/smash.mp3');
    const backgroundMusic = document.querySelector('.background-music');
    backgroundMusic.volume = 0.1;
    backgroundMusic.play()

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

    function chooseOne() {
        objectOne.addEventListener('click', () => {
            
            train.classList.add('train-two')
            objectTwo.classList.add("disabled")

            setTimeout(function(){
                objectOne.style.visibility = 'hidden'
                smashAudio.play()
            }, 900)
           
            setTimeout(function() {
                setObjects()
                objectOne.style.visibility = 'visible'
                objectTwo.classList.remove('disabled')
            }, 2000)
           
        })

        objectTwo.addEventListener('click', () => {

            train.classList.add('train-one')
            objectOne.classList.add("disabled")
            
            setTimeout(function(){
                objectTwo.style.visibility = 'hidden'
                smashAudio.play()
            }, 500)

            setTimeout(function() {
                setObjects()
                objectTwo.style.visibility = 'visible'
                objectOne.classList.remove('disabled')
            }, 2000)
        })
    }       

    setObjects()
    chooseOne()


})