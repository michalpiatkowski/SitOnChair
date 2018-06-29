// slider

    document.addEventListener('DOMContentLoaded', function() {
        
        var slider = document.querySelector('#mainSlider');
        var slides = slider.querySelectorAll('.banner-slide');
        var prev = slider.querySelector('.banner-prev');
        var next = slider.querySelector('.banner-next');
        var interval = null;
        var delay = 6000;
        var currentSlide = 0;

        var nextSlideTimeout = function() {
            timer = setTimeout(function() {
                next.click();
            }, delay);
        };

        var prevSlide = function() {
            for (var i = 0; i < slides.length; i++) {
                slides[i].classList.remove('banner-slide--active');
            }
            currentSlide--;


            if (currentSlide < 0) {
                currentSlide = slides.length - 1;
            }

            slides[currentSlide].classList.add('banner-slide--active');

            clearTimeout(interval);
            nextSlideTimeout();
        };

        var nextSlide = function() {
            for (var i = 0; i < slides.length; i++) {
                slides[i].classList.remove('banner-slide--active');
            }

            currentSlide++;

            if (currentSlide > slides.length - 1) {
                currentSlide = 0;
            }

            slides[currentSlide].classList.add('banner-slide--active');

            clearTimeout(interval);
            nextSlideTimeout();
        };

        nextSlideTimeout();

        prev.addEventListener('click', prevSlide);
        next.addEventListener('click', nextSlide);
            });
        


    // chowanie bloku z nazwą

    var firstChair = document.querySelector('.first-chair');
    var secondChair = document.querySelector('.second-chair');

    firstChair.addEventListener('mouseenter', function() {
        firstChair.style.visibility = 'hidden';

        //firstElementChild.classList.add('info-box-img-only');
    });

    firstChair.addEventListener('mouseleave', function() {
        firstChair.style.visibility = 'visible';
    });


    secondChair.addEventListener('mouseover', function() {
        secondChair.style.visibility = 'hidden';

        //firstElementChild.classList.add('info-box-img-only');
    });

    secondChair.addEventListener('mouseout', function() {
        secondChair.style.visibility = 'visible';
    });


    // kalkulator

var chairType = document.getElementById('chair_type');
var chairColor = document.getElementById('chair_color');
var chairCloth = document.getElementById('chair_cloth');

var typeSpan = document.querySelector('.panel_left .title');
var typeValue = document.querySelector('.panel_right .title');

var colorSpan = document.querySelector('.panel_left .color');
var colorValue = document.querySelector('.panel_right .color');

var clothSpan = document.querySelector('.panel_left .pattern');
var clothValue = document.querySelector('.panel_right .pattern');

var transportSpan = document.querySelector('.panel_left .transport');
var transportValue = document.querySelector('.panel_right .transport');

var dropList = Array.from(document.querySelectorAll('.drop_down_list'));
var dropListElements = Array.from(document.querySelectorAll('.drop_down_list li'));

var checkbox = document.querySelector('#transport');

var sum = document.querySelector('.sum strong');


function summary() {
    var numbers = Number(transportValue.innerText) + Number(typeValue.innerText) + Number(clothValue.innerText) + Number(colorValue.innerText);
    sum.innerText = numbers;
    }

    dropList.forEach(function(element){
        element.addEventListener('click', function(e) {
           this.querySelector('.list_panel').classList.toggle('visible');
        });
     })

     dropListElements.forEach(function(ev){
        ev.addEventListener('click', function(e) {
           var attr = this.parentElement.parentElement.getAttribute('id');
           switch (attr) {
              case 'chair_color':
                 colorSpan.innerText = this.innerText;
                 colorValue.innerText = this.dataset.price;
                 console.log(this.dataset.price);
                 break;
              case 'chair_cloth':
                 clothSpan.innerText = this.innerText;
                 clothValue.innerText = this.dataset.price;
                 break;
              case 'chair_type':
                 typeSpan.innerText = this.innerText;
                 typeValue.innerText = this.dataset.price;
                 break;
              default:
              console.log('default');
           }
           summary();
        });
     });

     transport.addEventListener('change', function(e) {
        if (transport.checked) {
           transportSpan.innerText = 'Transport';
           transportValue.innerText = this.dataset.transportPrice;
        } else {
           transportValue.innerText =' ';
           transportSpan.innerText=' ';
        }
        summary();
     });