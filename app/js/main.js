import { Modal } from "./modal";

window.addEventListener('load', function () {

    (function () {
        const modal = new Modal();
        let buttons = document.getElementsByClassName('button');
        buttons = Array.prototype.slice.call( buttons );
        buttons = buttons.filter( (button) => {
            return !button.classList.contains('toTopBtn');
        });

        for( const btn of buttons ) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                modal.init();
            });
        }
    })();

});