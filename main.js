const cities = [
    {
      city: "London",
      code: "UK",
      population: 11504632,
      foodRanking: 4
    },
    {
      city: "Manchester",
      code: "UK",
      population: 4280424,
      foodRanking: 5
    },
    {
      city: "Paris",
      code: "FR",
      population: 10830024,
      foodRanking: 9
    },
    {
      city: "Nice",
      code: "FR",
      population: 4250024,
      foodRanking: 10
    },
    {
      city: "Berlin",
      code: "DE",
      population: 8250024,
      foodRanking: 8
    },
    {
      city: "Munich",
      code: "DE",
      population: 5250050,
      foodRanking: 6
    }
  ];
  
  // Uppgift 1a + 1b
  cities.forEach((obj) => {
    let cityItem = document.createElement("li");
    cityItem.innerText = obj.city;
  
    //Logik för att färga texten baserat på land
  
    // if (obj.code === "FR") {
    //   cityItem.style.color = "blue";
    // } else if (obj.code === "UK") {
    //   cityItem.style.color = "red";
    // } else {
    //   cityItem.style.color = "black";
    // }
    switch (obj.code) {
      case "FR":
        cityItem.style.color = "blue";
        break;
      case "UK":
        cityItem.style.color = "red";
        break;
      default:
        break;
    }
    document.querySelector("#allCities").appendChild(cityItem);
  });
  
  //Uppgift 2a+2b
  
  let goodFoodCities = cities.filter((city) => city.foodRanking >= 8);
  
  goodFoodCities.sort((obj, prevObj) => {
    return prevObj.foodRanking - obj.foodRanking;
  });
  
  goodFoodCities.forEach((city) => {
    let foodCity = document.createElement("li");
    foodCity.innerHTML = `${city.city} - <strong>Food rating: ${city.foodRanking}/10</strong>`;
    document.querySelector("#citiesForFoodies").appendChild(foodCity);
  });
  
  let numArray = [2, 7, 10, 4, 7, 8, 15];
  
  numArray.sort((a, b) => {
    return a - b;
  });
  
  console.log(numArray);
  
  //Uppgift 3
  
  let citiesByPopulation = cities;
  citiesByPopulation.push({ city: "Stockholm", population: 1300000 });
  citiesByPopulation.sort((a, b) => {
    return b.population - a.population;
  });
  
  citiesByPopulation.forEach((obj) => {
    let cityItem = document.createElement("li");
    cityItem.innerHTML = `${obj.city} <strong>Population: ${obj.population}</strong>`;
    document.querySelector("#sortedByPopulation").appendChild(cityItem);
  });
  