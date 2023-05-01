const widget = new ListWidget();

// a const list of every map from Mario Kart 8 Deluxe and the cups they belong to including the DLC maps and their weights in RNG
const mapList = [
    {
        name: "Mario Kart Stadium",
        cup: "Mushroom Cup",
        weight: 1
    },
    {
        name: "Water Park",
        cup: "Mushroom Cup",
        weight: 1
    },
    {
        name: "Sweet Sweet Canyon",
        cup: "Mushroom Cup",
        weight: 1
    },
    {
        name: "Thwomp Ruins",
        cup: "Mushroom Cup",
        weight: 1
    },

    {
        name: "Mario Circuit",
        cup: "Flower Cup",
        weight: 1
    },
    {
        name: "Toad Harbor",
        cup: "Flower Cup",
        weight: 1
    },
    {
        name: "Twisted Mansion",
        cup: "Flower Cup",
        weight: 1
    },
    {
        name: "Shy Guy Falls",
        cup: "Flower Cup",
        weight: 1
    },

    {
        name: "Sunshine Airport",
        cup: "Star Cup",
        weight: 1
    },
    {
        name: "Dolphin Shoals",
        cup: "Star Cup",
        weight: 1
    },
    {
        name: "Electrodrome",
        cup: "Star Cup",
        weight: 1
    },

    {
        name: "Mount Wario",
        cup: "Star Cup",
        weight: 1
    },
    {
        name: "Cloudtop Cruise",
        cup: "Special Cup",
        weight: 1
    },
    {
        name: "Bone-Dry Dunes",
        cup: "Special Cup",
        weight: 1
    },
    {
        name: "Bowser's Castle",
        cup: "Special Cup",
        weight: 1
    },
    {
        name: "Rainbow Road",
        cup: "Special Cup",
        weight: 1
    },

    {
        name: "Moo Moo Meadows",
        cup: "Shell Cup",
        weight: 1
    },
    {
        name: "Mario Circuit",
        cup: "Shell Cup",
        weight: 1
    },
    {
        name: "Cheep Cheep Beach",
        cup: "Shell Cup",
        weight: 1
    },
    {
        name: "Toad's Turnpike",
        cup: "Shell Cup",
        weight: 1
    },

    {
        name: "Dry Dry Desert",
        cup: "Banana Cup",
        weight: 1
    },
    {
        name: "Donut Plains 3",
        cup: "Banana Cup",
        weight: 1
    },
    {
        name: "Royal Raceway",
        cup: "Banana Cup",
        weight: 1
    },
    {
        name: "DK Jungle",
        cup: "Banana Cup",
        weight: 1
    },

    {
        name: "Wario Stadium",
        cup: "Leaf Cup",
        weight: 1
    },
    {
        name: "Sherbet Land",
        cup: "Leaf Cup",
        weight: 1
    },
    {
        name: "Music Park",
        cup: "Leaf Cup",
        weight: 1
    },
    {
        name: "Yoshi Valley",
        cup: "Leaf Cup",
        weight: 1
    },

    {
        name: "Tick-Tock Clock",
        cup: "Lightning Cup",
        weight: 1
    },
    {
        name: "Piranha Plant Slide",
        cup: "Lightning Cup",
        weight: 1
    },
    {
        name: "Grumble Volcano",
        cup: "Lightning Cup",
        weight: 1
    },
    {
        name: "Rainbow Road",
        cup: "Lightning Cup",
        weight: 1
    },

    {
        name: "Yoshi Circuit",
        cup: "Egg Cup",
        weight: 1
    },
    {
        name: "Excitebike Arena",
        cup: "Egg Cup",
        weight: 1
    },
    {
        name: "Dragon Driftway",
        cup: "Egg Cup",
        weight: 1
    },
    {
        name: "Mute City",
        cup: "Egg Cup",
        weight: 1
    },

    {
        name: "Wario's Gold Mine",
        cup: "Triforce Cup",
        weight: 1
    },
    {
        name: "Rainbow Road",
        cup: "Triforce Cup",
        weight: 1
    },
    {
        name: "Ice Ice Outpost",
        cup: "Triforce Cup",
        weight: 1
    },
    {
        name: "Hyrule Circuit",
        cup: "Triforce Cup",
        weight: 1
    },

    {
        name: "Neo Bowser City",
        cup: "Bell Cup",
        weight: 1
    },
    {
        name: "Ribbon Road",
        cup: "Bell Cup",
        weight: 1
    },
    {
        name: "Super Bell Subway",
        cup: "Bell Cup",
        weight: 1
    },
    {
        name: "Big Blue",
        cup: "Bell Cup",
        weight: 1
    },

    {
        name: "Baby Park",
        cup: "Crossing Cup",
        weight: 1
    },
    {
        name: "Cheese Land",
        cup: "Crossing Cup",
        weight: 1
    },
    {
        name: "Wild Woods",
        cup: "Crossing Cup",
        weight: 1
    },
    {
        name: "Animal Crossing",
        cup: "Crossing Cup",
        weight: 1
    },

    {
        name: "Paris Promenade",
        cup: "Golden Dash Cup",
        weight: 1
    },
    {
        name: "Toad Circuit",
        cup: "Golden Dash Cup",
        weight: 1
    },
    {
        name: "Choco Mountain",
        cup: "Golden Dash Cup",
        weight: 1
    },
    {
        name: "Coconut Mall",
        cup: "Golden Dash Cup",
        weight: 1
    },

    {
        name: "Tokyo Blur",
        cup: "Lucky Cat Cup",
        weight: 1
    },
    {
        name: "Shroom Ridge",
        cup: "Lucky Cat Cup",
        weight: 1
    },
    {
        name: "Sky Garden",
        cup: "Lucky Cat Cup",
        weight: 1
    },
    {
        name: "Ninja Hideaway",
        cup: "Lucky Cat Cup",
        weight: 1
    },

    {
        name: "New York Minute",
        cup: "Turnip Cup",
        weight: 1
    },
    {
        name: "Mario Circuit 3",
        cup: "Turnip Cup",
        weight: 1
    },
    {
        name: "Kalimari Desert",
        cup: "Turnip Cup",
        weight: 1
    },
    {
        name: "Walugi Pinball",
        cup: "Turnip Cup",
        weight: 1
    },

    {
        name: "Syndey Sprint",
        cup: "Propeller Cup",
        weight: 1
    },
    {
        name: "Snow Land",
        cup: "Propeller Cup",
        weight: 1
    },
    {
        name: "Mushroom Gorge",
        cup: "Propeller Cup",
        weight: 1
    },
    {
        name: "Sky-High Sundae",
        cup: "Propeller Cup",
        weight: 1
    },

    {
        name: "London Loop",
        cup: "Rock Cup",
        weight: 1
    },
    {
        name: "Boo Lake",
        cup: "Rock Cup",
        weight: 1
    },
    {
        name: "Rock Rock Mountain",
        cup: "Rock Cup",
        weight: 1
    },
    {
        name: "Maple Treeway",
        cup: "Rock Cup",
        weight: 1
    },

    {
        name: "Berlin Byways",
        cup: "Moon Cup",
        weight: 1
    },
    {
        name: "Peach Gardens",
        cup: "Moon Cup",
        weight: 1
    },
    {
        name: "Merry Mountain",
        cup: "Moon Cup",
        weight: 1
    },
    {
        name: "Rainbow Road",
        cup: "Moon Cup",
        weight: 1
    },

    {
        name: "Amsterdam Drift",
        cup: "Fruit Cup",
        weight: 1
    },
    {
        name: "Riverside Park",
        cup: "Fruit Cup",
        weight: 1
    },
    {
        name: "DK Summit",
        cup: "Fruit Cup",
        weight: 1
    },
    {
        name: "Yoshi's Island",
        cup: "Fruit Cup",
        weight: 1
    }, 

    {
        name: "Bangkok Rush",
        cup: "Boomerang Cup",
        weight: 1
    },
    {
        name: "Mario Circuit",
        cup: "Boomerang Cup",
        weight: 1
    },
    {
        name: "Walugi Stadium",
        cup: "Boomerang Cup",
        weight: 1
    },
    {
        name: "Singapour Speedway",
        cup: "Boomerang Cup",
        weight: 1
    }

]




