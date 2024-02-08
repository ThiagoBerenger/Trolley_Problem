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
        './images/love-life.png',
        './images/money.png',
        './images/extinct-animal.png',
        './images/dollars.png'
    ];

    const objectOne = document.querySelector('.one');
    const objectTwo = document.querySelector('.two');
    const train = document.querySelector('.train');
    const kills = document.querySelector('.kill-number')    

    let objectOneClicked = false;
    let objectTwoClicked = false;


    function setObjects() {

        let currentObjectOne = characters[Math.floor(Math.random() * characters.length)]
        let currentObjectTwo = characters[Math.floor(Math.random() * characters.length)]

        if(currentObjectTwo === currentObjectOne) {
            currentObjectTwo = characters[Math.floor(Math.random() * characters.length)]
        }

        objectOne.src = currentObjectOne
        objectTwo.src = currentObjectTwo

         objectOneClicked = false;
         objectTwoClicked = false;

    }

    function chooseOne() {
        objectOne.addEventListener('click', () => {

            if (!objectOneClicked) {
                objectOneClicked = true;

            train.classList.add('train-two')
            objectTwo.classList.add("disabled")

            setTimeout(function(){
                objectOne.style.visibility = 'hidden'
                smashAudio.play()
                kills.innerHTML = parseInt(kills.innerHTML) + 1
            }, 900)
           
            setTimeout(function() {
                setObjects()
                objectOne.style.visibility = 'visible'
                objectOne.classList.remove('disabled')
                objectTwo.classList.remove('disabled')
                train.classList.remove('train-two')
            }, 2000)
          }
        })

        objectTwo.addEventListener('click', () => {

            if (!objectTwoClicked) {
                objectTwoClicked = true;

            train.classList.add('train-one')
            objectOne.classList.add("disabled")
            
            setTimeout(function(){
                objectTwo.style.visibility = 'hidden'
                smashAudio.play()
                kills.innerHTML = parseInt(kills.innerHTML) + 1
            }, 500)

            setTimeout(function() {
                setObjects()
                objectTwo.style.visibility = 'visible'
                objectOne.classList.remove('disabled')
                objectTwo.classList.remove('disabled')
                train.classList.remove('train-one')
            }, 2000)
          }
        })
    }       

    setObjects()
    chooseOne()

})