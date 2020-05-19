import React, { useEffect, useState } from 'react';
import { Game } from '@bghoard/api-interfaces';

export const App = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch('/api/game')
      .then((r) => r.json())
      .then(setGames);
  }, []);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Board Game Hoard: Review</h1>
        <img
          width="450"
          src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png"
          alt="nx logo"
        />
      </div>
      <div>
        <ul>
          {games.map((game, index) => {
            return <li key={index}>{game.name}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default App;
