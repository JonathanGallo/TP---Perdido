export class HUD1 extends Phaser.Scene {
    constructor() {
     super("HUD1");
    }


    create() {

       // Boton para volver a jugar
      var botonre = this.add.image(100, 60, 'botonreset').setScale(0.5)
      .setInteractive()
      .on('pointerover', () => this.add.image(100, 60, 'botonreset2').setScale(0.5))
      .on('pointerout', () => this.add.image(100, 60, 'botonreset').setScale(0.5))
      .on('pointerdown', () => this.botonreset())
      
      
    }

    
  
    
}