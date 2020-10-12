var minmaterStrategicCruiserLevel = $("td:contains('Minmatar Strategic Cruiser /')").text().trim().replace(/.*Level: (\d).*/, "$1");
console.log(minmaterStrategicCruiserLevel);