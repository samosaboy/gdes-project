var video = document.getElementById('video'),
    hackbutton = document.getElementById('hack'),
    stophackbutton = document.getElementById('stophack'),
    bgcanvas = document.getElementById('bgcamera'),
    bar = document.getElementById('bar'),
    progress = document.getElementById('progress'),
    ipbox = document.getElementById('glitch'),
    hackon = document.getElementById('hackon'),
    hackoff = document.getElementById('hackoff'),
    userip;

hackbutton.addEventListener('click', function startCamera() {

    var width = 1,
        id = setInterval(frame, 1);

    function frame() {
        if (width >= 100) {

            progress.style.display = 'none';
            clearInterval(id);

        } if (width === 100) {

            setTimeout(function () {

                hackbutton.style.display = 'none';
                stophackbutton.style.display = 'block';

                ipbox.innerHTML = 'IP:' + userip;
                ipbox.style.display = 'block';

                // Pixelated Camera

                window.addEventListener('resize', resizeCanvas, false);

                function resizeCanvas() {

                    var canvas = document.getElementById('bgcanvas'),
                        context = canvas.getContext('2d');

                    // canvas.width = window.innerWidth;
                    // canvas.height = window.innerHeight;

                    function bgtracker() {

                        var FastTracker = function () {
                            FastTracker.base(this, 'constructor');
                        };

                        tracking.inherits(FastTracker, tracking.Tracker);

                        tracking.Fast.THRESHOLD = 2;
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
                            for (var i = 0; i < corners.length; i += 2) {
                                context.fillStyle = '#ff3949';
                                context.fillRect(corners[i], corners[i + 1], 1, 1);
                            }
                        });

                        tracking.track('#video', tracker);
                    }

                    bgtracker();

                }

                resizeCanvas();

                // Main Camera

                function maincamera() {

                    var canvas = document.getElementById('canvas'),
                        context = canvas.getContext('2d');

                    video.width = window.innerWidth / 2;
                    video.height = window.innerHeight / 2;

                    canvas.width = video.width;
                    canvas.height = video.height;

                    tracker = new tracking.ObjectTracker('face');

                    tracker.setInitialScale(1);
                    tracker.setStepSize(5);
                    tracker.setEdgesDensity(0.1);

                    tracking.track('#video', tracker, {camera: true});
                    tracker.on('track', function (event) {
                        context.clearRect(0, 0, canvas.width, canvas.height);
                        event.data.forEach(function (rect) {
                            context.strokeStyle = '#a64ceb';
                            context.strokeRect(rect.x, rect.y, rect.width, rect.height);
                            context.font = '11px Helvetica';
                            context.fillStyle = "#fff";
                            context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
                            context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);
                        });
                    });
                }

                maincamera();

                stophackbutton.onclick = function () {

                    hackbutton.removeEventListener('click', startCamera());
                    console.log('test');
                }

            }, 1000);

        } else {

            width++;
            bar.style.width = width + '%';
            hackbutton.innerHTML = 'Exposing: ' + width + '%';

        }
    }

});

window.onload = function() {
    document.getElementById('stats').style.display = 'none';
};
