let top3 = [
    "The Colosseum",
    "Trevi Fountain",
    "The Vatican City"
];

function showItinerary(place1, place2, place3) {
    console.log("Visit " + place1);
    console.log("then visit " + place2);
    console.log("and finish the visit to " + place3);
}

// showItinerary(top3[0], top3[1], top3[2]);
showItinerary(...top3);