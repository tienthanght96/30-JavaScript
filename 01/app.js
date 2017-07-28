
//remove class playing  after transition end
function removeTransform(e) {
    if(e.propertyName !=='transform') return;
    e.target.classList.remove('playing');
}

// add class Playing for current element and play sound
function  playingSound(e) {
    const  key  = document.querySelector(`div[data-key ="${e.keyCode}"]`);
    const  sound  = document.querySelector(`audio[data-key ="${e.keyCode}"]`);

    if(sound ===null) return;
    key.classList.add('playing');
    // sound.currentTime =0;
    sound.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(current => current.addEventListener('transitionend', removeTransform));
window.addEventListener('keydown', playingSound);
