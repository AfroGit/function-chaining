// Chaining


// There’s a ladder object that allows to go up and down:

 let ladder = {
   step: 0,
   up() {
     this.step++;
      return this;/*for program to work this line is all i added,it enables chaining of all the functions.*/
   },
   down() {
     this.step--;
     return this;
   },
   showStep: function() { // shows the current step
     console.log( this.step );
     return this;
   }
 };

// Now, if we need to make several calls in sequence, can do it like this:

 ladder.up();
 ladder.up();
 ladder.down();
 ladder.showStep(); // 1
 ladder.down();
 ladder.showStep(); // 0

// Modify the code of up, down and showStep to make the calls chainable, like this:

  ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0

// Such approach is widely used across JavaScript libraries.