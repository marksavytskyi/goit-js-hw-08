    import Player from '@vimeo/player';

let throttle = require('lodash.throttle');
    

    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    player.on('timeupdate', throttle(onLastTime, 1000));
    


    const lastTimeVideo = Number(localStorage.getItem("videoplayer-current-time"))
   
    player.setCurrentTime(lastTimeVideo)
    
    function onLastTime (e) {
        console.log(e.seconds);
        localStorage.setItem("videoplayer-current-time", e.seconds)
    }
