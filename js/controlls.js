class Controlls {
    constructor(x, y) {
        this.left = false;
        this.right = false;
        this.up = false;
        this.down = false;

        this.#addKeyboardListeners();
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
}

export { Controlls }
