# MAGD150_Lab_Assignments
My best work from MAGD150.





##Black Mirror


Description:

Program uses *p5.sound.js* library in order to work with sound effects. 

  In the preload function, the sound is imported into the program from a .wav file using *loadSound()*. The *soundFormats()* function call before this tells the program that the file formats used will be .wav. In the setup function, the program creates an html element as the header of the screen. It then creates a videocapture, and then hides it so that it can be drawn using *image()* instead and be manipulated more specifically. Next, a sawtooth oscillator is created to emulate the sound of sirens.
  In the draw function, a background is first drawn, the color set as black because it will be inverted when *invert()* is called, and then end up blank white. After drawing the frame to hold the mirror, an *image()* function call draws the image and the invert filter inverts it. is placed to creatthe program then draws the bars on to the mirror with a for loop which draws each new bar a fixed distance apart from the last, starting at the left side, until the x-coordinate reaches the right side of the mirror. At the very end of the function implementation, the pop sound is played only if a pseudorandom number between 0 and 60 evaluates out to 1, so that the sound will be played about every 60 frames or 1 second. 


[Source Code](https://github.com/ajcurrie-a11y/MAGD150_Lab_Assignments/tree/main/f20magd150lab09_currie/sketch.js)




##Competing Flowers


Description:

  At the very beginning of the program, the *flowers* array is to hold all of the flower objects which will be created. The *nutrientSupply* variable tells how large the supply of nutrients for the garden as a whole is.  
  The *drawPetal()* function draws petals with their tip at (*x*, *y*), angled at angle 'angle' relative to a horizontal line and incrementing in a counterclockwise fashion. The coordinate system is first translated so that the origin will lie at the flower's center, then the coordinate system is rotated so that the petal will be drawn at the proper angle. 
  The Flower class represents a flower based off of its position, number of petals, the colors of both its center part and its petals, as well as the mechanical properties: the rate at which it grows bigger and the maximum size which it can grow to. The constructor for the class automatically adds new Flower objects to the flower array, either at an empty index or at the end of the array. The class has a function to simulate a flowers' growth for a frame, to draw them onto the canvas, to make them "reproduce" i.e. create 2 identical copies of themselves nearby and a function to kill a flower i.e. remove it from the array so that the program will no longer be able to access it to draw or simulate.
  In the simulate function, *nutrientSupply* is divided by the total number of flowers in order to determine how much nutrients this flower will get once the available nutrients has been evenly distributed. If the amount of nutrients is sufficient for the flower's *growthRate* and it still has room to grow before reaching its maximum size, the plant's size is increased by its growth rate. Since *size* represents the radius of flowers and is increasing at a linear rate, the flowers themselves grow at a quadratic rate, With the rate of growth relative to the size decreasing over time. Next, it is determined if the flower has too little nutrients, in which case it is killed. It is then checked whether the flower has enough nutrients to reproduce and is also in excess of its full adult size, in which case it reproduces.
  In the keyReleased function implementation, the key codes 66, 83 and 71 are used to represent the keys 'b', 's' and 'g', respectively. The *keyCode* variable (which belongs to p5js) is compared to each numeric code and the program instantiates the flower type which matches the key pressed by the user (as described in the instructions).


[Source Code](https://github.com/ajcurrie-a11y/MAGD150_Lab_Assignments/tree/main/f20magd150lab07_currie/sketch.js)


##Rock Field


Description:

  *pixelSize* is the base size of one of the large pixels making up the sprites of the images in this program. Rather than updating *pixelSize*, the different sizes of rocks are created with *scale()* transformation functions. *playerChangeX* is the change in x (positive or negative) that was caused by the last update to its position (which will be through player-inputted motion). *playerChangeY* is analagous.
  The *keyTyped()* event handler function is an unimplemented function which would update the player's position in accordance with user-input key strokes. It was replaced by an if-else block in the *draw()* implementation.
  The *pixel()* function draws a pixel at the in-world coordinates (*x*, *y*) with color *color*. It draws pixels without stroke so that pixels seamlessly merge into a larger graphic. 
  The *circlesIntersect()* function determines whether two circles, represented by their coordinates and radii in the header, are intersecting or not and returns a boolean as the answer. Uses p5js function dist(), which calculates the distance between two points.
  The *canvCoords()* function is an unimplemented function that converts inputted in-world coordinates into the coordinates on the canvas where that position would currently be displayed, given the player's position and rotation.
  The *rock()* function draws a rock at the in-world coordinates (*x*, *y*) with size *size*. The program does a *scale()* to make the rock the desired size, then divides *x* and *y* by size since they are user-defined position variables and thus not affected by *scale()*. Multiples of *pixelSize* are added onto the upper-left coordinate to make the pixels show up where they should be in the matrix of the graphic. At the end of *rock()*, the program performs collision detection by checking if a rough circle of the rock and the circle of the player intersect. If they do, the player's position is updated to negate the change of the player's movement last frame so that they are back to where they were before they collided, creating the effect of the player being prevented from passing through the solid rock.
  The *draw()* function shows a small tip for the player to play for the first 300 frames of the program running, or about 5 seconds. In the if-else block to test for player-inputted motion of the avatar, the change in x and y are calculated by moving the player along a point on a unit circle, and then multiplying by playerSpeed to move them along the full trajectory. Then, a *translate()* function call brings the origin of the plane to the middle of the screen, meaning that the position where the player will be drawn on the canvas is the new (0, 0). The player is drawn using *pixel()* with multiples of *pixelSize*. Now that everything stationary relative to the player has been drawn, the coordinate system is rotated and translated to account for the in-world transform of the player, so that the rocks are displayed on the canvas relative to the player's position. Finally, rocks are drawn with their in-world coordinates to make the level of the "game". 


[Source Code](https://github.com/ajcurrie-a11y/MAGD150_Lab_Assignments/tree/main/f20magd150lab06_currie/sketch.js)


##Analog TV Lab


Description:

  *fps* is the frames per second for the in sketch TV simulation, not the frames per second of the canvas. *lastUpdateMillis* is set to a large negative number to approximate an integer minimum value constant.
  *mouseOverRectBtn()* tests whether the mouse is over the rectangler button in the sketch, and returns a boolean.
  *mouseOverCircBtn()* tests whether the mouse is over the circular button in the sketch, and returns a boolean.
  *mouseClicked()* is the event handler for when the user clicks a mouse button. If the mouse is over the rectangular button, the frames per second of the TV simulation is increased 1 at a time unless *fps* is 10 or larger, in which case it increase the framerate by 10 at a time so that the user can save some time when a change of 1 is not substantial enough for them to care.
  The *draw()* function starts by calculating the time that has passed in milliseconds since the last frame. Then, the ball on the TV screen's position is changed with a magnitude proportional to the time passed since the last canvas frame (and thus last physics update) and with a direction of *ballDir*, the variable which represents the direction the ball is moving as either 1 for right or -1 for left. However, this physics update is not actually drawn unless the amount of time that has passed since the last TV simulation draw update is greater than the amount of time which should pass between TV simulation draw updates based off of *fps*. If the user's mouse is over the circle button, the button's graphic is changed slightly to indicate the interactability to the user. The same is done for the rectangle button. After the ball is drawn in, the program checks if the TV simulation frame count is odd or even and employs a different loop in each case so that the white strips it draws to emulate the mechanics of analog TV display are drawn in at either even or odd rows down the TV screen. At the very end of the *draw()* implementation, frameOdd is inverted from even to odd or odd to even now that a TV simulation draw frame has passed, and the last milliseconds that the TV was updated is set to reflect this update as the new last update.


[Source Code](https://github.com/ajcurrie-a11y/MAGD150_Lab_Assignments/tree/main/f20magd150lab05_currie/sketch.js)


##Viewed From Above


Description:

  In the *setup()* function implementation, the canvas is created to be 400 pixels wide and 400 pixels tall.
  In the *draw()* function implementation, a black background is first created to be the space behind the foreground and the stroke color for the edges of shapes is set to be black. The *colorMode()* function call sets the mode for color based p5js functions to interpret their inputs as red, green, blue ordered triples, and to interpret the numbers on a scale from 0 being no color to 255 being full color. *arc()* is used to make the sphere curve of the planet below, centering in the middle of the screen where the planet is and arcing to form a semi-circle with its curved portion facing up where it will be viewable through the space station window. *beginShape()* calls begin interpreting *vertex()* calls as vertices of polygonal portions of the planet graphic. The vertices are placed in the code to match a clockwise direction around the edge of shapes, as the p5js *vertex()* and *quad()* rely on this convention. The reddish ground portion of the planet is drawn first, then, after *fill()* interprets a string as a hexadecimal representation of a color, the orange portion of the planet's surface is drawn. *colorMode()* sets the mode for color data interpretation to hue-saturation-brightness. Finally, the blueish portion of the planet is drawn. After the polygonal surface portions are drawn, 4 quadrilaterals are drawn for the space station walls, again sticking to the clockwise convention in the input of vertices. Finally, 5 white stars are drawn using the *point()* function.
  


[Source Code](https://github.com/ajcurrie-a11y/MAGD150_Lab_Assignments/tree/main/f20magd150lab02_currie/sketch.js)
