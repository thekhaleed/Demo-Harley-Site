

const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;

window.addEventListener('load', height);

function height() {
    const bgHeight = document.getElementById("landing-page");
    var size = windowHeight*92/100;
    
    bgHeight.style.height= size + "px";
    bgHeight.style.backgroundSize = windowWidth + "px" + " "+  size +"%";
    console.log(windowWidth);
}
window.addEventListener('scroll', function navLoad() {
    const navBar = this.document.querySelector(".nav");
    const navlinks = this.document.querySelectorAll(".links");
    var landingPage = this.document.querySelector(".landing-page");
    var bannerContent = this.document.querySelector(".landing-content");

    
    bannerContent.style.display = "none";
    navBar.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
    landingPage.style.backgroundSize ="cover";
    landingPage.style.backgroundImage = "url(images/5.jpg)";
    navlinks.forEach(link => {
        link.style.color="white";
        link.style.backgroundColor="rgb(255, 149, 1)";
        
    });
    
   
    var advSpace = document.querySelector(".space");
    advSpace.height = windowHeight*8/100 + "%";
    var advSpaceHeight = advSpace.getBoundingClientRect().top;
    console.log(advSpaceHeight);
    
    if (advSpaceHeight>windowHeight-120){
        navBar.style.backgroundColor = "transparent";
        navlinks.forEach(link => {
        link.style.color="white";
        link.style.backgroundColor="transparent";
        landingPage.style.backgroundImage = "none";
        bannerContent.style.display = "flex";
        

    });
    }
})



