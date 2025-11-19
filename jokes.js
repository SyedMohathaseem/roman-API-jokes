import jokes from './jokes.json';

export function getRandomJoke() {
  const index = Math.floor(Math.random() * jokes.length);
  return jokes[index].joke;
}

// Optional: API style function
export function getAllJokes() {
  return jokes;
}
