import Button from "../js/button.js";

// Clase MainMenu, donde se crean los botones, el logo y el fondo del menú principal
export class MainMenu extends Phaser.Scene {
    constructor() {
        // Se asigna una key para despues poder llamar a la escena
        super("MainMenu")
    }

    create() {
        // Fondo del menú principal
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'mainmenu_bg').setScale();
        // Boton para comenzar a jugar
        var Inicar = this.add.image(410, 340, 'INICIAR').setScale(0.8)
      .setInteractive()
      .on('pointerover', () => this.add.image(410, 340, 'INICIAR2').setScale(0.8))
      .on('pointerout', () => this.add.image(410, 340, 'INICIAR').setScale(0.8))
      .on('pointerdown', () => this.INICIAR())

        // Boton para controles
        
        // Boton para comenzar a jugar
        


    }

    INICIAR(){
        this.scene.start('Play');
    }
    
}