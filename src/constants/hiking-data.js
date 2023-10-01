/* Useful Hiking Trail References used for choosing hiking locations:
- https://theplanetd.com/best-hikes-in-the-united-states/
- https://www.alltrails.com/us/illinois/state-parks
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
      address: "8510 Mendenhall Loop Road, Juneau, AK, 99801",
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
      address: "Tioga Rd Hwy 120 & Hwy 140 Yosemite National Park, CA, 95389",
      annualVisitors: 3667550,
      // miles: 750,
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
      address: "Inyo National Forest 351 Pacu Lane Suite 200 Bishop, CA, 93514",
      annualVisitors: 4000000,
      // miles: 22,
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
      address: "Happy Isles Trailhead, Yosemite Valley, Yosemite National Park, CA, 95389",
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
      address: "9241 NE Crooked River Dr. Terrebonne, OR, 97760",
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
      address: "1323 Club Drive Vallejo, CA, 94592",
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
      address: "Appalachian National Scenic Trail, Killington, VT, 05751",
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
      address: "Hachita, NM, 88040",
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
      address: "6554 Park Boulevard, Joshua Tree, CA, 92252",
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
      address: "25216 Ben Reifel Road, Interior, SD, 57750",
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
      address: "20 South Entrance Road Grand Canyon, AZ, 86023",
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
      address: "64 Grinnell Drive Glacier National Park Headquarters West Glacier, MT, 59936",
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
      address: "Highway 63. Bryce Canyon National Park Bryce, UT, 84764",
      annualVisitors: 1500000,
      // miles: 20,
    },
    images: ["https://i.ibb.co/YL5M4Xt/bryce-canyon.jpg"],
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
      address: "Zion National Park 1 Zion Park Blvd. Springdale, UT, 84767",
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
      address: "1000 US Hwy 36. Estes Park, CO, 80517",
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
      address: "30185 State Hwy 378. Kula, HI, 96790",
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
  {
    id: 18,
    name: "Grand Teton",
    geolocation: {
      lat: 43.73799,
      lon: -110.80149,
    },
    details: {
      description:
        "Grand Teton, a majestic mountain in Wyoming's Teton Range, stands tall as the centerpiece of Grand Teton National Park, surrounded by pristine lakes, lush valleys, and a rugged wilderness that beckons outdoor adventurers.",
      website: "https://www.nps.gov/grte/index.htm",
      address: "103 Headquarters Loop Moose, WY, 83012",
      annualVisitors: 3000000,
      // miles: 35,
    },
    images: [],
  },
  {
    id: 19,
    name: "Rubicon Trail",
    geolocation: {
      lat: 38.92862,
      lon: -119.98487,
    },
    details: {
      description:
        "The Rubicon Trail, located in the Sierra Nevada Mountains of California, is an iconic off-road adventure route that traces its roots to the birthplace of recreational jeeping, where enthusiasts first tested the capabilities of their Willys Jeeps in the challenging and rugged terrain.",
      website: "https://www.edcgov.us/Government/Rubicon/pages/information_to_the_rubicon_trail.aspx",
      address: "9881 CA-89, South Lake Tahoe, CA 96150",
      annualVisitors: 0,
      // miles: 22,
    },
    images: [],
  },
  {
    id: 20,
    name: "Yellowstone National Park",
    geolocation: {
      lat: 44.42976,
      lon: -110.58466,
    },
    details: {
      description:
        "Yellowstone National Park, located primarily in Wyoming but extending into Montana and Idaho, is a pristine wilderness sanctuary renowned for its geothermal wonders, wildlife diversity, and iconic geysers like Old Faithful.",
      website: "https://www.nps.gov/yell/index.htm",
      address: "2 Officers Row Yellowstone National Park Headquarters Yellowstone National Park, WY 82190",
      annualVisitors: 3000000,
      // miles: 900,
    },
    images: [],
  },
  {
    id: 21,
    name: "Pictured Rocks National Lakeshore",
    geolocation: {
      lat: 46.56926,
      lon: -86.3185,
    },
    details: {
      description:
        "Pictured Rocks National Lakeshore, nestled along the Lake Superior shoreline in Michigan's Upper Peninsula, boasts striking sandstone cliffs, colorful rock formations, and pristine forests, creating a captivating and scenic natural masterpiece.",
      website: "https://www.uptravel.com/outdoors-recreation/national-state-parks/pictured-rocks-national-lakeshore/",
      address: "1505 Sand Point Road, Munising, MI 49862",
      annualVisitors: 1200000,
      // miles: 42,
    },
    images: [],
  },
  {
    id: 22,
    name: "Great Smokey Mountains",
    geolocation: {
      lat: 35.61176,
      lon: -83.48954,
    },
    details: {
      description:
        "Great Smoky Mountains National Park, straddling the border of North Carolina and Tennessee, entices visitors with its misty, ancient forests, diverse wildlife, and the rolling blue-hued ridges of the Appalachian Mountains.",
      website: "https://www.nps.gov/grsm/index.htm",
      address: "107 Park Headquarters Road Gatlinburg, TN, 37738",
      annualVisitors: 14137812,
      // miles: 500,
    },
    images: [],
  },
  {
    id: 23,
    name: "Red Rock Canyon",
    geolocation: {
      lat: 36.13557,
      lon: -115.42724,
    },
    details: {
      description:
        "Red Rock Canyon, located just outside of Las Vegas, Nevada, showcases a striking desert landscape adorned with towering red sandstone formations, making it a haven for outdoor enthusiasts and rock climbing aficionados.",
      website: "https://www.redrockcanyonlv.org/",
      address: "1000 Scenic Loop Dr, Las Vegas, NV 89161",
      annualVisitors: 4000000,
      // miles: 13,
    },
    images: ["https://i.ibb.co/7KY0DZH/red-rock-canyon.jpg"],
  },
  {
    id: 24,
    name: "Crater Rim Trail",
    geolocation: {
      lat: 19.452,
      lon: -155.29201,
    },
    details: {
      description:
        "The Crater Rim Trail offers a mesmerizing journey around the summit of Kīlauea Volcano in Hawai'i Volcanoes National Park, providing unparalleled views of the volcanic landscapes and ever-changing terrain.",
      website: "https://www.nps.gov/havo/planyourvisit/hike_day_craterrim.htm",
      address: "National Park, 1 Crater Rim Drive, Volcano, HI 96785",
      annualVisitors: 15000,
      // miles: 21,
    },
    images: [],
  },
  {
    id: 25,
    name: "Starved Rock State Park",
    geolocation: {
      lat: 41.31976,
      lon: -88.99344,
    },
    details: {
      description:
        "Starved Rock State Park, nestled along the Illinois River, showcases towering sandstone canyons, seasonal waterfalls, and captivating hiking trails, offering a natural oasis in the heart of Illinois.",
      website: "https://www.starvedrocklodge.com/starved-rock-state-park/",
      address: "One Lodge Lane, Oglesby, IL 61348",
      annualVisitors: 2100000,
      // miles: 0,
    },
    // images: ["https://i.ibb.co/jM8MYVm/starved-rock.jpg, https://i.ibb.co/GVDX4vG/starved-rock2.jpg"],
    images: ["https://i.ibb.co/GVDX4vG/starved-rock2.jpg", "https://i.ibb.co/jM8MYVm/starved-rock.jpg"],
  },
  {
    id: 26,
    name: "Matthiessen State Park",
    geolocation: {
      lat: 41.29651,
      lon: -89.02388,
    },
    details: {
      description:
        "Matthiessen State Park, located adjacent to Starved Rock State Park in Illinois, enchants visitors with its stunning geological formations, lush woodlands, and cascading waterfalls, providing a serene and picturesque natural retreat.",
      website: "https://dnr.illinois.gov/parks/park.matthiessen.html",
      address: "2500 IL-178, Oglesby, IL 61348",
      annualVisitors: 3000000,
      // miles: 0,
    },
    images: ["https://i.ibb.co/KLr1qYN/matthiessen-state-park.jpg"],
  },
  {
    id: 27,
    name: "Ferne Clyffe State Park",
    geolocation: {
      lat: 37.52949,
      lon: -88.98284,
    },
    details: {
      description:
        "Ferne Clyffe State Park, situated in southern Illinois, captivates nature lovers with its tranquil forests, rugged bluffs, and a hidden gem of a waterfall, offering a peaceful outdoor haven.",
      website: "https://dnr.illinois.gov/parks/park.ferneclyffe.html",
      address: "90 Goreville Rd, Goreville, IL 62939",
      annualVisitors: 200000,
      // miles: 0,
    },
    images: ["https://i.ibb.co/YXYPccP/ferne-clyffe-state-park.jpg"],
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
