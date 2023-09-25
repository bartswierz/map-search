# Map Search
![trailhawk_search](https://github.com/bartswierz/map-search/assets/100662080/86d2ef19-aaef-4773-9e5e-e27231ae1e12)

If you're an avid hiker or just looking for a new adventure, Trailhawk is the perfect app for you. Trailhawk lets you discover the best of the U.S. State Parks and National Parks. From casual hiking trails to treks spanning over 2000 miles, Trailhawk has you covered.

## Available Locations
Hiking Trail/State Park  | State | Est. Distance | Annual Visitors
-- | - | - | -
<strong>Starved Rock State Park</strong> | Illinois | 13 Miles | 2100000
<strong>Matthiessen State Park</strong> | Illinois | 5 Miles | 3000000
<strong>Ferne Clyffe State Park</strong> | Illinois | 75 Miles | 200000
<strong>Crater Rim Trail</strong> | Hawaii | 21 Miles | 15000
<strong>Red Rock Canyon</strong> | Nevada | 13 Miles | 4000000
<strong>Great Smokey Mountains</strong> | Tennessee | 500 Miles | 14137812
<strong>Pictured Rocks National Lakeshore</strong> | Michigan | 42 Miles | 1200000
<strong>Yellowstone National Park</strong> | Wyoming | 900 Miles | 3000000
<strong>Rubicon Trail</strong> | California | 22 Miles | ~5000000
<strong>Grand Teton</strong> | Wyoming | 35 Miles | 3000000
<strong>Point Lobos State Natural Reserve</strong> | California | 5 Miles | 600000
<strong>Haleakala National Park</strong> | Hawaii | 11 Miles | 853181
<strong>Rocky Mountain National Park</strong> | Colorado | 350 Miles | 4500000
<strong>Zion National Park</strong> | Utah | 90 Miles | 4500000
<strong>Bryce Canyon</strong> | Utah | 20 Miles | 1500000
<strong>Glacier National Park</strong> | Montana | 700 Miles | 2908458
<strong>Grand Canyon</strong> | Arizona | 21 Miles | 4730000
<strong>Badlands National Park</strong> | South Dakota | 80 Miles | 1006809
<strong>Joshua Tree National Park</strong> | California | 60 Miles | 3064400
<strong>Continental Divide Trail</strong> | New Mexico | 3100 Miles | 100000
<strong>Appalachian Trail</strong> | Vermont | 2198 Miles | 3000000
<strong>Pacific Crest Trail</strong> | California | 2650 Miles | 400000
<strong>Smith Rock State Park </strong> | Oregon | 3 Miles | 747000
<strong>John Muir Trail</strong> | California | 219 Miles | 10000
<strong>Mt. Whitney Trail</strong> | California | 22 Miles | 4000000
<strong>Yosemite National Park</strong> | California | 750 Miles | 3667550
<strong>Tongass National Park</strong> | Alaska | 700 Miles | 1881000

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
- <strong>Favorites feature</strong>: Allow users to save stores they liked from the results list. I planned to collect the store id and/or name and display it in a separate modal with a toggle but once I really dug into trying to resolve all the edge cases I could think of with the app, it felt like it could end up causing us to produce incomplete results for the required features not being as refined to our liking.
      
- <strong>Popular Daytime/Nighttime Store Feature</strong>: Implement an option for users to check popular 'daytime' and 'nighttime' spots based on the location. This can potential bring in more new customers that are new in town or are overwhelmed with all the choices available on the map.
      
- <strong>Suggest Me Something feature</strong>: option that a user can choose that would select a choice for them based on their preference if they can't decide. This could help with increasing sales as some customers may decide on none if they can't decide on one.
    
- <strong>Rating feature</strong>: Seeing a high rating can increase customers by giving social proof that others also really enjoy the business.
    
- <strong>Reviews Feature</strong>: Users would be able to browse through available reviews left for the company, increasing credibility and increased chance of new customers coming to their businesses. 
    
