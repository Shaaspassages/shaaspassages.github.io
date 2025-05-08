let currentarticle = "banner";
let currentbackground = "#eecd9a";

function changearticle(current_article, next_article) {
    if (current_article == "current") {
        document.getElementById(currentarticle).style.display = "none";
    } else {
        document.getElementById(current_article).style.display = "none";
    }
    if (next_article == "article3") {
        console.log("a");
        document.getElementById(next_article).style.display = "flex";
    } else if (next_article == "article5") {
        console.log("b");
        document.getElementById(next_article).style.display = "block";
    } else {
        document.getElementById(next_article).style.display = "flex";
    }
    console.log(document.getElementById(next_article).style.display);
    currentbackground = document.getElementById(next_article).style.backgroundColor;
    document.getElementById("navbar").style.backgroundColor = currentbackground;
    currentarticle = next_article;
}

function a(b, x) {
    return b * x;
}

//Img slideshow Article 4
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("article_imgs_slide");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
