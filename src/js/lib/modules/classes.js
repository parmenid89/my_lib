import $ from '../core';

$.prototype.addClass = function(...classNames) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].classList) {
            continue;
        } else {
            this[i].classList.add(...classNames);
        }   
    }
    return this;
};

$.prototype.removeClass = function(...classNames) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].classList) {
            continue;
        } else {
            this[i].classList.remove(...classNames);
        }   
    }
    return this;
};

$.prototype.toggleClass = function(className) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].classList) {
            continue;
        } else {
            this[i].classList.toggle(className);
        }
    }
    return this;
};

$.prototype.containsClass = function(className) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].classList) {
            continue;
        } else {
            return this[i].classList.contains(className); 
        }
    }
};