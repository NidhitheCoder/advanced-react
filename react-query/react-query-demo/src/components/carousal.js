import React from "react";

const Carousal = () => {
  const slides = React.createRef();
  const dotOne = React.createRef();
  const dotTwo = React.createRef();
  const dotThree = React.createRef();


  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;

    // letslides = document.getElementsByClassName("mySlides");
    // let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    // for (i = 0; i < dots.length; i++) {
    //   dots[i].current?.className = dots[i].current?.className.replace(" active", "");
    // }
    const dots = [dotOne, dotTwo, dotThree];

    dotOne.current?.className = dotOne.current?.className.replace(" active", "");
    dotTwo.current?.className = dotTwo.current?.className.replace(" active", "");
    dotThree.current?.className = dotThree.current?.className.replace(" active", "");
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].current?.className += " active";
  }

  return (
    <div>
      <div class="slideshow-container">
        <div ref={slides} class="mySlides fade">
          <div class="numbertext">1 / 3</div>
          <img src="img_nature_wide.jpg" style="width:100%" />
          <div class="text">Caption Text</div>
        </div>
        <div class="mySlides fade">
          <div class="numbertext">2 / 3</div>
          <img src="img_snow_wide.jpg" style="width:100%" />
          <div class="text">Caption Two</div>
        </div>
        <div class="mySlides fade">
          <div class="numbertext">3 / 3</div>
          <img src="img_mountains_wide.jpg" style="width:100%" />
          <div class="text">Caption Three</div>
        </div>
        <a class="prev" onclick="plusSlides(-1)">❮</a>
        <a class="next" onclick="plusSlides(1)">❯</a>
      </div>
      <div style="text-align:center">
        <span ref={dotOne} class="dot" onclick="currentSlide(1)"></span>
        <span ref={dotTwo} class="dot" onclick="currentSlide(2)"></span>
        <span ref={dotThree} class="dot" onclick="currentSlide(3)"></span>
      </div>
    </div>
  )
};

export default Carousal;