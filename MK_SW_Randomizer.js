const widget = new ListWidget();

// a const list of every map from Mario Kart 8 Deluxe and the cups they belong to including the DLC maps and their weights in RNG
const maplist = [
    {
        name: "Mario Circuit",
        cup: "Mushroom Cup",
        weight: 1
    },
    {
        name: "Toad Harbor",
        cup: "Mushroom Cup",
        weight: 1
    },
    {
        name: "Twisted Mansion",
        cup: "Mushroom Cup",
        weight: 1
    },
    {
        name: "Shy Guy Falls",
        cup: "Mushroom Cup",
        weight: 1
    },
    {
        name: "Sunshine Airport",
        cup: "Flower Cup",
        weight: 1
    },
    {
        name: "Dolphin Shoals",
        cup: "Flower Cup",
        weight: 1
    },
    {
        name: "Electrodrome",
        cup: "Flower Cup",
        weight: 1
    },
    {
        name: "Mount Wario",
        cup: "Flower Cup",
        weight: 1
    },
    {
        name: "Cloudtop Cruise",
        cup: "Star Cup",
        weight: 1
    },
    {
        name: "Bone-Dry Dunes",
        cup: "Star Cup",
        weight: 1
    },
    {
        name: "Bowser's Castle",
        cup: "Star Cup",
        weight: 1
    },
    {
        name: "Rainbow Road",
        cup: "Star Cup",
        weight: 1
    },
    {
        name: "Mario Kart Stadium",
        cup: "Special Cup",
        weight: 1
    },
    {
        name: "Water Park",
        cup: "Special Cup",
        weight: 1
    },
    {
        name: "Sweet Sweet Canyon",
        cup: "Special Cup",
        weight: 1
    },
    {
        name: "Thwomp Ruins",
        cup: "Special Cup",
        weight: 1
    },
    {
        name: "Mario Circuit",
        cup: "Egg Cup",
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
        cup: "Crossing Cup",
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
        name: "Neo Bowser City",
        cup: "Shell Cup",
        weight: 1
    },
    {
        name: "Ribbon Road",
        cup: "Shell Cup",
        weight: 1
    },
    {
        name: "Super Bell Subway",
        cup: "Shell Cup",
        weight: 1
    },
    {
        name: "Big Blue",
        cup: "Shell Cup",
        weight: 1
    },
    {
        name: "Animal Crossing",
        cup: "Banana Cup",
        weight: 1
    },
    {
        name: "Cheep Cheep Beach",
        cup: "Banana Cup",
        weight: 1
    },
    {
        name: "Donut Plains 3",
        cup: "Banana Cup",
        weight: 1
    },
    {
        name: "Toad's Turnpike",
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
        name: "Wario Stadium",
        cup: "Triforce Cup",
        weight: 1
    },
    {
        name: "GCN Rainbow Road",
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
        name: "Dragon Driftway",
        cup: "Bell Cup",
        weight: 1
    },
    {
        name: "Mute City",
        cup: "Bell Cup",
        weight: 1
    },
    {
        name: "Wario Stadium",
        cup: "Bell Cup",
        weight: 1
    },
    {
        name: "Animal Crossing",
        cup: "Bell Cup",
        weight: 1
    },
    {
        name: "Baby Park",
        cup: "Golden Dash Cup",
        weight: 1
    },
    {
        name: "Cheese Land",
        cup: "Golden Dash Cup",
        weight: 1
    },
    {
        name: "Wild Woods",
        cup: "Golden Dash Cup",
        weight: 1
    },
    {
        name: "Animal Crossing",
        cup: "Golden Dash Cup",
        weight: 1
    },
    {
        name: "Neo Bowser City",
        cup: "Lucky Cat Cup",
        weight: 1
    },
    {
        name: "Ribbon Road",
        cup: "Lucky Cat Cup",
        weight: 1
    },
    {
        name: "Super Bell Subway",
        cup: "Lucky Cat Cup",
        weight: 1
    },
    {
        name: "Big Blue",
        cup: "Lucky Cat Cup",
        weight: 1
    },
    {
        name: "Toad Circuit",
        cup: "Turnip Cup",
        weight: 1
    },
    {
        name: "Mario Circuit",
        cup: "Turnip Cup",
        weight: 1
    },
    {
        name: "Rock Rock Mountain",
        cup: "Turnip Cup",
        weight: 1
    },
    {
        name: "Piranha Plant Pipeway",
        cup: "Turnip Cup",
        weight: 1
    },
    {
        name: "Airship Fortress",
        cup: "Propeller Cup",
        weight: 1
    },
    {
        name: "Water Park",
        cup: "Propeller Cup",
        weight: 1
    },
    {
        name: "Sweet Sweet Canyon",
        cup: "Propeller Cup",
        weight: 1
    },
    {
        name: "Thwomp Ruins",
        cup: "Propeller Cup",
        weight: 1
    },
    {
        name: "Mario Circuit",
        cup: "Rock Cup",
        weight: 1
    },
    {
        name: "Cheep Cheep Beach",
        cup: "Rock Cup",
        weight: 1
    },
    {
        name: "Toad Harbor",
        cup: "Rock Cup",
        weight: 1
    },
    {
        name: "Twisted Mansion",
        cup: "Rock Cup",
        weight: 1
    },
    {
        name: "Sunshine Airport",
        cup: "Moon Cup",
        weight: 1
    },
    {
        name: "Electrodrome",
        cup: "Moon Cup",
        weight: 1
    },
    {
        name: "Mount Wario",
        cup: "Moon Cup",
        weight: 1
    },
    {
        name: "Cloudtop Cruise",
        cup: "Moon Cup",
        weight: 1
    },
    {
        name: "Wii Moo Moo Meadows",
        cup: "Fruit Cup",
        weight: 1
    },
    {
        name: "GBA Mario Circuit",
        cup: "Fruit Cup",
        weight: 1
    },
    {
        name: "DS Cheep Cheep Beach",
        cup: "Fruit Cup",
        weight: 1
    },
    {
        name: "N64 Toad's Turnpike",
        cup: "Fruit Cup",
        weight: 1
    },
    {
        name: "DS Tick-Tock Clock",
        cup: "Boomerang Cup",
        weight: 1
    },
    {
        name: "3DS Piranha Plant Slide",
        cup: "Boomerang Cup",
        weight: 1
    },
    {
        name: "Wii Grumble Volcano",
        cup: "Boomerang Cup",
        weight: 1
    },
    {
        name: "N64 Rainbow Road",
        cup: "Boomerang Cup",
        weight: 1
    },
    {
        name: "Daisy Cruiser",
        cup: "Feather Cup",
        weight: 1
    },
    {
        name: "Moonview Highway",
        cup: "Feather Cup",
        weight: 1
    },
    {
        name: "Squeaky Clean Sprint",
        cup: "Feather Cup",
        weight: 1
    },
    {
        name: "Tour Los Angeles Laps",
        cup: "Cherry Cup",
        weight: 1
    },
    {
        name: "Sunset Wilds",
        cup: "Cherry Cup",
        weight: 1
    },
    {
        name: "Koopa Cape",
        cup: "Cherry Cup",
        weight: 1
    },
    {
        name: "Tour Vancouver Velocity",
        cup: "Cherry Cup",
        weight: 1
    },
    {
        name: "Tour Rome Avanti",
        cup: "Acorn Cup",
        weight: 1
    },
    {
        name: "DK Mountain",
        cup: "Acorn Cup",
        weight: 1
    },
    {
        name: "Daisy Circuit",
        cup: "Acorn Cup",
        weight: 1
    },
    {
        name: "Piranha Plant Cove",
        cup: "Acorn Cup",
        weight: 1
    },
    {
        name: "Tour Madrid Dive",
        cup: "Spiny Cup",
        weight: 1
    },
    {
        name: "Rosalina's Ice World",
        cup: "Spiny Cup",
        weight: 1
    },
    {
        name: "Bowser's Castle 3",
        cup: "Spiny Cup",
        weight: 1
    },
    {
        name: "Rainbow Road",
        cup: "Spiny Cup",
        weight: 1
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
    "Boomerang Cup" : Color.blue(),
    "Feather Cup" : new Color("#e85709"),
    "Cherry Cup" : new Color("#ff002f"),
    "Acorn Cup" : new Color("#ff5500"),
    "Spiny Cup" : new Color("#3477eb")
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