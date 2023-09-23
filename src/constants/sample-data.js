/* Useful reference for Chicago Tour Attractions https://tourscanner.com/blog/best-tourist-attractions-in-chicago/ 
Hiking Trails - https://theplanetd.com/best-hikes-in-the-united-states/
*/
export const sampleData = [
  {
    id: 1,
    name: "Tongass National Park",
    geolocation: {
      lat: 56.94062,
      lon: -133.61918,
    },
    details: {
      description:
        "The Tongass National Forest is the largest national forest in the United States, known for its stunning temperate rainforests, diverse wildlife, and pristine wilderness in southeastern Alaska.",
      website: "https://www.fs.usda.gov/tongass/",
      address: "8510 Mendenhall Loop Road, Juneau, AK 99801",
      annualVisitors: 1881000,
    },
    images: [],
  },
  {
    id: 2,
    name: "Yosemite National Park",
    geolocation: {
      lat: 39.3955,
      lon: -119.58837,
    },
    details: {
      description:
        "Yosemite National Park is a breathtaking natural wonderland located in California's Sierra Nevada Mountains, renowned for its iconic granite cliffs, cascading waterfalls, and diverse wilderness, including the iconic Yosemite Valley.",
      website: "https://www.nps.gov/yose/index.htm",
      address: "Tioga Rd Hwy 120 & Hwy 140 Yosemite National Park, CA 95389",
      annualVisitors: 3667550,
    },
    images: [],
  },
  {
    id: 3,
    name: "Mt. Whitney Trail",
    geolocation: {
      lat: 37.3627,
      lon: -118.41087,
    },
    details: {
      description:
        "The Mount Whitney hiking trail is a challenging and scenic route leading to the highest peak in the contiguous United States, offering breathtaking views and a strenuous ascent for outdoor enthusiasts.",
      website: "https://www.alltrails.com/trail/us/california/mount-whitney-via-mount-whitney-trail",
      address: "Inyo National Forest 351 Pacu Lane Suite 200 Bishop, CA 93514",
      annualVisitors: 4000000,
    },
    images: [],
  },
  {
    id: 4,
    name: "John Muir Trail",
    geolocation: {
      lat: 37.23481,
      lon: -118.8706,
    },
    details: {
      description:
        "The John Muir Trail is a world-renowned long-distance hiking route stretching over 200 miles through California's Sierra Nevada mountains, showcasing stunning alpine landscapes and natural beauty.",
      website: "https://www.nps.gov/yose/planyourvisit/jmt.htm",
      address: "Happy Isles Trailhead, Yosemite Valley, Yosemite National Park, CA 95389",
      annualVisitors: 10000,
      //miles: 219
    },
    images: [],
  },
  {
    id: 5,
    name: "Smith Rock State Park",
    geolocation: {
      lat: 44.36018,
      lon: -121.13884,
    },
    details: {
      description:
        "Smith Rock, established as a state park in central Oregon in 1960, is widely recognized as the beginning of American sport climbing culture.",
      website: "https://stateparks.oregon.gov/index.cfm?do=park.profile&parkId=36",
      address: "9241 NE Crooked River Dr. Terrebonne, OR 97760",
      annualVisitors: 747000,
      miles: 3,
    },
    images: [],
  },
  {
    id: 6,
    name: "Pacific Crest Trail",
    geolocation: {
      lat: 40.75427,
      lon: -121.38551,
    },
    details: {
      description:
        "The Pacific Crest Trail (PCT) offers a transformative long-distance hiking experience along the scenic western border of the United States, spanning from the border of Mexico to Canada, allowing adventurers to connect with the natural beauty of the American wilderness.",
      website: "https://www.pcta.org/",
      address: "1323 Club Drive Vallejo, CA 94592",
      annualVisitors: 400000,
      // miles: 2650,
    },
    images: [],
  },
  {
    id: 7,
    name: "Appalachian Trail",
    geolocation: {
      lat: 44.13554,
      lon: -72.59428,
    },
    details: {
      description:
        "The Appalachian Trail (AT) beckons hikers on a legendary journey, traversing the rugged beauty of the Eastern United States from Georgia to Maine, providing an immersive wilderness experience.",
      website: "https://www.nps.gov/appa/index.htm",
      address: "Appalachian National Scenic Trail, Killington, VT 05751",
      annualVisitors: 3000000,
      // miles: 2198,
    },
    images: [],
  },
];

/* Object Structure
{
  id: 0,
  name: "",
  geolocation: {
    lat: 0,
    lon: 0,
  },
  details: {
    description:
      "",
    website: "",
    address: "",
    annualVisitors: 0,
    // miles: 0,
  },
  images: [],
},
*/
