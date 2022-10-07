/** strat js code */

/**function get getTime */
 /** get the content div */
 let content = document.getElementsByClassName('content')[0];
 let night = "AM";
function getTime(){ 
    /* create an object from Date*/
    let time = new Date();
    /* get hours ( 12 hours) */
    let hours = time.getHours();
    if(hours > 12){
        hours = hours - 12;
        night = "PM";
    }
    /* get minutes */
    let minutes = time.getMinutes();
    minutes = minutes < 10 ? ("0"+ minutes) : minutes;
    /* get seconds */
    let seconds = time.getSeconds();
    seconds = seconds < 10 ? ("0" + seconds): seconds;

    // add hour , minutes , seconds to content div
    content.textContent = ` ${hours}:${minutes}:${seconds} ${night}`;
}
setInterval(getTime);