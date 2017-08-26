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

    function handleProgress() {
        let percent = (domStrings.video.currentTime/domStrings.video.duration)*100;
        domStrings.progressBar.style.flexBasis=`${percent}%`;
    }

    function scrub(e) {
        console.log(e.offsetX);
        console.log(domStrings.progress.offsetWidth);
        console.log(domStrings.video.duration);

        domStrings.video.currentTime  = (e.offsetX / domStrings.progress.offsetWidth)*domStrings.video.duration;
    }


    function addEvent() {
        //video event
        domStrings.video.addEventListener('click', togglePlayVideo);
        domStrings.video.addEventListener('play', updateButtonPlayer);
        domStrings.video.addEventListener('pause', updateButtonPlayer);
        domStrings.video.addEventListener('timeupdate', handleProgress);

        // button play event
        domStrings.toggle.addEventListener('click', togglePlayVideo);

        //skip button event
        Array.from(domStrings.skipButtons).forEach(current => current.addEventListener('click', skipTime));

        //range input event
        Array.from(domStrings.ranges).forEach(current => current.addEventListener('change', handleRangeUpdate));
        Array.from(domStrings.ranges).forEach(current => current.addEventListener('mousemove', handleRangeUpdate));



        //event progress

        domStrings.progress.addEventListener('click', scrub);


    }


    addEvent();

})();


