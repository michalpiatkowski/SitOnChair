// slider

(function () {
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

    // kalkulator

    var formCalc = document.querySelector('div.form_calc');

    var listArrowChairType = formCalc.querySelector('span.list_arrow.chair_type');
    var listArrowChairColor = formCalc.querySelector('span.list_arrow.chair_color');
    var listArrowChairCloth = formCalc.querySelector('span.list_arrow.chair_cloth');

    var selectChairType = formCalc.querySelector('span.chair_type');
    var selectChairColor = formCalc.querySelector('span.chair_color');
    var selectChairCloth = formCalc.querySelector('span.chair_cloth');

    var checkbox = formCalc.querySelector('div.checkbox');
    var checkboxInput = formCalc.querySelector('input[type=checkbox]');

    var summaryPanel = document.querySelector('div.summary_panel');

    var panelLeft = summaryPanel.querySelector('div.panel_left');
    var panelRight = summaryPanel.querySelector('div.panel_right');

    var chairTypeSummary = panelLeft.querySelector('h4.title');
    var chairPrice = panelRight.querySelector('h4.title');
    var chairColor = panelLeft.querySelector('span.color');
    var chairColorPrice = panelRight.querySelector('span.color');
    var chairPattern = panelLeft.querySelector('span.pattern');
    var chairPatternPrice = panelRight.querySelector('span.pattern');
    var transport = panelLeft.querySelector('span.transport');
    var transportPrice = panelRight.querySelector('span.transport');
    var sum = summaryPanel.querySelector('div.sum');

    var sumChairPrice = 0;
    var sumColorPrice = 0;
    var sumPatternPrice = 0;
    var sumTransportPrice = 0;


    listArrowChairType.addEventListener('click', function() {
        this.nextElementSibling.classList.toggle('showList');
        for (var i = 0; i < this.nextElementSibling.children.length; i++) {
            this.nextElementSibling.children[i].addEventListener('click', function() {
            selectChairType.innerHTML = this.innerHTML;
            chairTypeSummary.innerHTML = this.innerHTML;
            chairPrice.innerHTML = this.dataset.chairPrice;
            sumChairPrice = 0;
            sumChairPrice = sumChairPrice + parseInt(this.dataset.chairPrice);
            sum.innerHTML = sumChairPrice + sumColorPrice + sumPatternPrice + sumTransportPrice;
            this.parentElement.classList.add('showList');
        });
    }
});


    listArrowChairColor.addEventListener('click', function() {
        this.nextElementSibling.classList.toggle('showList');
        for (var i = 0; i < this.nextElementSibling.children.length; i++) {
        this.nextElementSibling.children[i].addEventListener('click', function() {
            selectChairColor.innerHTML = this.innerHTML;
            chairColor.innerHTML = this.innerHTML;
            chairColorPrice.innerHTML = this.dataset.colorPrice;
            sumColorPrice = 0;
            sumColorPrice = sumColorPrice + parseInt(this.dataset.colorPrice);
            sum.innerHTML = sumChairPrice + sumColorPrice + sumPatternPrice + sumTransportPrice;
            this.parentElement.classList.add('showList');
        });
    }
});

    listArrowChairCloth.addEventListener('click', function() {
        this.nextElementSibling.classList.toggle('showList');
            for (var i = 0; i < this.nextElementSibling.children.length; i++) {
                this.nextElementSibling.children[i].addEventListener('click', function() {
                selectChairCloth.innerHTML = this.innerHTML;
                chairCloth.innerHTML = this.innerHTML;
                chairPatternPrice.innerHTML = this.dataset.patternPrice;
                sumPatternPrice = 0;
                sumPatternPrice = sumPatternPrice + parseInt(this.dataset.patternPrice);
                sum.innerHTML = sumChairPrice + sumColorPrice + sumPatternPrice + sumTransportPrice;
                this.parentElement.classList.add('showList');
        });
    }
});


checkbox.addEventListener('click', function() {
    if (checkboxInput.checked) {
        transport.innerHTML = "Transport";
        transportPrice.innerHTML = checkboxInput.dataset.transportPrice;
        sumTransportPrice = 0;
        sumTransportPrice = sumTransportPrice + parseInt(checkboxInput.dataset.transportPrice);
        sum.innerHTML = sumChairPrice + sumColorPrice + sumPatternPrice + sumTransportPrice;
    } else {
        transport.innerHTML = "";
        transportPrice.innerHTML = "";
        sumTransportPrice = 0;
        sum.innerHTML = sumChairPrice + sumColorPrice + sumPatternPrice;
    }
});
