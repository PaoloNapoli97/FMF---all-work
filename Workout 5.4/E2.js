function MapSetToArray() {
    let map = new Map();
    map.set("Deh", "Pefforza");
    map.set("Deh", "Pefforza");
    map.set("Pefforza", "Deh");

    let set = new Set(map.values())

    let array = Array.from(set);

    console.log(array);
}

MapSetToArray();