const cupDictionary = {
    "Mushroom" : Color.red(),
    "Flower" : Color.orange(),
    "Star" : Color.yellow(),
    "Special" : new Color("#ffc800"),
    "Banana" : new Color("#eaff00"),
    "Leaf" : Color.brown(),
    "Lightning" : Color.yellow()
}

let usedMaps = new Array()


function getRandomInt(max){
    let randomizedInt = Math.floor(Math.random() * max)
    return randomizedInt
}

// Generates a random map from mapList and takes their weights into account //
function getRandomMap(mapList)
{
    let totalWeight = 0
    for (i=0; i<mapList.length; i++) {
        totalWeight += mapList[i]["weight"]
    }
    let randomNum = getRandomInt(totalWeight)
    let weightCounter = 0
    for (i=0; i<mapList.length; i++) {
        weightCounter += mapList[i]["weight"]
        if (randomNum < weightCounter) {
            return mapList[i]
        }
    }
}


// Sets a int input from the user //
    let textField = new Alert();
    textField.title = "How many races?";
    textField.addAction("OK");
    let numField = textField.addTextField("8");
    numField.setNumberPadKeyboard()
    await textField.present();
    let input = textField.textFieldValue(0);
///////////////////////////////////


for (i=0; i<parseInt(input, 10); i++) {
    let row = widget.addStack();
    row.layoutHorizontally();

    while(true){
        randomMap = getRandomMap(mapList)
        if(usedMaps.includes(randomMap) == false){
            usedMaps.push(`${randomMap["name"]} (${randomMap["cup"]})`)
            break
        }
    }
    let text = row.addText(randomMap);
    text.font = Font.boldSystemFont(20);
    text.minimumScaleFactor = 0.5
    text.textColor = Color.black()
    text.shadowColor = Color.white()
    text.shadowRadius = 0.2
}

Script.setWidget(widget);
Script.complete();

// for preview
widget.presentLarge();