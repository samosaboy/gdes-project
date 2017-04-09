var video = document.getElementById('video'),
    bar = document.getElementById('bar'),
    progress = document.getElementById('progress'),
    terminalInput = document.getElementById('terminalinputstart'),
    terminalInputEnd = document.getElementById('terminalinputend'),
    terminalLog = document.getElementById('log'),
    startTerminal = document.getElementById('start'),
    endTerminal = document.getElementById('end'),
    userip;

document.addEventListener('DOMContentLoaded', function(){
    Typed.new('#typed', {
        stringsElement: document.getElementById('terminal'),
        typeSpeed: 0.01,
        backDelay: 15500000,
        loop: false,
        showCursor: false,
        cursorChar: '|'
    });
    bar.style.display = 'none';
    endTerminal.style.display = 'none';
});

terminalInput.onkeypress = function(e){

    if (!e) e = window.event;
    var keyCode = e.keyCode || e.which;
    // if (keyCode == '13' && terminalInput.value === 'allow computer access'){
    if (keyCode == '13' && terminalInput.value === 'a'){

        bar.style.display = 'block';

        startTerminal.innerHTML = 'loading program...';

        var width = 1,
            id = setInterval(frame, 20);

        function frame() {
            if (width >= 100) {

                progress.style.display = 'none';
                clearInterval(id);

            }
            if (width === 100) {

                startTerminal.innerHTML = '<p>initialized!</p>' + '<p>IP:' + userip + '</p>';
                startTerminal.classList += ' aftertype';

                var newInputText = Typed.new('#finishedText', {
                    strings: ['<p>Your device security has been compromised. Identity protection status: ON</p><br/><p>Type "continue" to secure computer</p>'],
                    typeSpeed: 0.01,
                    backDelay: 15500000,
                    loop: false,
                    showCursor: false,
                    cursorChar: '|'
                });

                endTerminal.style.display = 'block';

                terminalInputEnd.onkeypress = function(e) {
                    if (keyCode == '13' && terminalInputEnd.value === 'continue') {
                        window.location.href = '/why';
                    }
                }

                // Pixelated Camera

                var canvas = document.getElementById('bgcanvas'),
                    context = canvas.getContext('2d');

                var FastTracker = function () {
                    FastTracker.base(this, 'constructor');
                };

                tracking.inherits(FastTracker, tracking.Tracker);

                // tracking.Fast.THRESHOLD = 2;
                FastTracker.prototype.threshold = tracking.Fast.THRESHOLD = 10;

                FastTracker.prototype.track = function (pixels, width, height) {
                    stats.begin();
                    var gray = tracking.Image.grayscale(pixels, width, height);
                    var corners = tracking.Fast.findCorners(gray, width, height);
                    stats.end();
                    this.emit('track', {
                        data: corners
                    });
                };

                var tracker = new FastTracker();
                tracker.on('track', function (event) {
                    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
                    var corners = event.data;
                    for (var i = 0; i < corners.length; i += 3) {
                        context.fillStyle = '#ff3949';
                        context.fillRect(corners[i] - 100, corners[i + 1] - 100, 0.5, 0.5);
                    }
                });

                tracking.track('#video', tracker);

                var mainImage = new Image(),
                    imageArray = [
                        'images/1f600.svg',
                        'images/1f601.svg',
                        'images/1f602.svg',
                        'images/1f603.svg',
                        'images/1f604.svg',
                        'images/1f605.svg',
                        'images/1f606.svg',
                        'images/1f607.svg',
                        'images/1f608.svg',
                        'images/1f609.svg',
                        'images/1f610.svg',
                        'images/1f611.svg',
                        'images/1f612.svg',
                        'images/1f613.svg',
                        'images/1f614.svg',
                        'images/1f615.svg',
                        'images/1f616.svg',
                        'images/1f617.svg',
                        'images/1f618.svg',
                        'images/1f619.svg',
                        'images/1f620.svg',
                        'images/1f622.svg',
                        'images/1f623.svg',
                        'images/1f624.svg',
                        'images/1f625.svg',
                        'images/1f626.svg',
                        'images/1f627.svg',
                        'images/1f628.svg',
                        'images/1f629.svg',
                        'images/1f630.svg',
                        'images/1f631.svg',
                        'images/1f632.svg',
                        'images/1f633.svg',
                        'images/1f634.svg',
                        'images/1f635.svg',
                        'images/1f636.svg',
                        'images/1f637.svg',
                        'images/1f639.svg',
                        'images/1f641.svg',
                        'images/1f642.svg',
                        'images/1f643.svg',
                        'images/1f644.svg',
                        'images/1f648.svg',
                        'images/1f649.svg'
                    ];

                function changeImage() {
                    var setNewImage = imageArray[Math.floor(Math.random() * imageArray.length)];
                    mainImage.setAttribute('src', setNewImage);
                };

                setInterval(changeImage, 2000);

                // Main Camera

                function maincamera() {

                    var canvas = document.getElementById('canvas'),
                        context = canvas.getContext('2d');

                    video.width = window.innerWidth / 3;
                    video.height = window.innerHeight / 3;

                    canvas.width = video.width;
                    canvas.height = video.height;

                    tracker = new tracking.ObjectTracker('face');
                    tracker.setInitialScale(5);
                    tracker.setStepSize(1);
                    tracker.setEdgesDensity(0.1);

                    tracking.track('#video', tracker, {camera: true});
                    tracker.on('track', function (event) {
                        context.clearRect(0, 0, canvas.width, canvas.height);
                        event.data.forEach(function (rect) {
                            context.strokeStyle = '#ff3949';
                            context.strokeRect(rect.x, rect.y, rect.width, rect.height);
                            context.drawImage(mainImage, rect.x, rect.y, rect.width, rect.height);
                            // context.font = '8px Source Code Pro';
                            // context.fillStyle = '#fff';
                            // context.fillText('Replacing image with', rect.x + rect.width + 10, rect.y + 11)
                            // context.fillText(mainImage.src.split("/").pop(), rect.x + rect.width + 10, rect.y + 25)
                        });
                    });
                };

                document.getElementById('fps').style.display = 'none';
                // document.getElementById('stats').style.display = 'block';
                document.getElementById('ms').style.display = 'block';

                maincamera();

            } else {
                width++;
                bar.style.width = width + '%';
            }
        }

        return false;
    } if (keyCode == '13' && terminalInput.value != 'allow computer access') {
        terminalLog.innerHTML += '<br /> -bash#usr@pwn: `' + terminalInput.value + '` is not a valid command'
        terminalInput.value = '';
    }
}

window.onload = function() {
    document.getElementById('stats').style.display = 'none';
};
