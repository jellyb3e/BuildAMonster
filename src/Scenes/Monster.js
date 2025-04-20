class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        // legs
        my.sprite.leftleg1 = this.add.sprite(this.bodyX-60,this.bodyY+100,"monsterParts","leg_darkC.png");
        my.sprite.rightleg1 = this.add.sprite(this.bodyX+60,this.bodyY+100,"monsterParts","leg_darkC.png");
        my.sprite.leftleg1.flipX = true;
        
        // body
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_darkF.png");
        
        // arms
        my.sprite.leftarm1 = this.add.sprite(this.bodyX-90,this.bodyY,"monsterParts","arm_darkE.png");
        my.sprite.rightarm1 = this.add.sprite(this.bodyX+90,this.bodyY,"monsterParts","arm_darkE.png");
        my.sprite.leftarm1.angle = 20;
        my.sprite.rightarm1.angle = -20;
        my.sprite.leftarm1.flipX = true;

        // eyes
        my.sprite.lefteye1 = this.add.sprite(this.bodyX-40,this.bodyY-40,"monsterParts","eye_cute_light.png");
        my.sprite.righteye1 = this.add.sprite(this.bodyX+40,this.bodyY-40,"monsterParts","eye_cute_light.png");
        my.sprite.lefteye1.scale = .75;
        my.sprite.righteye1.scale = .75;

        // mouths
        my.sprite.smile = this.add.sprite(this.bodyX,this.bodyY+10,"monsterParts","mouth_closed_happy.png");
        my.sprite.fangs = this.add.sprite(this.bodyX,this.bodyY+10,"monsterParts","mouthF.png");
        my.sprite.fangs.visible = false;

        // accessories
        my.sprite.nose = this.add.sprite(this.bodyX,this.bodyY-20,"monsterParts","nose_green.png");
        my.sprite.lefteyebrow = this.add.sprite(this.bodyX-40,this.bodyY-80,"monsterParts","eyebrowC.png");
        my.sprite.righteyebrow = this.add.sprite(this.bodyX+40,this.bodyY-80,"monsterParts","eyebrowC.png");
        my.sprite.lefteyebrow.angle = -20;
        my.sprite.righteyebrow.angle = 20;
        my.sprite.lefteyebrow.flipX = true;

        // input keys
        this.sKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.fKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        this.sKey.on('down', (key, event) => {
            my.sprite.smile.visible = true;
            my.sprite.fangs.visible = false;
        });

        // Event input: regular smile
        this.fKey.on('down', (key, event) => {
            my.sprite.smile.visible = false;
            my.sprite.fangs.visible = true;
        });
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        
        if (this.aKey.isDown) {
            for (let asset in my.sprite) {
                my.sprite[asset].x -= 1;
            }
        }

        if (this.dKey.isDown) {
            for (let asset in my.sprite) {
                my.sprite[asset].x += 1;
            }
        }
    }

}