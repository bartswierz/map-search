/* Useful reference for Chicago Tour Attractions https://tourscanner.com/blog/best-tourist-attractions-in-chicago/ 
Hiking Trails - https://theplanetd.com/best-hikes-in-the-united-states/
*/
export const hikingData = [
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
  {
    id: 8,
    name: "Continental Divide Trail",
    geolocation: {
      lat: 31.49774,
      lon: -108.2076,
    },
    details: {
      description:
        "The Continental Divide Trail begins its epic 3,100-mile journey at Crazy Cook Monument in remote New Mexico, inviting hikers to embark on a rugged adventure along the Rocky Mountains' spine, traversing diverse landscapes and challenging terrain.",
      website: "https://www.fs.usda.gov/managing-land/trails/cdt",
      address: "Hachita, NM 88040",
      annualVisitors: 100000,
      // miles: 3100,
    },
    images: [],
  },
  {
    id: 9,
    name: "Joshua Tree National Park",
    geolocation: {
      lat: 33.88994,
      lon: -115.85086,
    },
    details: {
      description:
        "Joshua Tree National Park, located in Southern California, showcases a stunning desert landscape marked by unique Joshua trees, striking rock formations, and a celestial haven for stargazers.",
      website: "https://www.nps.gov/jotr/index.htm",
      address: "6554 Park Boulevard, Joshua Tree, CA 92252",
      annualVisitors: 3064400,
      // miles: 60,
    },
    images: [],
  },
  {
    id: 10,
    name: "Badlands National Park",
    geolocation: {
      lat: 43.86973,
      lon: -102.32801,
    },
    details: {
      description:
        "Badlands National Park, situated in South Dakota, captivates visitors with its otherworldly landscapes featuring eroded buttes, colorful canyons, and fossil-rich terrain showcasing the ancient history of North America.",
      website: "https://www.nps.gov/badl/index.htm",
      address: "25216 Ben Reifel Road, Interior, SD 57750",
      annualVisitors: 1006809,
      // miles: 80,
    },
    images: [],
  },
  {
    id: 11,
    name: "Grand Canyon",
    geolocation: {
      lat: 36.2867,
      lon: -112.22031,
    },
    details: {
      description:
        "The Grand Canyon, a geological marvel in northern Arizona, boasts awe-inspiring vistas of its immense, millennia-carved chasm, revealing Earth's complex geological history.",
      website: "https://www.nps.gov/grca/index.htm",
      address: "20 South Entrance Road Grand Canyon, AZ 86023",
      annualVisitors: 4730000,
      // miles: 21,
    },
    images: [],
  },
  {
    id: 12,
    name: "Glacier National Park",
    geolocation: {
      lat: 48.75961,
      lon: -113.78702,
    },
    details: {
      description:
        "Glacier National Park, nestled in Montana's pristine wilderness, showcases a breathtaking landscape of towering, glacier-carved peaks, pristine lakes, and abundant wildlife, offering an immersive outdoor experience.",
      website: "https://www.nps.gov/glac/index.htm",
      address: "64 Grinnell Drive Glacier National Park Headquarters West Glacier, MT 59936",
      annualVisitors: 2908458,
      // miles: 700,
    },
    images: [],
  },
  {
    id: 13,
    name: "Bryce Canyon",
    geolocation: {
      lat: 37.59304,
      lon: -112.18733,
    },
    details: {
      description:
        "Bryce Canyon National Park, located in southern Utah, is renowned for its mesmerizing crimson-hued amphitheaters of hoodoos, creating an otherworldly and enchanting natural spectacle.",
      website: "https://www.nps.gov/brca/index.htm",
      address: "Highway 63. Bryce Canyon National Park Bryce, UT 84764",
      annualVisitors: 1500000,
      // miles: 20,
    },
    images: [],
  },
  {
    id: 14,
    name: "Zion National Park",
    geolocation: {
      lat: 37.29781,
      lon: -113.02877,
    },
    details: {
      description:
        "Zion National Park, situated in southwestern Utah, mesmerizes visitors with its towering sandstone cliffs, emerald-green river, and winding slot canyons, offering an outdoor paradise for hikers and adventurers.",
      website: "https://www.nps.gov/zion/index.htm",
      address: "Zion National Park 1 Zion Park Blvd. Springdale, UT 84767",
      annualVisitors: 4500000,
      // miles: 90,
    },
    images: [],
  },
  {
    id: 15,
    name: "Rocky Mountain National Park",
    geolocation: {
      lat: 40.34318,
      lon: -105.6881,
    },
    details: {
      description:
        "Rocky Mountain National Park, nestled in the heart of Colorado, enchants visitors with its towering peaks, alpine lakes, and diverse ecosystems, providing a pristine wilderness playground for nature enthusiasts.",
      website: "https://www.nps.gov/romo/index.htm",
      address: "1000 US Hwy 36. Estes Park, CO 80517",
      annualVisitors: 4500000,
      // miles: 350,
    },
    images: [],
  },
  {
    id: 16,
    name: "Haleakala National Park",
    geolocation: {
      lat: 20.70128,
      lon: -156.17332,
    },
    details: {
      description:
        "Haleakalā National Park, located on the Hawaiian island of Maui, showcases a surreal volcanic landscape with its massive crater and lush, high-elevation rainforests, offering a unique blend of natural beauty and cultural significance.",
      website: "https://www.nps.gov/hale/index.htm",
      address: "30185 State Hwy 378. Kula, HI 96790",
      annualVisitors: 853181,
      // miles: 11,
    },
    images: [],
  },
  {
    id: 17,
    name: "Point Lobos State Natural Reserve",
    geolocation: {
      lat: 36.51644,
      lon: -121.9366,
    },
    details: {
      description:
        "Point Lobos State Natural Reserve, on the picturesque California coast, is a coastal haven renowned for its dramatic cliffs, pristine marine habitats, and abundant wildlife, providing a serene escape for nature enthusiasts.",
      website: "http://www.parks.ca.gov/?page_id=571",
      address: "62 Hwy 1, Carmel, CA 93923",
      annualVisitors: 600000,
      // miles: 5,
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
