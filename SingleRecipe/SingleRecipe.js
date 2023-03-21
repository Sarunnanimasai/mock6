let id = JSON.parse(localStorage.getItem("recipeId"));
let Div = document.getElementById("Div");
const fetchRec = async () => {
  const data = await fetch(`https://funny-lime-gopher.cyclic.app/recipes/${id}`)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
  console.log(data);
  const title = document.createElement("h1");
  title.innerText = data.title;
  const image = document.createElement("img");
  image.src = data.image;
  image.id = "image";
  const desc = document.createElement("h3");
  desc.innerText = "Description :-";
  const description = document.createElement("p");
  description.innerText = data.description;
  const cat = document.createElement("h3");
  cat.innerText = "Category :-";
  const category = document.createElement("p");
  category.innerText = data.category;
  const ingr = document.createElement("h3");
  ingr.innerText = "Ingredients :-";
  const ingredients = document.createElement("p");
  ingredients.innerText = data.ingredients;
  const instr = document.createElement("h3");
  instr.innerText = "Instructions :-";
  const instructions = document.createElement("p");
  instructions.innerText = data.instructions;
  Div.append(
    title,
    image,
    desc,
    description,
    cat,
    category,
    ingr,
    ingredients,
    instr,
    instructions
  );
};
fetchRec();
