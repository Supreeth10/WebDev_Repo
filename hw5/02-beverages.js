const url =
  "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic";

const addBookToDOM = (item) => {
  let element = document.createElement("div");
  let heading = document.createElement("p");
  let image = document.createElement("img");
  element.className = "figure";

  element.id = item.idDrink;
  image.src = item.strDrinkThumb;
  image.alt = `An Image of ${item.strDrink}`;
  heading.textContent = item.strDrink;

  image.style.height = "250px";
  image.style.width = "320px";
  element.style.margin = "5px";
  element.style.width = "340px";
  element.style.height = "350px";
  element.fontWeight = "bold";
  element.append(image);
  element.append(heading);

  app.append(element);
};

let app = document.querySelector("#results");
app.style.display = "flex";
app.style.flexWrap = "wrap";
app.style.flexDirection = "row";
app.style.justifyContent = "center";
const loading = document.querySelector("#loading");

const fetchData = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const arr = data.drinks.map((item) => addBookToDOM(item));
      console.log(data.drinks);
    })
    .catch((error) => {
      console.log(error);
      let li = document.createElement("div");
      li.textContent = `An error occured. Please try again.`;
      app.append(li);
    })
    .finally(() => {
      app.removeChild(loading);
    });
};

fetchData(url);
