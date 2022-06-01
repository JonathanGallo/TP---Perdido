import Button from "../js/button.js";

// Clase MainMenu, donde se crean los botones, el logo y el fondo del menú principal
export class controles extends Phaser.Scene {
    constructor() {
        // Se asigna una key para despues poder llamar a la escena
        super("controles")
    }

    create() {
        // Fondo del menú principal
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'controles').setScale();
        // Boton para comenzar a jugar
        
        
    }
}