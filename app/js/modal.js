'use strict';

class Modal {

    constructor(options) {
        this.modal = 0;
        this.ANIMATION_SPEED = 350;
        this.closing = false;
        this.body = document.body;
    }

    createModal() {
        this.modal = document.createElement('div');
        this.modal.classList.add('modal');
        this.modal.dataset.close = 'true';
        this.modal.insertAdjacentHTML('afterBegin', `<div class="modal-window">
                    <form action="#" class="form">
                      <span class="modal_close" id="modal-close" data-close="true">&times;</span>
                        <p class="form_caption">Оставьте заявку</p>
                        <p class="form_sub-caption">И мы вам перезвоним в течении 15 минут</p>
                        <div class="form_group">
                          <input type="text"
                                 name="name"
                                 id="name"
                                 placeholder="Имя"
                                 class="input">
                        </div>
                        <div class="form_group">
                          <input type="text"
                                 name="phone"
                                 id="phone"
                                 placeholder="Номер телефона"
                                 class="input">
                        </div>
                        <div class="form_group">
                          <button type="submit" class="btn form-btn">отправить</button>
                        </div>
                      </form>
                </div>`);
        document.body.appendChild(this.modal);
        return this.modal;
    }

    /*sendFormData() {
        const modalForm = document.getElementById('modal-form');
        const self = this;

        modalForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const formData = new FormData( this );
            fetch( '../../form.php', {
                method: 'post',
                body: formData
            }).then( ( response ) => {
                return response.text();
            }).catch( (er) => {
                console.log(er);
            });
            self.close();
        });
    }*/

    listeners() {
        this.modal.addEventListener('click', (e) => {
            if( e.target.dataset.close ) {
                this.close();
            }
        });
    }

    open() {
        this.createModal();

        setTimeout( () => {
            if( !this.closing ) {
                this.modal.classList.add('open');
            }
            this.body.classList.add('body-forbiddence-scroll');
        },10);

        this.listeners();
    }

    close() {
        this.closing = true;
        this.modal.classList.remove('open');
        this.modal.classList.add('modal-hide');
        setTimeout( () => {
            this.modal.classList.remove('modal-hide');
            this.destroy();
            this.closing = false;
        }, this.ANIMATION_SPEED);

        this.body.classList.remove('body-forbiddence-scroll');
    }

    destroy() {
        this.modal.parentNode.removeChild(this.modal);
        this.modal.removeEventListener('click', (e) => {
            if( e.target.dataset.close ) {
                this.close();
            }
        });
    }

    init() {
        this.open();
        // this.sendFormData();
    }
}

export { Modal };