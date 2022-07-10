import $ from '../core';

$.prototype.setAttribute = function(nameAttr, value) {
    for(let i = 0; i < this.length; i++) {
        this[i].setAttribute(nameAttr, value);
    }
    return this;
};

$.prototype.removeAttribute = function(nameAttr) {
    for(let i = 0; i < this.length; i++) {
        this[i].removeAttribute(nameAttr);
    }
    return this;
};

$.prototype.getAttribute = function(atrributeName) {
    for(let i = 0; i < this.length; i++) {
        return this[i].getAttribute(atrributeName);
    }
};

$.prototype.toggleAttribute = function(nameAttr) {
    for(let i = 0; i < this.length; i++) {
        this[i].toggleAttribute(nameAttr);
    }
    return this;
};