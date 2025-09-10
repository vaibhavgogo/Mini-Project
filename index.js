const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "4kqGcJx8uDXo3XIskcbzokAz7rN8nWJs3PL9Mcll";


const apiURL = "https://official-joke-api.appspot.com/random_joke";

async function getJoke() {
  try {
    jokeEl.innerText = "Updating...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";
    
    const response = await fetch(apiURL);
    
    const data = await response.json();

    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";

jokeEl.innerText = data.setup + "\n" + data.punchline;

  } catch (error) {
    jokeEl.innerText = "An error happened, try again later";
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";
    console.log(error);
  }
}

btnEl.addEventListener("click", getJoke);