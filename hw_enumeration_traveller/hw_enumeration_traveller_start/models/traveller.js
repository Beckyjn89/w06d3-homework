const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => {
    return journey.startLocation});
  };

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
    return journey.endLocation});
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  let found = this.journeys.filter((journey) => {
    return journey.transport === transport
  });
  return found
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  let found = this.journeys.filter((journey) => {
    return journey.distance >= minDistance
  });
  return found
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((sum, journey) => {
    return sum + journey.distance;
  }, 0)
};

Traveller.prototype.getUniqueModesOfTransport = function () {
    let allTransport = []

    this.journeys.filter((journey) => {
      if  (allTransport.includes(journey.transport) !== true) {allTransport.push(journey.transport)};
  });
  return allTransport
};


module.exports = Traveller;
