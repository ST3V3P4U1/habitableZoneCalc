function calculateHZ() {
    const luminosity = parseFloat(document.getElementById("luminosity").value);
    if (isNaN(luminosity)) {
      alert("Please enter a valid number for luminosity.");
      return;
    }
  
    const innerBoundary = Math.sqrt(luminosity / 1) * 0.95;
    const outerBoundary = Math.sqrt(luminosity / 1) * 1.37;
  
    const resultText = `The estimated habitable zone boundaries for a star with ${luminosity} solar luminosities are:
      - Inner boundary: ${innerBoundary.toFixed(2)} AU
      - Outer boundary: ${outerBoundary.toFixed(2)} AU`;
  
    document.getElementById("result").innerHTML = resultText;
  }
  