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
        weight: 2
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
        weight: 2
    },

    {
        name: "Tick-Tock Clock",
        cup: "Lightning Cup",
        weight: 2
    },
    {
        name: "Piranha Plant Slide",
        cup: "Lightning Cup",
        weight: 1
    },
    {
        name: "Grumble Volcano",
        cup: "Lightning Cup",
        weight: 2
    },
    {
        name: "Rainbow Road",
        cup: "Lightning Cup",
        weight: 1
    },

    {
        name: "Yoshi Circuit",
        cup: "Egg Cup",
        weight: 3
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
        weight: 3
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
        weight: 2
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
        weight: 3
    },
    {
        name: "Cheese Land",
        cup: "Crossing Cup",
        weight: 2
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
        weight: 4
    },
    {
        name: "Choco Mountain",
        cup: "Golden Dash Cup",
        weight: 2
    },
    {
        name: "Coconut Mall",
        cup: "Golden Dash Cup",
        weight: 2
    },

    {
        name: "Tokyo Blur",
        cup: "Lucky Cat Cup",
        weight: 0
    },
    {
        name: "Shroom Ridge",
        cup: "Lucky Cat Cup",
        weight: 2
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
        weight: 0
    },
    {
        name: "Mario Circuit 3",
        cup: "Turnip Cup",
        weight: 3
    },
    {
        name: "Kalimari Desert",
        cup: "Turnip Cup",
        weight: 2
    },
    {
        name: "Walugi Pinball",
        cup: "Turnip Cup",
        weight: 2
    },

    {
        name: "Syndey Sprint",
        cup: "Propeller Cup",
        weight: 0
    },
    {
        name: "Snow Land",
        cup: "Propeller Cup",
        weight: 2
    },
    {
        name: "Mushroom Gorge",
        cup: "Propeller Cup",
        weight: 3
    },
    {
        name: "Sky-High Sundae",
        cup: "Propeller Cup",
        weight: 0
    },

    {
        name: "London Loop",
        cup: "Rock Cup",
        weight: 0
    },
    {
        name: "Boo Lake",
        cup: "Rock Cup",
        weight: 2
    },
    {
        name: "Rock Rock Mountain",
        cup: "Rock Cup",
        weight: 2
    },
    {
        name: "Maple Treeway",
        cup: "Rock Cup",
        weight: 3
    },

    {
        name: "Berlin Byways",
        cup: "Moon Cup",
        weight: 0
    },
    {
        name: "Peach Gardens",
        cup: "Moon Cup",
        weight: 2
    },
    {
        name: "Merry Mountain",
        cup: "Moon Cup",
        weight: 2
    },
    {
        name: "Rainbow Road",
        cup: "Moon Cup",
        weight: 2
    },

    {
        name: "Amsterdam Drift",
        cup: "Fruit Cup",
        weight: 0
    },
    {
        name: "Riverside Park",
        cup: "Fruit Cup",
        weight: 2
    },
    {
        name: "DK Summit",
        cup: "Fruit Cup",
        weight: 10
    },
    {
        name: "Yoshi's Island",
        cup: "Fruit Cup",
        weight: 2
    }, 

    {
        name: "Bangkok Rush",
        cup: "Boomerang Cup",
        weight: 0
    },
    {
        name: "Mario Circuit",
        cup: "Boomerang Cup",
        weight: 5
    },
    {
        name: "Walugi Stadium",
        cup: "Boomerang Cup",
        weight: 10
    },
    {
        name: "Singapour Speedway",
        cup: "Boomerang Cup",
        weight: 0
    }

]

const cupColors = {
    "Mushroom Cup" : Color.red(),
    "Flower Cup" : new Color("#ff8c00"),
    "Star Cup" : new Color("#ffff00"),
    "Special Cup" : new Color("#ffc800"),
    "Egg Cup" : new Color("#27c924"),
    "Crossing Cup" : new Color("#27c924"),
    "Shell Cup" : new Color("#27c924"),
    "Banana Cup" : new Color("#eaff00"),
    "Leaf Cup" : new Color("#8b4513"),
    "Lightning Cup" : new Color("#ffff00"),
    "Triforce Cup" : new Color("#ffff00"),
    "Bell Cup" : new Color("#ffff00"),
    "Golden Dash Cup" : new Color("#ffff00"),
    "Lucky Cat Cup" : new Color("#b2460f"),
    "Turnip Cup" : Color.white(),
    "Propeller Cup" : new Color("#FF5733"),
    "Rock Cup" : new Color("#7f7f7f"),
    "Moon Cup" : new Color("#ffff00"),
    "Fruit Cup" : new Color("#ff8c00"),
    "Boomerang Cup" : Color.blue()
}




const cupDictionary = {
    "Mushroom" : Color.red(),
    "Flower" : Color.orange(),
    "Star" : Color.yellow(),
    "Special" : new Color("#ffc800"),
    "Banana" : new Color("#eaff00"),
    "Leaf" : Color.brown(),
    "Lightning" : Color.yellow()
}

let usedMaps = new Set()


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


for (j=0; j < input; j++) {
    let row = widget.addStack();
    row.layoutHorizontally();

    // Repeats until a map that hasn't been used is found //
    let randomMap = getRandomMap(mapList)
    while (usedMaps.has(randomMap["name"])) {
        randomMap = getRandomMap(mapList)
    }
    usedMaps.add(randomMap["name"])

    // let text = row.addText(`${randomMap["name"]} (${randomMap["cup"]}) ${i}`);
    let text = row.addText(`${randomMap["name"]} (${randomMap["cup"]})`);
    text.font = Font.boldSystemFont(20);
    text.minimumScaleFactor = 0.5
    text.textColor = randomMap["cup"] in cupColors ? cupColors[randomMap["cup"]] : Color.white()
    text.shadowColor = Color.white()
    text.shadowRadius = 0.2
}

Script.setWidget(widget);
Script.complete();

// for preview
widget.presentLarge();