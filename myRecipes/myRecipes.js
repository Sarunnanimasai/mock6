// - Username (should be fetched by default from loggedin user and cannot be altered)
// - Title
// - Image
// - Short Description
// - Category (Select tag with Starter, Main Course and Dessert as options)
// - Ingredients - (should be an array of items, separated by commas)
// - Instructions -(should be a textarea input field)
// - Submit Button

const userName = JSON.parse(localStorage.getItem("username"));

const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const image = document.getElementById("img").value;
  const description = document.getElementById("desc").value;
  const category = document.getElementById("category").value;
  const ingredients = document.getElementById("ingred").value;
  const instructions = document.getElementById("instructions").value;
  const data = {
    userName,
    title,
    image,
    description,
    category,
    ingredients,
    instructions,
  };
  await fetch("http://localhost:3000/recipes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((er) => console.log(er));
  alert("data added");
});
