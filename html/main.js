const hamburegerMenu = document.querySelector("#navigation .nav-icon");

const navContent = document.querySelector("#nav-content");

const closeNavBtn = document.querySelector("#nav-content .close-btn");

const navLinks = document.querySelectorAll("#nav-content nav ul li a");

const scrollButton = document.querySelector(".scroll-top");
const sunBeam = document.querySelector(".sun-beam");
const mercury = document.querySelector(".mercury");
const venus = document.querySelector(".venus");
const earth = document.querySelector(".earth");
const mars = document.querySelector(".mars");
const jupiter = document.querySelector(".jupiter");
const saturn = document.querySelector(".saturn");
const neptune = document.querySelector(".neptune");

const rocket = document.querySelector(".rocket");

if (scrollButton) {
    window.addEventListener("scroll", () => {
        if (pageYOffset > window.innerHeight * 1.2) {
            scrollButton.style.display = "flex";
        } else {
            scrollButton.style.display = "none";
        }
        // console.log("y:", pageYOffset);
        // transform: skew(350deg, 354deg);
        // let t1 = pageYOffset * 0.05454;
        // let s1 = "rotate(-" + t1 + "deg)";
        // let t2 = 1 + pageYOffset * 0.0001515;
        // let s2 = "scale(" + t2 + ")";
        // let s3 = s1 + " " + s2;
        // scrollButton.style.transform = s3;
        // scrollButton.style.transform = s2;
        // console.log(s2);
    });
    window.addEventListener("scroll", () => {});

    scrollButton.addEventListener("click", () => {
        window.scrollTo(0, 0);
    });
}
if (sunBeam) {
    window.addEventListener("scroll", () => {
        let t1 = pageYOffset * 0.013636;
        let s1 = "rotate(" + t1 + "deg)";
        sunBeam.style.transform = s1;
        sunBeam.style.transformOrigin = "top center";
    });
}
if (mercury) {
    window.addEventListener("scroll", () => {
        let t1 = pageYOffset * 0.6 - 150;
        let s1 = "rotate(" + t1 + "deg) translateX(80px)";
        mercury.style.transform = s1;
        // sunBeam.style.transformOrigin = "top center";
    });
}
if (venus) {
    window.addEventListener("scroll", () => {
        let t1 = pageYOffset * 0.2 - 180;
        let s1 = "rotate(" + t1 + "deg) translateX(120px)";
        venus.style.transform = s1;
        // sunBeam.style.transformOrigin = "top center";
    });
}
if (earth) {
    window.addEventListener("scroll", () => {
        let t1 = pageYOffset * 0.144 - 200;
        let s1 = "rotate(" + t1 + "deg) translateX(180px)";
        earth.style.transform = s1;
        let s2 = "rotate(-" + pageYOffset * 0.3 + "deg) translateX(50px)";

        rocket.style.transform = s2;
    });
}
if (mars) {
    window.addEventListener("scroll", () => {
        let t1 = pageYOffset * 0.0969 + 90;
        let s1 = "rotate(" + t1 + "deg) translateX(220px)";
        mars.style.transform = s1;
        // sunBeam.style.transformOrigin = "top center";
    });
}
if (jupiter) {
    window.addEventListener("scroll", () => {
        let t1 = pageYOffset * 0.0522 + 20;
        let s1 = "rotate(" + t1 + "deg) translateX(310px)";
        jupiter.style.transform = s1;
        // sunBeam.style.transformOrigin = "top center";
    });
}
if (saturn) {
    window.addEventListener("scroll", () => {
        let t1 = pageYOffset * 0.03 - 180;
        let s1 = "rotate(" + t1 + "deg) translateX(400px)";
        saturn.style.transform = s1;
        // sunBeam.style.transformOrigin = "top center";
    });
}
if (neptune) {
    window.addEventListener("scroll", () => {
        let t1 = pageYOffset * 0.01 - 35;
        let s1 = "rotate(" + t1 + "deg) translateX(500px)";
        neptune.style.transform = s1;
        // sunBeam.style.transformOrigin = "top center";
    });
}
hamburegerMenu.addEventListener("click", () => {
    navContent.classList.add("show");
    document.body.style.overflow = "hidden";
});

closeNavBtn.addEventListener("click", () => {
    navContent.classList.remove("show");
    document.body.style.overflow = "initial";
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navContent.classList.remove("show");
        document.body.style.overflow = "initial";
    });
});
