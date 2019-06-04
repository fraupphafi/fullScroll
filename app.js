'use strict';



class fullScroll {
    constructor(selector, options) {
        this.container = document.querySelector(selector);
        this.options = options;

        this.screens = [... this.container.querySelectorAll('.screen')];
        this.colors = this.options.colors;
        this.scrollingSpeed = this.options.colors.scrollingSpeed || 1000;

        this.currentScreen = 0;
        this.lastScreen = this.screens.length - 1;

        //this.log();
        this.setBgc();
        this.initCustomScroll();
    }

    log() {
        console.log(this);
    }

    setBgc() {
        this.screens.forEach((elem, index) => {
            elem.style.backgroundColor = this.colors[index];
        });
    }

    initCustomScroll() {
        (function() {
            document.body.style.overflow = 'hidden';
        })();

        window.addEventListener('wheel', throttle((e)=> {
            let direction = e.deltaY;

            if (direction > 0) moveDown.call(this);
            if (direction < 0) moveUp.call(this);       
           
        }, this.scrollingSpeed));
    }


}

const page = new fullScroll('.fullscroll', {
    colors: ['#515bd4', '#8134af', '#dd2a7b', '#feda77', '#665b3f']
});


// Helpers

function moveUp () {
    console.log('moveUp');
    if (this.currentScreen <= 0) return;
    this.currentScreen--;
    console.log(this);
}

function moveDown() {
    console.log('moveDown');
    if (this.currentScreen >= this.lastScreen) return;
    this.currentScreen++;
    console.log(this);
}

function throttle(f, t) {
    return function (args) {
        let previousCall = this.lastCall;
        this.lastCall = Date.now();
        if (previousCall === undefined // function is being called for the first time
            || (this.lastCall - previousCall) > t) { // throttle time has elapsed
            f(args);
        }
    }
}





