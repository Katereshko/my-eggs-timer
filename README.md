# eggs-timer

My individual coding project.  
Can be seen on Netlify:  
https://my-eggs-timer.netlify.app/

## File structure 
5 folders, one for each number of minutes, each containing its own .js file, the main logic file:
'firmly hard', 'hard', 'medium', 'soft', 'very soft'
each folder contains its own .css (style) file, .html file, .mp3 file (alarm sound) and .jpg file (background image).  

index.html - main html file - to use the timer, open this file on browser window  
style.css - main styling file  
eggs_horizontal.jpg - background image for using on Desktop
eggs_vertical.jpg - background image for using on mobile devices 
favicon.ico - icon to be displayed on browser tab  

## About the app
Created by Ekaterina Tereshko as an individual project during the coding program, it has the following features:

### User side
- pick one of the five timers suggested on the main page, using hints that appear when you hover over them  
- click the 'Start' button in order to launch the timer when you are ready to cook  
- the timer will start the countdown, showing you the time remained an also the progress on a progress bar
- when time is up, the timer will make an alarm sound, warning you that the cooking process should be ended
- if you need to renew the countdown, renew the page and click the 'Start' button again

### Logic side

For two games logic is similar and is described in two blocks, one for each of two games that the user can choose from.  
All the constants and functions are named accordingly in both games with a difference in number 1 or 2 only in the end of the name.  

The constants represent the following items (an example for game 1):   
***input1*** - an input field where the user should enter the suggested number for the first game,   
***buttonGame1*** - the button that the user should click in order to start the game or enter the next suggested number,  
***answer1*** - a random number from 1 to 20 generated using Math.random  

***input2, buttonGame2, answer2*** - similar constants for the second game accordingly, given that the numbers range in the second game is from 1 to 100.  
The constants described above are defined when the page is loaded, so the random numbers for both games (constants answer1 and answer2) are defined before any game starts.  

When the user clicks the _buttonGame1_, the _playGame()_ function is called. The function receives the value of the constant _input1_ (the number currently entered by the user in the input field) and puts it into the constant _userNumber1_. Before checking if the number is guessed, the functions also checks if the number meets the range requirement (is not a NaN and also is not less than 1 and not higher than 20 for the first game or 100 for the second game). In case the requirement is not met, an alert appears and asks the user to enter another number.   
After a suitable suggested number is received, the function is comparing the user's number to the _answer1_ constant. In case the value of _userNumber1_ is lower than the answer1 const, the alert 'My number is higher!' is shown. In case the value of _userNumber1_ is higher than the answer1 const, the alert 'My number is lower!' is shown. After each try the user enters another number and clicks the _buttonGame1_ or Enter key, which calls the _playGame()_ function again. In case there is a match, the user wins and the game is over. The page needs to be reloaded in order to get new random numbers and play again.

**Thanks for your time exploring my project!**

**EKATERINA TERESHKO
ekaterina.tereshko.me@gmail.com**
