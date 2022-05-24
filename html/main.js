const hamburegerMenu = document.querySelector("#navigation .nav-icon");

const navContent = document.querySelector("#nav-content");

const closeNavBtn = document.querySelector("#nav-content .close-btn");

const navLinks = document.querySelectorAll("#nav-content nav ul li a");

const scrollButton = document.querySelector(".scroll-top");
// const sunBeam = document.querySelector(".sun-beam");
const mercury = document.querySelector(".mercury");
const venus = document.querySelector(".venus");
const earth = document.querySelector(".earth");
const mars = document.querySelector(".mars");
const jupiter = document.querySelector(".jupiter");
const saturn = document.querySelector(".saturn");
const neptune = document.querySelector(".neptune");

const rocket1 = document.querySelector(".rocket1");
const rocket2 = document.querySelector(".rocket2");
const rocket3 = document.querySelector(".rocket3");
const astronaut_thinking = document.querySelector(".astronaut_thinking");
const astronaut_Floating1 = document.querySelector(".astronaut_Floating1");
const astronaut_riding = document.querySelector(".astronaut_riding");

if (scrollButton) {
    window.addEventListener("scroll", () => {
        if (pageYOffset > window.innerHeight * 1.2) {
            scrollButton.style.display = "flex";
        } else {
            scrollButton.style.display = "none";
        }
        if (pageYOffset > window.innerHeight * 3) {
            astronaut_thinking.style.display = "flex";
        } else {
            astronaut_thinking.style.display = "none";
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
// if (sunBeam) {
//     window.addEventListener("scroll", () => {
//         let t1 = pageYOffset * 0.013636;
//         let s1 = "rotate(" + t1 + "deg)";
//         sunBeam.style.transform = s1;
//         sunBeam.style.transformOrigin = "top center";
//     });
// }
if (mercury) {
    window.addEventListener("scroll", () => {
        let t1 = pageYOffset * 0.6 - 150;
        let s1 = "rotate(" + t1 + "deg) translateX(80px)";
        mercury.style.transform = s1;
    });
}
if (venus) {
    window.addEventListener("scroll", () => {
        let t1 = pageYOffset * 0.2 - 180;
        let s1 = "rotate(" + t1 + "deg) translateX(120px)";
        venus.style.transform = s1;
    });
}
if (earth) {
    window.addEventListener("scroll", () => {
        let t1 = pageYOffset * 0.144 - 200;
        let s1 = "rotate(" + t1 + "deg) translateX(180px)";
        earth.style.transform = s1;
        let s2 =
            "rotate(-" + (80 + pageYOffset * 0.3) + "deg) translateX(55px)";

        rocket1.style.transform = s2;
    });
}
if (mars) {
    window.addEventListener("scroll", () => {
        let t1 = pageYOffset * 0.0969 + 90;
        let s1 = "rotate(" + t1 + "deg) translateX(220px)";
        mars.style.transform = s1;
    });
}
if (jupiter) {
    window.addEventListener("scroll", () => {
        let t1 = pageYOffset * 0.0522 + 20;
        let s1 = "rotate(" + t1 + "deg) translateX(310px)";
        jupiter.style.transform = s1;
    });
}
// if (rocket3) {
//     window.addEventListener("scroll", () => {
//         let t1 = pageYOffset * 0.0522 + 180;
//         let t2 = 420 - pageYOffset * 0.0892;
//         let s1 = "rotate(" + t1 + "deg) translateX(" + t2 + "px)";
//         rocket3.style.transform = s1;
//     });
// }
if (saturn) {
    window.addEventListener("scroll", () => {
        let t1 = pageYOffset * 0.03 - 180;
        let s1 = "rotate(" + t1 + "deg) translateX(400px)";
        saturn.style.transform = s1;
        let s2 =
            "rotate(-" + (80 + pageYOffset * 0.3) + "deg) translateX(70px)";

        rocket2.style.transform = s2;
    });
}
if (neptune) {
    window.addEventListener("scroll", () => {
        let t1 = pageYOffset * 0.01 - 35;
        let s1 = "rotate(" + t1 + "deg) translateX(500px)";
        neptune.style.transform = s1;
    });
}
if (astronaut_Floating1) {
    window.addEventListener("scroll", () => {
        let t1 = -900 * pageYOffset * 0.000166 + 200;
        // let s1 = "rotate(" + t1 + "deg) translateX(500px)";
        let s1 = "translateY(" + t1 + "px)";
        astronaut_Floating1.style.transform = s1;
    });
}
if (astronaut_riding) {
    window.addEventListener("scroll", () => {
        let t1 = -900 * pageYOffset * 0.000116 + 200;
        let t2 = 900 * pageYOffset * 0.000166 + -300;
        // let s1 = "rotate(" + t1 + "deg) translateX(500px)";
        let s1 = "translateY(" + t1 + "px)  translateX(" + t2 + "px)";
        astronaut_riding.style.transform = s1;
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
