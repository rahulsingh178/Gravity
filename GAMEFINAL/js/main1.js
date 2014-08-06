
var game = new Phaser.Game(1024, 768, Phaser.AUTO, 'game_div');

// Creates a new 'main' state that will contain the game
var main_state = {

    
        //=================================================
    preload: function () { 
        // Function called first to load all the assets
         // Change the background color of the game
   // this.game.stage.backgroundColor = '#71c5cf';

    // Load the bird sprite
        this.game.load.image("bg", "assets/starfield.png");
    this.game.load.image('ground', 'assets/Meteor.gif');
        this.game.load.image('star', 'assets/star.png');
        this.game.load.spritesheet('plane', 'assets/BC12.gif',120,80);
    },

        //=================================================
    create: function () { 
        // Fuction called after 'preload' to setup the game 
        // Display the sprites on the screen
       this.background = this.game.add.tileSprite(0, 0, 1024, 768, "bg");
        this.stars=this.game.add.group();
        this.platforms = this.game.add.group();
    //ledges  
        this.stars.createMultiple(20, 'star');      
         this.platforms.createMultiple(20, 'ground'); 
     
        this.timer = this.game.time.events.loop(1500, this.add_objects, this);  
        
    
    this.player = this.game.add.sprite(100, 300, 'plane');
    
        
        
   // this.player.animations.add('left', [0, 1, 2, 3], 10, true);
  //  this.player.animations.add('right', [5, 6, 7, 8], 10, true);
        var up_key = this.game.input.keyboard.addKey(Phaser.Keyboard.W);
    up_key.onDown.add(this.UP_GO, this);
    up_key.onUp.add(this.LIFT_UPY, this);    
    
        var down_key = this.game.input.keyboard.addKey(Phaser.Keyboard.S);
    down_key.onDown.add(this.DOWN_GO, this);
    down_key.onUp.add(this.LIFT_UPY, this);    
    
            var left_key = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
    left_key.onDown.add(this.LEFT_GO, this);
    left_key.onUp.add(this.LIFT_UPX, this);    
        
        var right_key = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
   right_key.onDown.add(this.RIGHT_GO, this);
   right_key.onUp.add(this.LIFT_UPX, this);    
        
    this.score = 0;  
var style = { font: "30px Arial", fill: "#ffffff" };  
this.label_score = this.game.add.text(20, 20, "0", style); 
    },
    
    //=================================================
    
    
    add_objects: function() {  
    
  var pposy = Math.floor(Math.random()*(700-250)+250);

    var platform = this.platforms.getFirstDead();
    var star = this.stars.getFirstDead();
    // Set the new position of the platform
  platform.reset(1200, pposy);
 var sposy = Math.floor(Math.random()*(900-100)+100);
        star.reset(1200,sposy);
        
    // Add velocity to the platform to make it move left
  platform.body.velocity.x = -970; 
  star.body.velocity.x = -550;
    // Kill the platform when it's no longer visible 
  platform.outOfBoundsKill = true;
  star.outOfBoundsKill = true;
    },
    
      //=================================================
 UP_GO: function() {  
    // Add a vertical velocity to the player
    this.player.body.velocity.y = -450;
},
      //=================================================
     DOWN_GO: function() {  
    // Add a vertical velocity to the player
    this.player.body.velocity.y = 450;
},
//=================================================
  LEFT_GO: function() {  
        
        this.player.body.velocity.x = -450;
        // this.player.animations.play('right');  
},
    
    //=================================================
        
    
    RIGHT_GO: function() {  
    
      this.player.body.velocity.x = 450;
             //this.player.animations.play('right'); 
},
   
    //=================================================
    LIFT_UPX: function() {
         this.player.body.velocity.x = 0;     
       // this.player.animations.stop();
       // this.player.frame = 4;
    },
   
     //=================================================
    LIFT_UPY: function() {
        this.player.body.velocity.y = 0;      
       // this.player.animations.stop();
      //  this.player.frame = 4;
    },
   
        //=================================================
    restart_game: function() {  
    // Start the 'main' state, which restarts the game
    
		document.cookie="points="+this.score;
			//window.location.href="gamend.html";
			window.location.href="name.php";
	this.game.time.events.remove(this.timer);  
        this.game.time.events.remove(this.timer2);  
     //   this.game.state.start('main');
        //window.open("score.php");
		//var name=prompt("Please Enter Your Name");
            //window.location.href="endgame.php?name="+name+"&score="+this.score;
			
		
},
    //=================================================
    
    
    update: function() {  
 
            // If the player is out of the world (too high or too low), call the 'restart_game' function
   
        //this.restart_game();

        this.game.physics.overlap(this.player, this.platforms, this.restart_game, null, this);
        this.game.physics.overlap(this.player, this.stars, this.star_up, null, this); 
        if (this.player.inWorld == false)
           this.restart_game;
            	
        
    },
    //=================================================
   
    star_up: function(player,star)
    {  star.kill();
      this.score+=20;
        this.label_score.content = this.score;  
    }
    
    
};

// Add and start the 'main' state to start the game
game.state.add('main', main_state);  
game.state.start('main');  