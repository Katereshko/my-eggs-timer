# my-eggs-timer

My individual coding project.  
Can be seen on Netlify:  
https://my-eggs-timer.netlify.app/

## File structure 
5 folders, one for each number of minutes, each containing its own .js file (the logic file):  
'firmly hard', 'hard', 'medium', 'soft', 'very soft' folders. 
Each folder contains its own .css (style) file, .html file, .mp3 file (alarm sound) and .jpg file (background image).  

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
For all 5 timers the logic is similar.  
Initially the _timer_ constant of 10, 8, 6, 4 or 3 minutes is defined.  
The _amountTime_ variable is also initially defined as the _timer_ value multiplied to 60 in order to work with the seconds value.  
When the _start_ element (the 'Start' button) is clicked by the user, the _calculateTime()_ function is called.  
The function selects the _countdown_ element, which represents the paragraph that shows the time remained. The function then works with _minutes_ and _seconds_ variables: these are calculated based on the current value of _amountTime_, which in turn is renewed once per second (it decreases by one second each time the function is called using setTimeout method).  
When the _amountTime reaches 0 and is decreased to -1, the timer stops by interrupting the repeatedly called _calculateTime()_ function
  if(amountTime < 0){
        amountTime = 0;
        stopTimer();
        timeoutSound();
    }

**Thanks for your time exploring my project!**

**EKATERINA TERESHKO
ekaterina.tereshko.me@gmail.com**
