# Map Search
![trailhawk_search](https://github.com/bartswierz/map-search/assets/100662080/86d2ef19-aaef-4773-9e5e-e27231ae1e12)

If you're an avid hiker or just looking for a new adventure, Trailhawk is the perfect app for you. Trailhawk lets you discover the best of the U.S. State Parks and National Parks. From casual hiking trails to treks spanning over 2000 miles, Trailhawk has you covered.

## Available Locations
Hiking Trail/State Park  | State | Est. Distance | Annual Visitors
-- | - | - | -
<strong>Starved Rock State Park</strong> | Illinois | 13 Miles | 2,100,000
<strong>Matthiessen State Park</strong> | Illinois | 5 Miles | 3,000,000
<strong>Ferne Clyffe State Park</strong> | Illinois | 75 Miles | 200,000
<strong>Crater Rim Trail</strong> | Hawaii | 21 Miles | 15,000
<strong>Red Rock Canyon</strong> | Nevada | 13 Miles | 4,000,000
<strong>Great Smokey Mountains</strong> | Tennessee | 500 Miles | 14,137,812
<strong>Pictured Rocks National Lakeshore</strong> | Michigan | 42 Miles | 1,200,000
<strong>Yellowstone National Park</strong> | Wyoming | 900 Miles | 3,000,000
<strong>Rubicon Trail</strong> | California | 22 Miles | ~5,000,000
<strong>Grand Teton</strong> | Wyoming | 35 Miles | 3,000,000
<strong>Point Lobos State Natural Reserve</strong> | California | 5 Miles | 600,000
<strong>Haleakala National Park</strong> | Hawaii | 11 Miles | 853,181
<strong>Rocky Mountain National Park</strong> | Colorado | 350 Miles | 4,500,000
<strong>Zion National Park</strong> | Utah | 90 Miles | 4,500,000
<strong>Bryce Canyon</strong> | Utah | 20 Miles | 1,500,000
<strong>Glacier National Park</strong> | Montana | 700 Miles | 2,908,458
<strong>Grand Canyon</strong> | Arizona | 21 Miles | 4,730,000
<strong>Badlands National Park</strong> | South Dakota | 80 Miles | 1,006,809
<strong>Joshua Tree National Park</strong> | California | 60 Miles | 3,064,400
<strong>Continental Divide Trail</strong> | New Mexico | 3100 Miles | 100,000
<strong>Appalachian Trail</strong> | Vermont | 2198 Miles | 3,000,000
<strong>Pacific Crest Trail</strong> | California | 2650 Miles | 400,000
<strong>Smith Rock State Park </strong> | Oregon | 3 Miles | 747,000
<strong>John Muir Trail</strong> | California | 219 Miles | 10,000
<strong>Mt. Whitney Trail</strong> | California | 22 Miles | 4,000,000
<strong>Yosemite National Park</strong> | California | 750 Miles | 3,667,550
<strong>Tongass National Park</strong> | Alaska | 700 Miles | 1,881,000

## Getting Started

To run the application locally, follow the steps below

1. Create an empty directory on your desktop
2. Clone the repository into the folder locally by using git clone:

       git clone https://github.com/bartswierz/map-search.git

3. Navigate into the directory

       cd map-search

4. Navigate into the directory

       npm install

5. You can run this app now with(Google Map Dev Mode)

       npm run dev

   ### Optional: If you would like to experience the app with the best experience you can add a GOOGLE API KEY to remove the Developer Mode Overlay:

   1. Get An Google API Key(~1-2 Minutes)

          https://developers.google.com/maps/documentation/javascript/get-api-key

   2. Create an .env file at the root directory
   3. Paste your API KEY inside <strong>.env</strong>
   
          VITE_GOOGLE_API_KEY=YOUR_API_KEY

   4. The google map will now be displayed without the developer mode overlay! Enjoy!

## Built With

- React.js
- Tailwind CSS
- Redux
- Chart.js

## Individual Packages & Resources Used

- React-Leaflet Installation - https://react-leaflet.js.org/docs/start-installation/
- Startup Code - https://react-leaflet.js.org/docs/start-setup/

#####
    npm install react react-dom leaflet react-leaflet

React-Leaflet-Google-Layer - Required to use google maps. Pass the API KEY within the ReactLeafletGoogleLayer component

    npm install --save react-leaflet-google-layer

Tailwind Installation - VITE: https://tailwindcss.com/docs/guides/vite

    npm install -D tailwindcss postcss autoprefixer
######    
    npx tailwindcss init -p

Redux Installation - https://redux-toolkit.js.org/tutorials/quick-start

    npm install @reduxjs/toolkit react-redux

CHART.JS Installation - https://www.chartjs.org/docs/latest/getting-started/installation.html

    npm install chart.js react-chartjs-2

GOOGLE MAPS API - https://developers.google.com/maps/documentation/javascript/overview

## Possible Future Features:
- <strong>Favorites</strong>: Allow users to save the hiking trails they liked from the results list. This would require a unique id for each hiking trail and a database(would also require a sign in feature to keep track of user data) or local storage to persist the data when user closes the application.
      
- <strong>Suggest Me Something</strong>: A useful option for an eager hiker who is having a difficult time deciding between all the great hiking trails and state parks. This would select a hiking trail at random from the available locations for them if they can't decide. 
    
