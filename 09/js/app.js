const domStrings = {
    player: document.querySelector('.player'),
    video: document.querySelector('.viewer'),
    progress: document.querySelector('.progress'),
    progressBar: document.querySelector('.progress-filled'),
    toggle: document.querySelector('.toggle'),
    skipButtons: document.querySelectorAll('[data-skip]'),
    ranges: document.querySelectorAll('.player-slider')
};


(function init() {

    //handle play video
    function togglePlayVideo() {
        const method = domStrings.video.paused ? 'play' : 'pause';
        domStrings.video[method]();
    }

    //update icon play button
    function updateButtonPlayer() {
        const icon = this.paused ? '►' : '❚ ❚';
        console.log(icon);
        domStrings.toggle.textContent = icon;
    }

    function skipTime() {
        console.log('click');
        domStrings.video.currentTime += parseFloat(this.dataset.skip);
    }

    function handleRangeUpdate() {
        domStrings.video[this.name] = this.value;
        console.log(domStrings.video['volume']);
    }


    function addEvent() {
        domStrings.video.addEventListener('click', togglePlayVideo);
        domStrings.video.addEventListener('play', updateButtonPlayer);
        domStrings.video.addEventListener('pause', updateButtonPlayer);
        domStrings.toggle.addEventListener('click', togglePlayVideo);

        Array.from(domStrings.skipButtons).forEach(current => current.addEventListener('click', skipTime));

        Array.from(domStrings.ranges).forEach(current => current.addEventListener('click', handleRangeUpdate));


    }


    addEvent();

})();


