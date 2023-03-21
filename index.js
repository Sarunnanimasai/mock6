const recipes = document.getElementById("recipes");
const pageNo = document.getElementById("pageno");
const filter = document.getElementById("filter");

const appendRecipes = async () => {
  let mainData = await fetch("https://funny-lime-gopher.cyclic.app/recipes")
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
  for (let i = 1; i <= Math.ceil(mainData.length / 5); i++) {
    let btn = document.createElement("button");
    btn.innerHTML = i;
    btn.addEventListener("click", () => appendData(i));
    pageNo.append(btn);
  }
  const appendData = (page = 1) => {
    recipes.innerHTML = "";
    const perPage = mainData.slice(5 * (page - 1), 5 * page);
    perPage.map((el) => {
      const div = document.createElement("div");
      div.id = "recipeCard";
      const img = document.createElement("img");
      img.id = "image";
      img.src = el.image;
      const leftdiv = document.createElement("div");
      leftdiv.id = "leftdiv";
      leftdiv.append(img);
      const rightdiv = document.createElement("div");
      const category = document.createElement("h2");
      category.innerHTML = el.category;
      const hr = document.createElement("hr");
      const title = document.createElement("p");
      title.innerHTML = `Title : ${el.title}`;
      const desc = document.createElement("p");
      desc.innerHTML = `Description : ${el.description}`;

      const button = document.createElement("button");
      button.innerText = "View Recipe";
      button.id = "viewRecipe";
      button.onclick = function () {
        localStorage.setItem("recipeId", JSON.stringify(el.id));
        window.location.href = "./SingleRecipe/SingleRecipe.html";
      };
      rightdiv.append(category, hr, title, desc, button);
      div.append(leftdiv, rightdiv);
      recipes.append(div);
    });
  };
  filter.addEventListener("change", () => {
    recipes.innerHTML = "";
    mainData.map((el) => {
      if (filter.value === el.category) {
        console.log(filter.value);
        const div = document.createElement("div");
        div.id = "recipeCard";
        const img = document.createElement("img");
        img.id = "image";
        img.src = el.image;
        const leftdiv = document.createElement("div");
        leftdiv.id = "leftdiv";
        leftdiv.append(img);
        const rightdiv = document.createElement("div");
        const category = document.createElement("h2");
        category.innerHTML = el.category;
        const hr = document.createElement("hr");
        const title = document.createElement("p");
        title.innerHTML = `Title : ${el.title}`;
        const desc = document.createElement("p");
        desc.innerHTML = `Description : ${el.description}`;

        const button = document.createElement("button");
        button.innerText = "View Recipe";
        button.id = "viewRecipe";
        button.onclick = function () {
          localStorage.setItem("recipeId", JSON.stringify(el.id));
          window.location.href = "./SingleRecipe/SingleRecipe.html";
        };
        rightdiv.append(category, hr, title, desc, button);
        div.append(leftdiv, rightdiv);
        recipes.append(div);
      }
    });
  });
  appendData(1);
};

appendRecipes();
