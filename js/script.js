// slider

(function () {
    document.addEventListener('DOMContentLoaded', function() {
        var slider = document.querySelector('#mainSlider');
        var slides = slider.querySelectorAll('.banner-slide');
        var prev = slider.querySelector('.banner-prev');
        var next = slider.querySelector('.banner-next');
        var interval = null;
        var delay = 6500;
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
        }) 
    ();


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