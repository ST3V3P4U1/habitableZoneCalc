function calculateLuminosity() {
    const absMag = parseFloat(document.getElementById("abs-mag").value);
    const distance = parseFloat(document.getElementById("distance").value);
  
    // Calculate luminosity using the formula: luminosity = 10^(0.4 - 0.2 * absMag) * (distance^2)
    const luminosity = Math.pow(10, 0.4 - 0.2 * absMag) * Math.pow(distance, 2);
  
    const resultElement = document.getElementById("result");
    resultElement.textContent = `The luminosity of the star is approximately ${luminosity.toFixed(2)} solar luminosities.`;
  }

  function newTab() {
    window.open("habitat.html", "_blank");
  }