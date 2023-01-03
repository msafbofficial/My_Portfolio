$(function () {




  // /**
  //  * Mobile nav toggle
  //  */
  // on('click', '.mobile-nav-toggle', function(e) {
  //   select('body').classList.toggle('mobile-nav-active')
  //   this.classList.toggle('fa-solid fa-bars')
  //   this.classList.toggle('fa-solid fa-x')
  // })

  // /**
  //  * Scrool with ofset on links with a class name .scrollto
  //  */
  // on('click', '.scrollto', function(e) {
  //   if (select(this.hash)) {
  //     e.preventDefault()

  //     let body = select('body')
  //     if (body.classList.contains('mobile-nav-active')) {
  //       body.classList.remove('mobile-nav-active')
  //       let navbarToggle = select('.mobile-nav-toggle')
  //       navbarToggle.classList.toggle('fa-solid fa-bars')
  //       navbarToggle.classList.toggle('fa-solid fa-x')
  //     }
  //     scrollto(this.hash)
  //   }
  // }, true)



  // $('.autoplay').eee({
  //     slidesToShow: 3,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     autoplaySpeed: 2000,
  //   });



  // type.js
  var typed = new Typed('.typed', {
    // strings: ["Professional Coder.", " Website Designer.", " Logo Designer."],
    // strings: ["Developers.", "Designers.", "People."],
    strings: [" Frontend Developer.", " Professional Coder.", " logo Designer."],
    stringsElement: null,
    typeSpeed: 30,
    startDelay: 1400,
    backSpeed: 20,
    backDelay: 500,
    loop: true,
    loopCount: Infinity,
    cursorChar: "|",
    attr: null,
    contentType: 'html',
    callback: function () {},
    preStringTyped: function () {},
    onStringTyped: function () {},
    resetCallback: function () {}
  });




  //   clients part
  $('.counter').counterUp({
    delay: 5,
    time: 3000,
  });
  $('.counter').addClass('animated fadeInDownBig');
  $('h3').addClass('animated fadeIn');



  const nameEl = document.querySelector("#name");
  const emailEl = document.querySelector("#email");
  const companyNameEl = document.querySelector("#company-name");
  const messageEl = document.querySelector("#message");

  const form = document.querySelector("#submit-form");

  function checkValidations() {
    let letters = /^[a-zA-Z\s]*$/;
    const name = nameEl.value.trim();
    const email = emailEl.value.trim();
    const companyName = companyNameEl.value.trim();
    const message = messageEl.value.trim();
    if (name === "") {
      document.querySelector(".name-error").classList.add("error");
      document.querySelector(".name-error").innerText =
        "Please fill out this field!";
    } else {
      if (!letters.test(name)) {
        document.querySelector(".name-error").classList.add("error");
        document.querySelector(".name-error").innerText =
          "Please enter only characters!";
      } else {

      }
    }
    if (email === "") {
      document.querySelector(".name-error").classList.add("error");
      document.querySelector(".name-error").innerText =
        "Please fill out this field!";
    } else {
      if (!letters.test(name)) {
        document.querySelector(".name-error").classList.add("error");
        document.querySelector(".name-error").innerText =
          "Please enter only characters!";
      } else {

      }
    }
  }

  function reset() {
    nameEl = "";
    emailEl = "";
    companyNameEl = "";
    messageEl = "";
    document.querySelector(".name-error").innerText = "";
  }



  // resume part js  
  // resume part js  
  // resume part js  

  
  // row 01
  // row 01
  

  // photoshop part js (raw code)

  
  {
    let circularprogress = document.querySelector(".for_photoshop"),
  ProgressValue = document.querySelector("#photoshop_number");

  let progressStartValue = 0,
      progressEndValue = 75,
      speed = 65;
  
  let progress = setInterval(() => {
    progressStartValue++;

    ProgressValue.textContent = `${progressStartValue}%`

    if(progressStartValue == progressEndValue){
      clearInterval(progress);
    }
    
  }, speed);   

}

  // figma part js (raw code)
{
  let circularprogress = document.querySelector(".for_figma"),
  ProgressValue = document.querySelector("#figma_number");

  let progressStartValue = 0,
      progressEndValue = 80,
      speed = 61;
  
  let progress = setInterval(() => {
    progressStartValue++;

    ProgressValue.textContent = `${progressStartValue}%`

    if(progressStartValue == progressEndValue){
      clearInterval(progress);
    }
    
  }, speed);  

}

  // illustrator part js (raw code)
{
  let circularprogress = document.querySelector(".for_illustrator"),
  ProgressValue = document.querySelector("#illustrator_number");

  let progressStartValue = 0,
      progressEndValue = 60,
      speed = 62;
  
  let progress = setInterval(() => {
    progressStartValue++;

    ProgressValue.textContent = `${progressStartValue}%`

    if(progressStartValue == progressEndValue){
      clearInterval(progress);
    }
    
  }, speed);  

}


  // video_editing part js (raw code)
{
  let circularprogress = document.querySelector(".for_video_editing"),
  ProgressValue = document.querySelector("#video_editing_number");

  let progressStartValue = 0,
      progressEndValue = 90,
      speed = 50;
  
  let progress = setInterval(() => {
    progressStartValue++;

    ProgressValue.textContent = `${progressStartValue}%`

    if(progressStartValue == progressEndValue){
      clearInterval(progress);
    }
    
  }, speed);  

}

  // html part js (raw code)


  {
    let circularprogress = document.querySelector(".for_html"),
    ProgressValue = document.querySelector("#html_number");
  
    let progressStartValue = 0,
        progressEndValue = 80,
        speed = 61;
    
    let progress = setInterval(() => {
      progressStartValue++;
  
      ProgressValue.textContent = `${progressStartValue}%`
  
      if(progressStartValue == progressEndValue){
        clearInterval(progress);
      }
      
    }, speed);  
  
  }

   


  // back to top part


  let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
      scrollProgress.style.display = "grid";
    } else {
      scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#cf2e2e  ${scrollValue}%, #212529 ${scrollValue}%)`;
  };
  
  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;
  



  




  

});