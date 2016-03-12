# Wizard Stones

Wizard Stones is a JavaScript web game, built on React-Flux, inspired by the webgame [2048](http://2048game.com/) created by [Gabriele Circulli](http://gabrielecirulli.com/), which was in turn inspired by [1024](https://itunes.apple.com/us/app/1024!/id823499224) by Veewo Studio and [Threes](http://asherv.com/threes/) by Asher Vollmer.  The game is one in which players attempt to combine similar mana stones across a four-by-four matrix.  The game is offers a few conceptually distinct features that are not in 2048.  Most importantly moves that do not result in a pieces changing place will still result in tile placement, this can either ease a board situation or make it all the more intractable.  Another change is the potential for a move to result in the placement of two stones instead of one roughly 5% of the time, and these new tiles are not restricted to borders.

[Play Here]: http://keldonia.github.io/Wizard-Stones/

## Features

* Full React-Flux Loop
  * Stores for holding both the current score and a session high score.
  * Directly manipulates the DOM to update the display of the current game state.
* Complex Matrix Logic to transform the matrix for vertical moves and to properly combine mana stones.
* Object-Oriented design of display and game logic
* Multiple user input captures allowing input via direction keys, WASD, and vim controls


## Languages, Frameworks, Libraries, Etc.

* React
* Flux
* JavaScript

## Screenshots

Coming Soon 
