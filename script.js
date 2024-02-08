function fTo(inputDegreeValue, conversionDegreeType) {
  let temp = '';

  switch (conversionDegreeType) {
      case 'F':
          temp = inputDegreeValue;
          break;
      case 'C':
          temp = (inputDegreeValue - 32) * (5 / 9);
          break;
      case 'K':
          temp = (inputDegreeValue + 459.67) * (5 / 9);
          break;
  }
  if (inputDegreeValue < -459.67) {
    document.getElementById("convertedDegree").textContent = "Lämpötila on alle absoluuttisen nollapisteen";
    return "";
  }
  return temp;
}

function cTo(inputDegreeValue, conversionDegreeType) {
  let temp = '';

  switch (conversionDegreeType) {
      case 'C':
          temp = inputDegreeValue;
          break;
      case 'F':
          temp = (inputDegreeValue * (9 / 5)) + 32;
          break;
      case 'K':
          temp = inputDegreeValue + 273.15;
          break;
  }
  if (inputDegreeValue < -273.15) {
    document.getElementById("convertedDegree").textContent = "Lämpötila on alle absoluuttisen nollapisteen";
    return "";
  }
  return temp;
}

function kTo(inputDegreeValue, conversionDegreeType) {
  let temp = '';

  switch (conversionDegreeType) {
      case 'K':
          temp = inputDegreeValue;
          break;
      case 'F':
          temp = (inputDegreeValue - 273.15) * (9 / 5) + 32;
          break;
      case 'C':
          temp = inputDegreeValue - 273.15;
          break;
  }
  if (inputDegreeValue < 0) {
    document.getElementById("convertedDegree").textContent = "Lämpötila on alle absoluuttisen nollapisteen";
    return "";
  }
  return temp;
}

document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();
  convertInputDegree();
});

function convertInputDegree() {
  let inputDegree = parseInt(document.getElementById('inputDegree').value);
  let selectInputDegreeType = document.getElementById('selectInputDegreeType').value;
  let conversionType = document.getElementById('selectConversionType').value;

  let resultValue = "";

  switch (selectInputDegreeType) {
    case "C":
      resultValue = cTo(inputDegree, conversionType);
      break;

    case "F":
      resultValue = fTo(inputDegree, conversionType);
      break;

    case "K":
      resultValue = kTo(inputDegree, conversionType);
      break;
  }

  // Check for correct input
  if (isNaN(inputDegree)) {
    document.getElementById('convertedDegree').textContent = '';
    return;
  }

  // Update the degree unit
  document.getElementById('convertedUnit').textContent = conversionType;

  // update the degree value
  if (conversionType === selectInputDegreeType) {
    document.getElementById('convertedDegree').textContent = inputDegree;
  } else {
    return document.getElementById('convertedDegree').textContent = resultValue.toFixed(2);
  }
}