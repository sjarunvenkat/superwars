const PLAYERS = [
  "Spiderman",
  "Captain America",
  "Wonderwoman",
  "Popcorn",
  "Gemwoman",
  "Bolt",
  "Antwoman",
  "Mask",
  "Tiger",
  "Captain",
  "Catwoman",
  "Fish",
  "Hulk",
  "Ninja",
  "Black Cat",
  "Volverine",
  "Thor",
  "Slayer",
  "Vader",
  "Slingo",
];

// initialize players with image and strength
const initPlayers = (players) => {
  // Instead of forloop use Map method
  // Code here

  let detailedPlayers = players.map((name, index) => ({
    name: name,
    strength: getRandomStrength(),
    img: `images/super-${index + 1}.png`,
    type: index % 2 === 0 ? "hero" : "villain", // Alternating types
  }));

  return detailedPlayers;
};

// getting random strength
const getRandomStrength = () => {
  return Math.ceil(Math.random() * 100) + 1;
};

// Build player template
const buildPlayer = (player) => {
  return `
        <div class="player">
            <img src="${player.img}" alt="${player.name}">
            <div class="name">${player.name}</div>
            <div class="strength">${player.strength}</div>
        </div>
    `;
};

const buildPlayers = (players, type) => {
  // Instead of using for loop
  // Use chaining of Array methods - filter, map and join
  // Type your code here
  const filteredPlayers = players.filter((player) => player.type === type);
  return filteredPlayers
    .map(buildPlayer) // Transform players to HTML
    .join(""); // Join HTML snippets into one string
};

// Display players in HTML
const viewPlayers = (players) => {
  document.getElementById("heroes").innerHTML = buildPlayers(players, "hero");
  document.getElementById("villains").innerHTML = buildPlayers(
    players,
    "villain"
  );
};

window.onload = () => {
  viewPlayers(initPlayers(PLAYERS));
};
