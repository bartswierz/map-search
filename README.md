# Map Search

## Getting Started
To run the application locally, follow the steps below

1. Create an empty directory on your desktop
2. Clone the repository into the folder locally by using git clone:
   1. git clone https://github.com/bartswierz/map-search.git
3. Navigate into the directory
   i. cd map-search
4. Navigate into the directory
   1. npm install
5. You can run this app now with(Google Map Dev Mode)
   1. npm run dev
   
OPTIONAL: If you would like to experience the app with the best experience you can add a GOOGLE API KEY to remove the Developer Mode Overlay:
1. Get An Google API Key(~1-2 Minutes)
   1. https://developers.google.com/maps/documentation/javascript/get-api-key
2. Create an .env file at the root directory
3. Paste your API KEY
   1. VITE_GOOGLE_API_KEY=YOUR_API_KEY
4. The google map will now be displayed without the developer mode overlay! Enjoy!

## Built With
- React.js
- Tailwind CSS
- Redux
- Chart.js

#RESOURCES USED
DOCUMENTATION USED - FOR INTERVIEW PURPOSES
REACT LEAFLET INSTALLATION - https://react-leaflet.js.org/docs/start-installation/

- npm install react react-dom leaflet
- npm install react-leaflet
  SETUP CODE - https://react-leaflet.js.org/docs/start-setup/

TAILWIND INSTALLATION - VITE: https://tailwindcss.com/docs/guides/vite

- npm install -D tailwindcss postcss autoprefixer
- npx tailwindcss init -p

STATE MANAGEMENT - REDUX - https://redux-toolkit.js.org/tutorials/quick-start

- npm install @reduxjs/toolkit
- npm install react-redux

CHART.JS - https://www.chartjs.org/docs/latest/getting-started/installation.html

- npm install chart.js
- npm install react-chartjs-2

GOOGLE MAPS API - https://developers.google.com/maps/documentation/javascript/overview
https://developers.google.com/maps/documentation/javascript/maptypes#:~:text=The%20following%20map%20types%20are,displays%20Google%20Earth%20satellite%20images.
map types: roadmap, satellite, hybrid, terrain

TO GET AN GOOGLE API KEY, PLEASE VISIT: https://developers.google.com/maps/documentation/javascript/get-api-key
IF YOU WOULD LIKE TO USE A PERSONAL API KEY, PLEASE CREATE A .env FILE IN THE ROOT DIRECTORY AND ADD THE FOLLOWING LINE: VITE_GOOGLE_API_KEY=YOUR_API_KEY_HERE
OR, YOU CAN USE THE API KEY PROVIDED IN THE STARTER INDEX.HTML FILE, I PLACED IT IN THE 'INSTRUCTIONS-FILES' FOLDER. I WANTED TO USE .ENV TO FOLLOW BEST PRACTICES AND TO KEEP THE API KEY PRIVATE
