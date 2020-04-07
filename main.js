/********************
 * HELPER FUNCTIONS *
 ********************/

const newDinosaur = function(dinosaur = {species: '', period: '', carnivore: '', extinct: false}) {
  return {
    species: dinosaur.species,
    period: dinosaur.period,
    carnivore: dinosaur.carnivore,
    extinct: dinosaur.extinct
  };
}

const makeDino = function(species, period, carnivore, extinct = false) {
  return {
    species: species,
    period: period,
    carnivore: carnivore,
    extinct: extinct
  };
}

const makeSingular = function(dinosaur) {
  const dino = newDinosaur(dinosaur);

  if(dino.species.match(/us$/)) {
    dino.species = dino.species.slice(0, -2);
  }

  return dino;
}

const truncateSpecies = function(dinosaur) {
  const dino = newDinosaur(dinosaur);

  dino.species = dino.species.slice(0,7);

  return dino;
}

const makeExtinct = function(dinosaur) {
  const dino = newDinosaur(dinosaur);

  dino.extinct = true;

  return dino;
}

const isCarnivore = function(dinosaur) {
  return dinosaur.carnivore;
}

const isExtinct = function(dinosaur) {
  return dinosaur.extinct;
}

const isTriassic = function(dinosaur) {
  return dinosaur.period == "Triassic";
}

const isJurassic = function(dinosaur) {
  return dinosaur.period == "Jurassic";
}

const isCretaceous = function(dinosaur) {
  return dinosaur.period == "Cretaceous";
}

const isFirstAlphabeticallyBySpecies = function(dino1, dino2) {
  return dino1.species - dino2.species;
}


/***********************
 * ITERATION FUNCTIONS *
 **********************/



/*********************************
 * TEST SETUP CODE - DON'T TOUCH!*
 ********************************/

  if (typeof makeDino === 'undefined') {
    makeDino = undefined
  }

  if (typeof makeSingular === 'undefined') {
    makeSingular = undefined
  }

  if (typeof truncateSpecies === 'undefined') {
    truncateSpecies = undefined
  }

  if (typeof makeExtinct === 'undefined') {
    makeExtinct = undefined
  }

  if (typeof isCarnivore === 'undefined') {
    isCarnivore = undefined
  }

  if (typeof isExtinct === 'undefined') {
    isExtinct = undefined
  }

  if (typeof isTriassic === 'undefined') {
    isTriassic = undefined
  }

  if (typeof isJurassic === 'undefined') {
    isJurassic = undefined
  }

  if (typeof isCretaceous === 'undefined') {
    isCretaceous = undefined
  }

  if (typeof isFirstAlphabeticallyBySpecies === 'undefined') {
    isFirstAlphabeticallyBySpecies = undefined
  }

  if (typeof extinctIsLast === 'undefined') {
    extinctIsLast = undefined
  }

  if (typeof carnivoreIsFirst === 'undefined') {
    carnivoreIsFirst = undefined
  }

  if (typeof isInPeriodOrder === 'undefined') {
    isInPeriodOrder = undefined
  }

  if (typeof singularizeDinos === 'undefined') {
    singularizeDinos = undefined
  }

  if (typeof truncateDinos === 'undefined') {
    truncateDinos = undefined
  }

  if (typeof makeAllExtinct === 'undefined') {
    makeAllExtinct = undefined
  }

  if (typeof carnivoresOnly === 'undefined') {
    carnivoresOnly = undefined
  }

  if (typeof herbivoresOnly === 'undefined') {
    herbivoresOnly = undefined
  }

  if (typeof extinctOnly === 'undefined') {
    extinctOnly = undefined
  }

  if (typeof notExtinct === 'undefined') {
    notExtinct = undefined
  }

  if (typeof triassicOnly === 'undefined') {
    triassicOnly = undefined
  }

  if (typeof notTriassic === 'undefined') {
    notTriassic = undefined
  }

  if (typeof bySpecies === 'undefined') {
    bySpecies = undefined
  }

  if (typeof byExtinctLast === 'undefined') {
    byExtinctLast = undefined
  }

  if (typeof byCarnivoresFirst === 'undefined') {
    byCarnivoresFirst = undefined
  }

  if (typeof byPeriod === 'undefined') {
    byPeriod = undefined
  }



module.exports = {
  makeDino,
  makeSingular,
  truncateSpecies,
  makeExtinct,
  isCarnivore,
  isExtinct,
  isTriassic,
  isJurassic,
  isCretaceous,
  isFirstAlphabeticallyBySpecies,
  extinctIsLast,
  carnivoreIsFirst,
  isInPeriodOrder,
  singularizeDinos,
  truncateDinos,
  makeAllExtinct,
  carnivoresOnly,
  herbivoresOnly,
  extinctOnly,
  notExtinct,
  triassicOnly,
  notTriassic,
  bySpecies,
  byExtinctLast,
  byCarnivoresFirst,
  byPeriod,
}
