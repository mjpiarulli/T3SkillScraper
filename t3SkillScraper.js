(function(){
    // set requirements
const requiredMinmatarStrategicCruiserLevel = 4;

const requiredMinmatarOffensiveSystems = 5;
const requiredMinmatarCoreSystems = 5;
const requiredMinmatarPropulsionSystems = 4;
const requiredMinmatarDefensiveSystems = 1;

const requiredCapacitorManagement = 5;
const requiredCapacitorSystemsOperation = 5;
const requiredCpuManagement = 5;
const requiredHullUpgrades = 4;
const requiredPowerGridManagement = 5;
const requiredShieldEmissionSystems = 5;
const requiredThermodynamics = 4;
const requiredNaniteInterfacing = 4;

const requiredNavigation = 5;
const requiredAccelerationControl = 4;
const requiredAfterburner = 4;
const requiredEvasiveManeuvering = 4;
const requiredFuelConservation = 4;

const requiredShieldManagement = 4;
const requiredShieldUpgrades = 4;
const requiredTacticalShieldManipulation = 4;

const requiredAdvancedTargetManagement = 3;


// find player levels
var minmatarStrategicCruiserLevel = $("td:contains('Minmatar Strategic Cruiser /')").text().trim().replace(/.*Level: (\d).*/, "$1");

var minmatarOffensiveSystems = $("td:contains('Minmatar Offensive Systems /')").text().trim().replace(/.*Level: (\d).*/, "$1");
var minmatarCoreSystems = $("td:contains('Minmatar Core Systems /')").text().trim().replace(/.*Level: (\d).*/, "$1");
var minmatarPropulsionSystems = $("td:contains('Minmatar Propulsion Systems /')").text().trim().replace(/.*Level: (\d).*/, "$1");
var minmatarDefensiveSystems =  $("td:contains('Minmatar Defensive Systems /')").text().trim().replace(/.*Level: (\d).*/, "$1");

var capacitorManagement = $("td:contains('Capacitor Management /')").text().trim().replace(/.*Level: (\d).*/, "$1");
var capacitorSystemsOperation = $("td:contains('Capacitor Systems Operation /')").text().trim().replace(/.*Level: (\d).*/, "$1");
var cpuManagement = $("td:contains('CPU Management /')").text().trim().replace(/.*Level: (\d).*/, "$1");
var hullUpgrades = $("td:contains('Hull Upgrades /')").text().trim().replace(/.*Level: (\d).*/, "$1");
var powerGridManagement = $("td:contains('Power Grid Management /')").text().trim().replace(/.*Level: (\d).*/, "$1");
var shieldEmissionSystems = $("td:contains('Shield Emission Systems / Rank 2')").text().trim().replace(/.*Level: (\d).*/, "$1");
var thermodynamics = $("td:contains('Thermodynamics /')").text().trim().replace(/.*Level: (\d).*/, "$1");
var naniteInterfacing = $("td:contains('Nanite Interfacing /')").text().trim().replace(/.*Level: (\d).*/, "$1");

var navigation = $("h4:contains('Navigation')").next().find("td:contains('Navigation / Rank 1')").text().trim().replace(/.*Level: (\d).*/, "$1");
var accelerationControl = $("td:contains('Acceleration Control /')").text().trim().replace(/.*Level: (\d).*/, "$1");
var afterburner =  $("td:contains('Afterburner /')").text().trim().replace(/.*Level: (\d).*/, "$1");
var evasiveManeuvering = $("td:contains('Evasive Maneuvering /')").text().trim().replace(/.*Level: (\d).*/, "$1");
var fuelConservation = $("td:contains('Fuel Conservation / Rank 2')").text().trim().replace(/.*Level: (\d).*/, "$1");

var shieldManagement = $("td:contains('Shield Management / Rank 3')").text().trim().replace(/.*Level: (\d).*/, "$1");
var shieldUpgrades = $("td:contains('Shield Upgrades / Rank 2')").text().trim().replace(/.*Level: (\d).*/, "$1");
var tacticalShieldManipulation = $("td:contains('Tactical Shield Manipulation / Rank 4')").text().trim().replace(/.*Level: (\d).*/, "$1");

var advancedTargetManagement = $("td:contains('Advanced Target Management /')").text().trim().replace(/.*Level: (\d).*/, "$1");

// output
if(requiredMinmatarStrategicCruiserLevel > minmatarStrategicCruiserLevel)
    console.log("Minmatar Strategic Cruiser: " + minmatarStrategicCruiserLevel + "/" + requiredMinmatarStrategicCruiserLevel);
if(requiredMinmatarOffensiveSystems > minmatarOffensiveSystems)
    console.log("Minmatar Offensive Systems: " + minmatarOffensiveSystems + "/" + requiredMinmatarOffensiveSystems);
if(requiredMinmatarCoreSystems > minmatarCoreSystems)    
    console.log("Minmatar Core Systems: " + minmatarCoreSystems + "/" + requiredMinmatarCoreSystems);
if(requiredMinmatarPropulsionSystems > minmatarPropulsionSystems)
    console.log("Minmatar Propulsion Systems: " + minmatarPropulsionSystems + "/" + requiredMinmatarPropulsionSystems);
if(requiredMinmatarPropulsionSystems > minmatarPropulsionSystems)
    console.log("Minmatar Defensive Systems: " + minmatarDefensiveSystems + "/" + requiredMinmatarPropulsionSystems);

if(requiredCapacitorManagement > capacitorManagement)
    console.log("Capacitor Management: " + capacitorManagement + "/" + requiredCapacitorManagement);
if(requiredCapacitorSystemsOperation > capacitorSystemsOperation)
    console.log("Capacitor Systems Operation: " + capacitorSystemsOperation + "/" + requiredCapacitorSystemsOperation);
if(requiredCpuManagement > cpuManagement)
    console.log("CPU Management: " + cpuManagement + "/" + requiredCpuManagement);
if(requiredHullUpgrades > hullUpgrades)
    console.log("Hull Upgrades: " + hullUpgrades + "/" + requiredHullUpgrades);
if(requiredPowerGridManagement > powerGridManagement)
    console.log("Power Grid Management: " + powerGridManagement + "/" + requiredPowerGridManagement);
if(requiredShieldEmissionSystems > shieldEmissionSystems)
    console.log("Shield Emission Systems: " + shieldEmissionSystems + "/" + requiredShieldEmissionSystems);
if(requiredThermodynamics > thermodynamics)
    console.log("Thermodynamics: " + thermodynamics + "/" + requiredThermodynamics);
if(requiredNaniteInterfacing > naniteInterfacing)
    console.log("Nanite Interfacing: " + naniteInterfacing + "/" + requiredNaniteInterfacing);

if(requiredNavigation > navigation)
    console.log("Navigation: " + navigation + "/" + requiredNavigation);
if(requiredAccelerationControl > accelerationControl)
    console.log("Acceleration Control: " + accelerationControl + "/" + requiredAccelerationControl);
if(requiredAfterburner > afterburner)
    console.log("Afterburner: " + afterburner + "/" + requiredAfterburner);
if(requiredEvasiveManeuvering > evasiveManeuvering)
    console.log("Evasive Maneuvering: " + evasiveManeuvering + "/" + requiredEvasiveManeuvering);
if(requiredFuelConservation > fuelConservation)
    console.log("Fuel Conservation: " + fuelConservation + "/" + requiredFuelConservation);

if(requiredShieldManagement > shieldManagement)
    console.log("Shield Management: " + shieldManagement + "/" + requiredShieldManagement);
if(requiredShieldUpgrades > shieldUpgrades)
    console.log("Shield Upgrades: " + shieldUpgrades + "/" + requiredShieldUpgrades);
if(requiredTacticalShieldManipulation > tacticalShieldManipulation)
    console.log("Tactical Shield Manipulation: " + tacticalShieldManipulation + "/" + requiredTacticalShieldManipulation);

if(requiredAdvancedTargetManagement > advancedTargetManagement)
console.log("Advanced Target Management: " + advancedTargetManagement + "/" + requiredAdvancedTargetManagement);
}
)();