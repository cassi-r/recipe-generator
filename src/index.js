function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#ingredients", {
    strings: "ingredients listed here",
    autoStart: true,
    delay: 50,
    cursor: "",
  });
}

let recipeFormElement = document.querySelector("#recipe-form");
recipeFormElement.addEventListener("submit", generateRecipe);
