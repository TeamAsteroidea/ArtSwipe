# ArtSwipe

ArtSwipe is a mobile app concept that combines the swipe left/right feature of Tinder with the buying and selling of artwork on eBay. The idea behind ArtSwipe is to make the process of buying and selling art more accessible, interactive and engaging for users, especially for art enthusiasts who are looking for a unique and personalized experience.

## Authors

[Aidan Fisher](https://www.github.com/aidanFisher97) - [Swipe Stack](#swipestack)\
[Dennis Hsu](https://github.com/denniseh7) - Project Manager - [Art Event](#artevent)\
[Jacob Sifodaskalakis](https://www.github.com/jacob-sifodaskalakis) - [Artist Alley](#artistalley)\
[Jessica Tong](https://github.com/jessicatong43) - UI Design Lead - [Wireframe](#wireframe), [Art Event](#artevent), & forms for [Profile](#profile)\
[Neil Xia](https://www.github.com/NeilLXia) - [Messaging](#messaging)

## Built With

![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)![Expo](https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37)![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)![React Navigation](https://img.shields.io/badge/React%20Navigation-46B5D1?style=for-the-badge&logo=react&logoColor=white)

## Project Summary

## Key Features

- Firebase authentication
<image of login screen>
- Firestore database
- Redux global state management

<a name="swipestack"></a>
## Swipe Stack

### Features

- Streamlined bidding through swiping left to reject and right to bid.
- Auction duration is displayed on the top left of the screen. 
- Artwork can be bookmarked.
- Active bids are displayed when a user clicks the gavel icon on the top right. 
- Card stack is sorted by bookmarked, and the artwork the user bid on but is not the most recent bidder. Each group is sorted by duration left on auction. 
    
https://user-images.githubusercontent.com/121323175/235491657-881a352f-08c8-4d1d-9205-87808020a962.mp4



## Artist Alley

## Messaging
- Real time listening for database updates for new messages
<image of receiving message>
- Post messages to database
<image of posting message>
- Keyboard responsive design
<image of opening and closing keyboard>

<a name="artevent"></a>
## Art Events
### Features
- Scrolling view of nearby art gallery events with lazy loading
- Events can be clicked on for further description
- Can Create a new event or Edit an existing event for each user
- Uses a date/time picker to set the event date\
![EventsDemo-20230429](https://user-images.githubusercontent.com/7811764/235326379-bec373de-87ff-4a14-80cc-a8e1118f1aed.gif)

<a name="profile"></a>
## Profile

<a name="wireframe"></a>
## Wireframe
![Wireframe](https://github.com/TeamAsteroidea/ArtSwipe/blob/main/readmeImages/ArtSwipe_Wireframe.gif)

## Getting Started

### Requirements
- Expo iOS Simulator

### Installation
1. Clone the repository
    ```
        git clone https://github.com/TeamAsteroidea/ArtSwipe.git
    ```
2. Navigate into the repository folder, then install the dependencies
    ```
        npm install
    ```
3. Create your .env file with the following and fill out the fields:
    ```
        API_KEY = "Insert your Firebase API token here"
        APP_ID = “Insert App ID from Firebase here”
    ```
4. Run the following script to open the app on Expo:
    ```
        npx expo --ios --clear
    ```

### Installation (Ubuntu)
1. Clone the repository
    ```
        git clone https://github.com/TeamAsteroidea/ArtSwipe.git
    ```
2. Navigate into the repository folder, then install the dependencies
    ```
        npm install
    ```
3. Create your .env file with the following and fill out the fields:
    ```
        API_KEY = "Insert your Firebase API token here"
        APP_ID = “Insert App ID from Firebase here”
    ```
4. Run the following script to open the app on Expo:
    ```
        expo
    ```


