const authorizedDriver = (name, age) => {
  if (age >= 17) {
    console.log(`${name} est autorisé à conduire !`);
  } else {
    console.log(`${name} n'est pas autorisé à conduire !`);
  }
};

authorizedDriver("Mathieu", 22);
authorizedDriver("Léa", 15);
authorizedDriver("Jean", 17);