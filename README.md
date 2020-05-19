# Click-Game

[<img src="https://img.shields.io/badge/License-MIT-blue.svg">](https://opensource.org/licenses/MIT) 

## Description

The requirements for this assignment seek the creation of a memory game using React with the application UI broken out into components, and incorporating component state management, and response to user events.


## Table of Contents

  * [Technology](#Technology)

  * [Summary](#Summary)

  * [Learning-Points](#Learning-Points)
  
  * [License](#License)
  
  * [Contributing](#Contributing)
  
  * [Installation](#Installation)
  
  * [Tests](#Tests)
  
  * [Questions](#Questions)

## Technologies Used
- HTML - used to create elements on the DOM
- CSS - used to add style to the deployed page
- JavaScript - used to create the logic controlling the client-side application
- jQuery - library supplement to JavaScript controlling application logic
- Node.js - runtime environment which executes the JS code
- Express - framework for Node.js to create a server
- React - a JS library for building user interfaces
- JSX - similar to HTML, this can be used to structure component rendering within React
- Git - version control system to track changes to source code
- GitHub - hosts repository that can be deployed to GitHub Pages
- Heroku - host for deployed application

## Summary

This React application presented a fun challenge to do some reasearch while also explorating the creation of a simple memory game.  I chose to use blank memes to give a little humor to this exercise in memory.  Feel free to mentally come up with your own inane offerings while playing!

As for the more serious bit of this assignment, one of the more challenging tasks was creating a randomizer for the memes following the selection of each "card."  I did a little research on this and chose to go with the Fisher–Yates-Durstenfeld Shuffle.  I'll spare the reader a history lesson, but the modern algorithm, if you would consider 1964 to be modern resembles the following, with ES6 syntax:

```  
memeShuffle = imageClick => {
    for (let i = imageClick.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let hold = imageClick[i]
      imageClick[i] = imageClick[j]
      imageClick[j] = hold
    }
  };
```

<img src="https://github.com/davisbradleyj/Click-Game/blob/master/public/click-game.gif">

## Learning-Points

One of the more interesting learning points I picked up in this assignment, outside of all the syntatic drilling of how JSX is structured, and some reinforcement of ES6 language, was how to apply styling elements through React.  It is not specifically as straightforward as I initially thought, as there was a combination of elements required to the css pages, in addition to the inline styling elements through `className`, and the bitter lessons taught from the code not rendering properly.

Also, each setState element exists on its own.  I cannot use a comma to connect multiple elements.  That's 2 hours of my life researching a bug that I won't get back. 

::sad trombone::

## Contributing

Jerome Chenette, Kerwin Hy, Mahi Gunasekaran, Corbin Brockbank, Richard Durstenfeld, Ronald Fisher, Frank Yates

## Installation

To install necessary dependencies for this application, the following commands are required from a root directory:

`npx create-react-app <application name>` - This command will install all the base dependencies to bootstrap a react app

`cd <application name>` - Once your react app is created, you can move into that directory

`npm start` - Command to run the application in a development mode

For those who wish to clone or fork this repo, the following steps should be followed:

Clone:
1) On GitHub, navigate to the main page of the repository.
2) Under the repository name, click Clone or download.
3) To clone the repository using HTTPS, under "Clone with HTTPS", click the clipboard icon. To clone the repository using an SSH key, including a certificate issued by your organization's SSH certificate authority, click Use SSH, then click the clipboard icon.
4) Open your local Terminal
5) Move into the directory location where you would like the cloned repo to sit.
6) Type `git clone` then paste the URL copied from earlier so that your would see the following - `$ git clone https://github.com/davisbradleyj/click-game.git`
7) Press enter

Fork:
1) On GitHub, navigate to the main page of the repository.
2) In the top-right corner of the page, click Fork.

For more detailed instructions, you can visit GitHub directly to <a herf="https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository">Clone</a> or <a herf="https://help.github.com/en/github/getting-started-with-github/fork-a-repo">Fork</a>

## Tests

No tests were required for this application

## Questions

If you have any questions about the repository, open an issue or contact:

<img src="https://avatars3.githubusercontent.com/u/61176147?v=4" alt="avatar" style="border-radius: 16px" width="30">

[Brad Davis](https://github.com/davisbradleyj) directly at davis.bradleyj@gmail.com