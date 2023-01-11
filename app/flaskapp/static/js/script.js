$(function(){
    const video = $("#camera")[0];

    const initialize = () => {
        navigator.mediaDevices.getUserMedia({
            audio: false,
            video: {
                width: 640,
                facingMode: "user"
            }
        })
            .then((mediaStream) => {
                video.srcObject = mediaStream;
                video.onloadedmetadata = (e) => {
                    video.play();
                };
            })
            .catch((err) => {
                console.error(err.name + ": " + err.message);
            });
    };
    
    initialize();
});