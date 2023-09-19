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
Objective: Preparing for the future with focus on taking steps for ensuring maintability, reusability, and code scalability.

State Management Decision:

- <strong>Redux</strong>: From my previous experience building out react.js applications I found Redux to be a great statemanagement option that never failed me when I needed good state management as my application and complexity increased. Utilizing Redux Toolkit made adding state management into the app quick and painless, if it wasn't for redux toolkit then I might have gone with a different alternative for state management(my second choice was trying our Zustand as I heard great things but have yet to use it). I decided to implement extra reducers within my Redux store to anticipate future feature additions. This approach includes a large reducer that handles user choices to update various values and individual reducers for specific values, which can be useful if a future feature only needs to update a particular value. I decided on a large reducer to simplify state management, avoiding the need for multiple dispatches when a user clicked on a result. This approach enhances code readability and minimizes calls to the store from ~6-7 down to 1. I ensured that state values are updated efficiently by checking if a value exists; if it does, the state is updated; otherwise, it defaults to a predefined value. This prevents previous state values from lingering in the store, potentially affecting user interactions. To solve our optional value issue, I ensured that state values are updated by checking if a value exists first, and if it does, the state is updated. Otherwise, it is set to the default value similar to the values in our initialState. This prevents previous state values from lingering in the store, potentially affecting user interactions when they open new modals at different locations.
  
- <strong>Limited our use of Dispatch and useSelector usage</strong>: I made a conscious effort to limit the use of dispatches and useSelector unless they were required to prevent us from prop drilling. For components where passing a setter for input was only one level deep, I chose not to use these Redux mechanisms to maintain code readability and maintainability. When a component required a callback for updating user input, I labeled the prop with 'callback' to provide clarity on its purpose. Instead of repeatedly fetching user input from the Redux store as it changed character by character, I opted for efficiency by passing callbacks directly. This ended up being pretty valuable in our application as the user input was so important in multiple components to ensure specific conditions were met.
  
- <strong>Modularized code</strong>: Trying to keep our components modularized as often as we could was something we strived for in this application. Early on, we wanted to keep our components organized, reusable, and keeping it all maintainable without requiring heavy refactoring. I really enjoyed working within this app that I knew I would most likely continue adding some additional features to it that I wasn't able to within the timeframe, due to wanting to complete the requirements with high quality. By organizing the components into separate folders it allows us to quickly go through our structure and understand the flow of it, this will be particularly useful for times when the app is revisited after a few months. We will be able to get up to speed quickly and able to tackle more features.

## Why I used (or did not use) any frameworks/libraries?

- <strong>Choosing React over Vue</strong>: I made the decision to stick with React.js due to my extensive experience with it compared to Vue.js. The project introduced new elements like React-Leaflet, Google Maps API, and Chart.js, which I was relatively new to. I wanted to utilize my strengths without getting too overwhelmed and spreading ourselves thin learning a handful of new libraries/frameworks without a solid grasp of Vue.js. React.js felt like the right choice to tackle this application and I'm glad I did because I was able to focus my time reading through documentation regarding the other topics(React-leaflet & Chart.js) and better understand what is going on under the hood which I believe let us enjoy the application more! I couldn't believe how quick it could be to spin up react-leaflet and chart.js into an application. I plan to try and find ways I can incorporate Chart.js into my large Next.js application and possibly a small maps window if we can figure out some features to utilize it. If the assessment wasn't limited time, I would definitely be open to tackling this within Vue.js. After looking into a bit of the Vue.js introductory documentation, just from how clear the documentation is combined with the clean and simple code structure, I would be open to learning it! I always look forward to learning more and growing my skillset as a developer, we have always been a curious person all of our lives which I believe is a great trait to have in a field that changes frequently and requires staying up to date with technologies.
  
- <strong>Tailwind CSS for Styling</strong>: I selected the Tailwind CSS framework for the enjoyable developer experience combined with the ability to rapidly build designs and layouts. Although it was a requirement for this task, I would have chosen it regardless due to its enjoyable nature. I have been using it in my current large Next.js application and have enjoyed it so much its hard to think of reasons of going back to SCSS. I love the ability to not worry about class names or finding which styling file out of the 100s is currently affecting our layout in a negative way, by having the styling within our file we can quickly find where our issue is coming from. I believe this helps developers with code reusability tremendously which can be seen by how small the styling files can be after using PostCSS to eliminate unused code. Overall, it is fair to say my future projects will most likely be using Tailwind CSS!

- <strong>Not Using Shadcn UI for components</strong>: During the project's planning stages, I contemplated using Shadcn UI to add for some of the necessary components(and possible additional components). However, I ultimately decided against it to showcase my ability to build designs from scratch. The major selling point for me with Shadcn UI is that it offers unstyled components which is huge when you want the functionality of a component but not necessarily interested in the provided styling. It can sometimes be a hassle styling over styled components such as Material UI which can also result in code readability not being the best once you get the layout you are looking for. With Shadcn UI you don't run into that issue. I felt in that aspect during the planning phase that this would be perfect for building out our required components but I really wanted to show that I can build these from scratch.

## What I wanted to do, but could not because...?
- <strong>Map Dragging</strong>: One task for improvement was resolving the map's behavior when interacting with the search bar and modal screens. We explored Leaflet documentation and discovered the 'dragging' prop, which could enable or disable this feature. This worked like a charm on app load however we weren't able to change it temporarily during specific events of the app such as when the modals were open or user was using the Searchbar. I attempted to use the 'openModal' state as an indicator to control the 'dragging' state. For instance, setting 'dragging={!openModal}' seemed like a clean solution as when openModal was true, our modal was open and there was no need for dragging, and when it was closed it would be resumed. Unfortunately, it didn't end up working I think it may be possibly due to issues related to refreshing. If we were to manually change the dragging state and then refresh the page, it would give the intended results but just not able to switch it during the app which we found odd. To try and work around the refresh/re-render scenario, I also experimented with the useRef hook in an effort to update the 'dragging' state but again no luck. Given the limited time and remaining work to do, I made the pragmatic decision not to invest excessive hours into resolving it. I believe at this developers need to make decisions of whether a side task is worth the additional time(and money in some instances) over priority or critical tasks that were to be delievered on such as the main tasks within this assessment and trying to resolve some edge cases when it came to the optional data values passed for the stores within sample data.
- <strong>Additional Features I wanted to add</strong>:
    - Favorites feature: Allow users to save stores they liked from the results list. I planned to collect the store id and/or name and display it in a separate modal with a toggle but once I really dug into trying to resolve all the edge cases I could think of with the app, it felt like it could end up causing us to produce incomplete results or the required features not being as refined to our liking.
    - Popular Daytime/Nighttime Store Feature: Implement an option for users to check popular 'daytime' and 'nighttime' spots based on the location. This can potential bring in more new customers that are new in town or are overwhelmed with all the choices available on the map. 
    - Suggest Me Something feature: option that a user can choose that would select a choice for them based on their preference if they can't decide. This could help with increasing sales as some customers may decide on none if they can't decide on one.
    - Rating feature: this would give the business more credibility and increase the chances of new customers visiting their business.
    - Reviews Feature: similar to rating, it would help give businesses more credibility and a better chance of new customers coming to their businesses. 
    
