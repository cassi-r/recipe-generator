function displayRecipe(response) {
  new Typewriter("#ingredients", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();
  let userInput = document.querySelector("#user-input");
  let apiKey = "eb2dt3eff4e3bdadf1b2o03ae3a5430d";
  let prompt = `User instructions: generate a recipe using ${userInput.value}`;
  let context = `You are a world renowned chef who wants to create a recipe with the ${userInput.value}. The recipe should be easy to follow and not too time consuming. create a title, and list the ingredients under the word ingredients. Seperate each line with <br>.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#ingredients");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="generating">⏳ Generating a recipe with ${userInput.value}</div>`;

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-form");
recipeFormElement.addEventListener("submit", generateRecipe);
