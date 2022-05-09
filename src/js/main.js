/* Social Media

Whatsapp:
https://api.whatsapp.com/send?text=[post-title] [post-url]

facebook:
https://www.facebook.com/sharer.php?u=[post-url]

Twitter:
https://twitter.com/share?url=[post-url]&text=[post-title]&via=[via]&hashtags=[hashtags]

Pinterest:
https://pinterest.com/pin/create/bookmarklet/?media=[post-img]&url=[post-url]&is_video=[is_video]&description=[post-title]

*/

const facebookbtn = document.querySelector(".facebook-btn");
const twitterbtn = document.querySelector(".twitter-btn");
const pinterestbtn = document.querySelector(".pinterest-btn");
const whatsappbtn = document.querySelector(".whatsapp-btn");

function init() {
    const pinterestImg = document.querySelector(".pinterest-img");
    let postUrl = encodeURI(document.location.href);
    let postTitle = encodeURI("Hi everyone, please check this out!");
    let postImg = encodeURI(pinterestImg.src);

    facebookbtn.setAttribute("href",`https://www.facebook.com/imane.bln.5/`);
    twitterbtn.setAttribute("href",`https://twitter.com/share?url=${postUrl}&text=${postTitle}`);
    pinterestbtn.setAttribute("href",`https://pinterest.com/pin/create/bookmarklet/?media=${postImg}&url=${postUrl}&description=${postTitle}`);
    whatsappbtn.setAttribute("href",`https://api.whatsapp.com/send?text=${postTitle} ${postUrl}`);

}

init();