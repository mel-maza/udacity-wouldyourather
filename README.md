# Would you rather? - Project

This is the 'Would you rather?' final assessment project for Udacity's React Fundamentals course. 
The project let's a user play the 'Would you rather?' - game. 
Users are able to answer questions, see which questions they haven’t answered, see how other people have voted, 
post questions, and see the ranking of users on the leaderboard.

## Project Setup

* install all project dependencies with `npm install`
* start the development server with `npm start`
* If workspace is used: Click on `Preview` to view the project in the browser 

## What You're Getting
```bash
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
│   └── pin.svg # pin-Icon used in the app
└── src
    ├── actions # contains all action-files
    │   ├── authedUser.js # actions needed for the current user
    │   ├── questions.js # actions needed for poll handling
    │   └── shared.js # loads the initial data
    │   └── theme.js # actions needed for the material-ui theme
    │   └── users.js # actions needed for user handling
    ├── components
        ├── Home # contains all components concerning the root
        │   ├── Home.js # shows the unanswered and answered polls at the root
        │   ├── PollsList.js # component with the UI for listing the answered and unanswered polls
        │   └── PollView.js # component with the UI for one poll
        ├── Leaderboard # contains all components concerning the leaderboard
        │   ├── Leaderboard.js # shows the users ordered descending based on the number of answered and unanswered polls
        │   ├── LeadersEntry.js # component with the UI for one user on the leaderboard
        ├── NewPoll # contains the components concerning adding a new poll
        │   ├── NewPoll.js # component with the UI and handling for adding a new poll
        ├── Poll # contains all components concerning the display and handling of an answered or unanswered poll
        │   ├── AnsweredPoll.js # component with the UI for an answered Poll
        │   ├── AnsweredPollOption.js # component with the UI for one option of an answered poll
        │   └── Poll.js # shows the unanswered or answered poll
        │   └── PollHeader.js # component with the UI for both answered and unanswered polls
        │   └── UnansweredPoll.js # component with the UI for an unanswered poll
    │   ├── App.js # the root of the App containing the material-ui theme
    │   ├── Footer.js # AppBar with the currentUser and logout-button at the bottom of the App
    │   └── Login.js # component handling the login-functionality
    │   └── Main.js # main component that renders all the other components
    │   └── Nav.js # AppBar for navigation at the top of the App
    │   └── NotFound.js # component with the UI for 404 page error handling
    │   └── PrivateRoute.js # component handling the redirecting to the login page
    ├── images # Images used in the app
    │   ├── leaf.jpg # user's image
    │   ├── snow.jpg # user's image
    │   └── tyler.jpg # user's image
    │   └── notFound.jpg # image for 'page not found'
    │   └── neven-krcmarek-425319-unsplash.jpg # background image
    ├── middleware # contains the redux-middleware files
    │   ├── index.js # applying the thunk middleware to the 
    ├── reducers # contains all reducer-files
    │   ├── authedUser.js # reducer for setting the authedUser
    │   ├── index.js # combines all reducers for the redux store
    │   └── questions.js # reducer for receiving, answering and adding polls
    │   └── theme.js # reducer for changing the theme
    │   └── users.js # reducer for receiving users and setting poll-authors and poll-answers for the user
    ├── utils # contains the data
    │   ├── _DATA_.js # data file, imitating a database
    │   ├── api.js # file providing methods concerning the communication with the data
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
    ├── App.js # This is the root of your app. It contains the the categorized books as well as all books for searching.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
```

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
