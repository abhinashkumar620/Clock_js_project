
setInterval(() => {
    let element = document.getElementById('clock');
    let sound = document.getElementById('sound')
    const time = new Date();


    const option = {
        timeZone: 'Asia/kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    }
    element.textContent = time.toLocaleTimeString("en-US", option)
    sound.play();

}, 1000)