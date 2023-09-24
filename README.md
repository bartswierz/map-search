# Map Search
![trailhawk_search](https://github.com/bartswierz/map-search/assets/100662080/86d2ef19-aaef-4773-9e5e-e27231ae1e12)

If you're an avid hiker or just looking for a new adventure, Trailhawk is the perfect app for you. Trailhawk lets you discover the best of the U.S. State Parks and National Parks. From casual hiking trails to treks spanning over 2000 miles, Trailhawk has you covered.

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
    
