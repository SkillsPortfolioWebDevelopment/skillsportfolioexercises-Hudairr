const sounds = [
    'Do you deny that', 'Funny Stories', 'Brilliant', 'Oh hahaha', 
    'First class', 'Laughter', 'Forget it', 'Get rid of it', 
    'Moo', 'Make a Program', 'Evening Email', 'Yes yes yes',
    'Why Do', 'The Skip', 'Alone on a Boat', 'Ireland',
    'Third Time', 'Great Banter', 'Noise', 'Thank You',
    'Oh God', 'I think I will go', 'Confused', 'Hotter than the Sun',
    'Hello', 'Ran Away', 'Goal', 'Goto London', 'Owls',
    'Best Friends', 'Bird Noise', 'Depressed', 'Bit of a Job',
    'Arm Wrestling', 'Bad News', 'Set fire'
]

sounds.forEach((sound) => {

    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.innerText = sound;

    btn.addEventListener('click', () => {
        stopSongs();
        document.getElementById(sound).play();
    });

    document.getElementById('buttons').appendChild(btn);
});

function stopSongs(){
    sounds.forEach(sound =>{
        const song = document.getElementById(sound);

        song.pause();
        song.currentTime = 0;
    });
}