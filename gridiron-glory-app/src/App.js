import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Embark on the Gridiron Odyssey: Explore the Grandeur of NFL and the Pulse of Stadium Energy!</h1>

      <div className="image-container">
        <img src="pexels-jeandaniel-francoeur-2570139.jpg" alt="" />
        <img src="pexels-pixabay-2207.jpg" alt="" />
      </div>

      <div className="clients">
        <p> Witness the Brilliance of the NFL: </p>
        <p className="highlight">The National Football League (NFL) is the arena where talent and tactics speak a unified
          language. The Super Bowl, the grand finale of the NFL, is recognized as one of the brightest sporting events
          where teams battle for the title of champions.
        </p>
        <div className="dashed-line"></div>
      </div>

      <div className="dashed-line">
        <div className="projects">
          <section>
            <h2>Dance of Positions:</h2>
            <p>In American football, each position is a unique dance on the field. From skillful quarterbacks to explosive
              wide receivers, every player takes the audience on a journey into the world of strategy and skill.</p>
          </section>

          <section>
            <h2>Beyond the Game:</h2>
            <p>Sport extends from the sidelines to the very summits—creating an atmosphere inspired by passionate fans and
              rich traditions. Narratives of epic matches and beloved fan traditions enrich the experience.</p>
          </section>

          <section>
            <h2>College Football:</h2>
            <p>On the collegiate and university stages, a true epic unfolds. The College Playoff has turned this sport into
              a cult phenomenon.</p>
          </section>

          <section>
            <h2>Join a World:</h2>
            <p>Join a world where every move is a strategic play, and every match is a show that leaves unforgettable
              impressions. American football is not just a game; it's a stylized drama that conquers hearts, turning sports
              into not just entertainment but also a part of a great cultural heritage.</p>
          </section>
        </div>
      </div>

      <footer>
        <p>Popularity: American football is one of the most popular sports in the United States. The Super Bowl is one of
          the most watched events of the television season.</p>
      </footer>
    </div>
  );
};

export default App;
