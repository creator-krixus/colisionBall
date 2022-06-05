class Controlls {
    constructor(x, y) {
        this.left = false;
        this.right = false;
        this.pageX = 0;
        this.clientX = 0;

        this.#addKeyboardListeners();
        this.#listenerTouch();
    }
    #addKeyboardListeners() {
        document.onkeydown = (event) => {
            switch (event.key) {
                case 'ArrowLeft':
                    this.left = true;
                    break;
                case 'ArrowRight':
                    this.right = true;
                    break;         
            }
        }
        document.onkeyup = (event) => {
            switch (event.key) {
                case 'ArrowLeft':
                    this.left = false;
                    break;
                case 'ArrowRight':
                    this.right = false;
                    break;
            }
        }
    }
    #listenerTouch(){
        // window.addEventListener('touchstart', e => {
        //     this.clientX = e.changedTouches[0].clientX
        //     console.log(this.clientX)
        // })
        window.addEventListener('touchmove', e => {
            console.log(this.pageX)
            this.pageX = e.changedTouches[0].pageX
            // console.log(e)
        })
        window.addEventListener('touchend', e => {
            // console.log('final')
            this.pageX = 0
            // this.clientX = 0
        })
    }
}

export { Controlls }
