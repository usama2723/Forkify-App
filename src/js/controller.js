const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// NEW API URL (instead of the one shown in the video)
// https://forkify-api.jonas.io

///////////////////////////////////////

const showRecipe = async function () {
  try {
    const response = await fetch('https://forkify-api.jonas.io/api/v2/recipes/5ed6604591c37cdc054bc886');
    const data = await response.json();

    if (!response.ok) throw new error(`${data.message} (${response.status})`)
    console.log(response, data);

    let { recipe } = data.data
    recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredints: recipe.ingredints,
    }
    console.log(recipe);


    const markup = `
    
    `

  }
  catch (error) {
    alert(error)
  }
}
showRecipe();