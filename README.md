# Map Search

## Getting Started

To run the application locally, follow the steps below

1. Create an empty directory on your desktop
2. Clone the repository into the folder locally by using git clone:

- git clone https://github.com/bartswierz/map-search.git

3. Navigate into the directory

- cd map-search

4. Navigate into the directory

- npm install

5. You can run this app now with(Google Map Dev Mode)

- npm run dev

OPTIONAL: If you would like to experience the app with the best experience you can add a GOOGLE API KEY to remove the Developer Mode Overlay:

1. Get An Google API Key(~1-2 Minutes)

- https://developers.google.com/maps/documentation/javascript/get-api-key

2. Create an .env file at the root directory
3. Paste your API KEY

- VITE_GOOGLE_API_KEY=YOUR_API_KEY

4. The google map will now be displayed without the developer mode overlay! Enjoy!

## Built With

- React.js
- Tailwind CSS
- Redux
- Chart.js

## Individual Packages & Resources Used

React-Leaflet Installation - https://react-leaflet.js.org/docs/start-installation/

- SETUP CODE - https://react-leaflet.js.org/docs/start-setup/
- npm install react react-dom leaflet
- npm install react-leaflet

React-Leaflet-Google-Layer - Required to use google maps. Pass the API KEY within the ReactLeafletGoogleLayer component

- npm install --save react-leaflet-google-layer

Tailwind Installation - VITE: https://tailwindcss.com/docs/guides/vite

- npm install -D tailwindcss postcss autoprefixer
- npx tailwindcss init -p

Redux Installation - https://redux-toolkit.js.org/tutorials/quick-start

- npm install @reduxjs/toolkit
- npm install react-redux

CHART.JS Installation - https://www.chartjs.org/docs/latest/getting-started/installation.html

- npm install chart.js
- npm install react-chartjs-2

GOOGLE MAPS API - https://developers.google.com/maps/documentation/javascript/overview

## Why did I (or did not) do something?
-To prepare for the future of this project, I took several developer-focused actions:

State Management Decision:
- From my previous experience building out react.js applications I found Redux to be a great statemanagement option that never failed me when I needed good state management as my application and complexity increased. I decided to implement extra reducers within my Redux store to anticipate future feature additions. This approach includes a large reducer that handles user choices to update various values and individual reducers for specific values, which can be useful if a future feature only needs to update a particular value. I decided on a large reducer to simplify state management, avoiding the need for multiple dispatches when a user clicked on a result. This approach enhances code readability and minimizes calls to the store from ~6-7 down to 1. I ensured that state values are updated efficiently by checking if a value exists; if it does, the state is updated; otherwise, it defaults to a predefined value. This prevents previous state values from lingering in the store, potentially affecting user interactions. To solve our optional value issue, I ensured that state values are updated by checking if a value exists first, and if it does, the state is updated. Otherwise, it is set to the default value similar to the values in our initialState. This prevents previous state values from lingering in the store, potentially affecting user interactions when they open new modals at different locations.
- Limited our use of Dispatch and useSelector usage: I made a conscious effort to limit the use of dispatches and useSelector unless they were required to prevent us from prop drilling. For components where passing a setter for input was only one level deep, I chose not to use these Redux mechanisms to maintain code readability and maintainability. When a component required a callback for updating user input, I labeled the prop with 'callback' to provide clarity on its purpose. Instead of repeatedly fetching user input from the Redux store as it changed character by character, I opted for efficiency by passing callbacks directly. This ended up being pretty valuable in our application as the user input was so important in multiple components to ensure specific conditions were met.




