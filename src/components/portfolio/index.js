import React from "react";
import { Container, Row, Col } from "reactstrap";
import Card from "../card";
import "./style.css";

const works = [
  {
    name: "Beautify",
    img: "images/gif3.gif",

    description:
      "Beautify is an appointment scheduling app that searches for services by category and allows users to book them. It also allows users to become a provider and add their own services that will be available for booking to other users.",
    link: "https://beautiffy.herokuapp.com/",
    message: "book with Beautify",
  },
  {
    name: "PinME",
    img: "images/site.gif",
    description:
      "PinME is a website that looks up events based on the type of genre the user picks. The website searches within a 100 mile radius of the user and results are limited to 10. The search results will also appear as pins on the Google Map below the results. Four Spotify playlists related to the genre searched will appear above the results.",
    link: "https://javascriptkitty.github.io/the-first-big-project/",
    message: "pin your music events!",
  },
  {
    name: "Shocktail",
    img: "images/shocktail.gif",
    description:
      "Shocktail is a website that queries for coctails by name or by user selected ingredients. It also has a 'shocktail me' button that displays a random coctail. Cocktails that are found are displayed in a 'card' contains an image of the cocktail, a list of its ingrediends and a recipe.",
    link: "https://beautiffy.herokuapp.com/",
    message: "make your cocktail",
  },
  {
    name: "CRYSTALL COLLECTOR",
    img: "images/gif2.gif",
    description:
      "There are 4 crystals displayed on the screen. For each round, the user will receive a new target number, and each crystal will be assigned a new value. The goal for the user is to click on different crystals so that the sum adds up to the target number for that round.",
    link: "https://javascriptkitty.github.io/Crystal_Collector_game/",
    message: "play",
  },
  {
    name: "RPG game",
    img: "images/gif1.gif",
    description:
      " When the game starts, the user chooses one of 4 characters to be his player and it will fight as that character for the rest of the game. The goal is to survive and defeat all of the remaining fighters. User loses the game if the character’s HP falls to zero or below.",
    link: "https://javascriptkitty.github.io/RPG_Game/",
    message: "play",
  },

  {
    name: "TRIVIA",
    img: "images/gif4.gif",
    description:
      "This trivia game shows only one question until the player answers it or the time runs out. After the player selects his answer, the game shows if it's correct or not",
    link: "https://javascriptkitty.github.io/TriviaGame/",
    message: "play",
  },
  {
    name: "Clicky game",
    img: "images/gif5.gif",
    description:
      "User is presented with 12 images. In order to achieve the highest possible score, they must click each image only once. If an image is clicked twice, the game resets.",
    link: "https://javascriptkitty.github.io/clicky_game/",
    message: "play",
  },

  {
    name: "HANGMAN",
    img: "images/gif6.gif",
    description:
      "A theme of this game is 'rock bands'. Computer randomly chooses one of the bands and users get 12 tries to guess it.",
    link: "https://javascriptkitty.github.io/Word-Guess/",
    message: "play",
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio">
      <Container>
        <a name="portfolio"></a>
        <h1>Portfolio</h1>
        <div className="cards">
          {works.map((work) => {
            return <Card key={work.name} data={work} />;
          })}
        </div>
      </Container>
    </section>
  );
};

export default Portfolio;
