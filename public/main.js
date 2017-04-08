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

// hackbutton.addEventListener('click', function startCamera() {
//
//     var width = 1,
//         id = setInterval(frame, 15);
//
//     function frame() {
//         if (width >= 100) {
//
//             progress.style.display = 'none';
//             clearInterval(id);
//
//         } if (width === 100) {
//
//             setTimeout(function () {
//
//                 hackbutton.style.display = 'none';
//                 stophackbutton.style.display = 'block';
//
//                 ipbox.innerHTML = 'IP:' + userip;
//                 ipbox.style.display = 'block';
//
//                 // Pixelated Camera
//
//                 window.addEventListener('resize', resizeCanvas, false);
//
//                 function resizeCanvas() {
//
//                     var canvas = document.getElementById('bgcanvas'),
//                         context = canvas.getContext('2d');
//
//                     // canvas.width = window.innerWidth;
//                     // canvas.height = window.innerHeight;
//
//                     function bgtracker() {
//
//                         var FastTracker = function () {
//                             FastTracker.base(this, 'constructor');
//                         };
//
//                         tracking.inherits(FastTracker, tracking.Tracker);
//
//                         tracking.Fast.THRESHOLD = 2;
//                         FastTracker.prototype.threshold = tracking.Fast.THRESHOLD = 2;
//
//                         FastTracker.prototype.track = function (pixels, width, height) {
//                             stats.begin();
//                             var gray = tracking.Image.grayscale(pixels, width, height);
//                             var corners = tracking.Fast.findCorners(gray, width, height);
//                             stats.end();
//                             this.emit('track', {
//                                 data: corners
//                             });
//                         };
//
//                         var tracker = new FastTracker();
//                         tracker.on('track', function (event) {
//                             context.clearRect(0, 0, window.innerWidth, window.innerHeight);
//                             var corners = event.data;
//                             for (var i = 0; i < corners.length; i += 2) {
//                                 context.fillStyle = '#ff3949';
//                                 context.fillRect(corners[i], corners[i + 1], 1, 1);
//                             }
//                         });
//
//                         tracking.track('#video', tracker);
//                     }
//
//                     bgtracker();
//
//                 }
//
//                 resizeCanvas();
//
//                 // Main Camera
//
//                 function maincamera() {
//
//                     var canvas = document.getElementById('canvas'),
//                         context = canvas.getContext('2d');
//
//                     video.width = window.innerWidth / 2;
//                     video.height = window.innerHeight / 2;
//
//                     canvas.width = video.width;
//                     canvas.height = video.height;
//
//                     tracker = new tracking.ObjectTracker('face');
//
//                     tracker.setInitialScale(1);
//                     tracker.setStepSize(5);
//                     tracker.setEdgesDensity(0.1);
//
//                     tracking.track('#video', tracker, {camera: true});
//                     tracker.on('track', function (event) {
//                         context.clearRect(0, 0, canvas.width, canvas.height);
//                         event.data.forEach(function (rect) {
//                             context.strokeStyle = '#a64ceb';
//                             context.strokeRect(rect.x, rect.y, rect.width, rect.height);
//                             context.font = '11px Helvetica';
//                             context.fillStyle = "#fff";
//                             context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
//                             context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);
//                         });
//                     });
//                 }
//
//                 maincamera();
//
//                 stophackbutton.onclick = function () {
//
//                     hackbutton.removeEventListener('click', startCamera());
//                     console.log('test');
//                 }
//
//             }, 1000);
//
//         } else {
//
//             width++;
//             bar.style.width = width + '%';
//             hackbutton.innerHTML = 'Exposing: ' + width + '%';
//
//         }
//     }
//
// });

// hackbutton.addEventListener('click', function startCamera() {

    var width = 1,
        id = setInterval(frame, 0.01);

    function frame() {
        if (width >= 100) {

            progress.style.display = 'none';
            clearInterval(id);

        } if (width === 100) {

            // hackbutton.style.display = 'none';
            stophackbutton.style.display = 'block';

            ipbox.innerHTML = 'IP:' + userip;
            ipbox.style.display = 'block';

            // Pixelated Camera

            var canvas = document.getElementById('bgcanvas'),
                context = canvas.getContext('2d');

            var FastTracker = function () {
                FastTracker.base(this, 'constructor');
            };

            tracking.inherits(FastTracker, tracking.Tracker);

            tracking.Fast.THRESHOLD = 2;
            FastTracker.prototype.threshold = tracking.Fast.THRESHOLD = 5;

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

            var mainImage = document.getElementById('mainImage'),
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
                    'images/1f621.svg',
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
                    'images/1f638.svg',
                    'images/1f639.svg',
                    'images/1f640.svg',
                    'images/1f641.svg',
                    'images/1f642.svg',
                    'images/1f643.svg',
                    'images/1f644.svg',
                    'images/1f645.svg',
                ],
                imageIndex = 0;

            // function changeImage() {
            //
            //     if (imageIndex == imageArray.length) {
            //         imageIndex = 0;
            //     } else if {
            //
            //     } else {
            //     imageIndex = Math.floor(Math.random() * imageArray.length) + 0;
            //
            //
            //     // mainImage.setAttribute('src', imageArray[imageIndex]);
            //     mainImage.src = imageArray[imageIndex];
            // };

            console.log(imageArray);

            var setNewImage;
            for (var q = 0; q < imageArray.length; q++) {
                setNewImage = imageArray[q];
            }

            function changeImage() {
                mainImage.setAttribute('src', setNewImage);
            }

            setInterval(changeImage, 2000);

            // Main Camera

            function maincamera() {

                var canvas = document.getElementById('canvas'),
                    context = canvas.getContext('2d');

                video.width = window.innerWidth / 2;
                video.height = window.innerHeight / 2;

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
                        // context.fillRect(rect.x, rect.y, rect.width, rect.height + 20);
                        context.font = '14px Source Code Pro';
                        context.fillStyle = '#fff';
                        // context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 10, rect.y + 11);
                        // context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 10, rect.y + 22);
                        context.fillText('Replacing image with', rect.x + rect.width + 10, rect.y + 11)
                        context.fillText(mainImage.src.split("/").pop(), rect.x + rect.width + 10, rect.y + 25)
                    });
                });
            };
            
            maincamera();

            stophackbutton.onclick = function () {

                hackbutton.removeEventListener('click', startCamera());
                console.log('test');
            }

        } else {

            width++;
            bar.style.width = width + '%';
            // hackbutton.innerHTML = 'Exposing: ' + width + '%';

        }
    }

// });

window.onload = function() {
    document.getElementById('stats').style.display = 'none';
};
