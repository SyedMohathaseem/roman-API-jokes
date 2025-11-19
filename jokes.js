// /netlify/functions/joke.js
const jokes = [
  "Teacher: Tum itni der se kyu so rahe ho? Student: Dream mein exam de raha tha.",
  "Pati: Tum mujhe samajhti nahi? Patni: Samajh rahi hoon, samajh rahi hoon… magar ignore kar rahi hoon.",
  "Doctor: Smoking chhod do. Patient: Chhodo ge? Kal se ya abhi se?",
  // add 1000+ Roman Urdu jokes here
];

export async function handler(event, context) {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  return {
    statusCode: 200,
    body: JSON.stringify({ joke: jokes[randomIndex] }),
  };
}
