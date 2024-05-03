import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function() {
    console.log('played the video!');
});

player.on('timeupdate', throttle(function(data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
}, 1000));
document.addEventListener('DOMContentLoaded', function() {
    const savedTime = localStorage.getItem('videoplayer-current-time');
    if (savedTime !== null) {
        player.setCurrentTime(parseFloat(savedTime));
    }
});
