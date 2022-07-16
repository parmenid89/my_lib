import $ from '../core';

$.prototype.modal = function(created) {
    for (let i=0; i < this.length; i++) {
        const target = this[i].getAttribute('data-target');
        $(this[i]).click((e) => {
            e.preventDefault();
            $(target).fadeIn(200);
            document.body.style.overflow = 'hidden';
        });

        const closeElements = document.querySelectorAll(`${target} [data-close]`);
        closeElements.forEach(elem => {
            $(elem).click(() => {
                $(target).fadeOut(200);
                document.body.style.overflow = '';
                if (created) {
                    document.querySelector(target).remove();
                }
            });
        });

        $(target).click(e => {
            if (e.target.classList.contains('modal')) {
                $(target).fadeOut(200);
                document.body.style.overflow = '';
                if (created) {
                    document.querySelector(target).remove();
                }
            }
        });
    }
};

$('[data-toggle="modal"]').modal();

$.prototype.createModal = function({text, btns} = {}) {
    for (let i = 0; i < this.length; i++) {
        let modal = document.createElement('div');
        modal.classList.add('modal');
        modal.setAttribute('id', this[i].getAttribute('data-target').slice(1));

        // btns = {settings: [[text, classNames=[], close, cb]]}
        const buttons = [];
        for (let j = 0; j < btns.settings.length; j++) {
            const [btnText, btnClasses, btnClose, btnCallBackFun] = [...btns.settings[j]];
            let btn = document.createElement('button');
            btn.classList.add('btn', ...btnClasses);
            btn.textContent = btnText;
            if (btnClose) {
                btn.setAttribute('data-close', 'true');
            }
            if (btnCallBackFun && typeof(btnCallBackFun) === 'function') {
                btn.addEventListener('click', btnCallBackFun);
            }
            buttons.push(btn);
        }

        modal.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <button class="close" data-close>
                    <span>&times;</span>
                </button>
                <div class="modal-header">
                    <div class="modal-title">
                        ${text.title}
                    </div>
                </div>
                <div class="modal-body">
                    ${text.body}
                </div>
                <div class="modal-footer">
                    
                </div>
            </div>
        </div>
        `;

        modal.querySelector('.modal-footer').append(...buttons);
        document.body.appendChild(modal);
        $(this[i]).modal(true);
        $(this[i].getAttribute('data-target')).fadeIn(200);
    }
};