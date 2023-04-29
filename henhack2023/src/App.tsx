import React from "react";
import "./App.css";
import { HomeScreen } from "./components";
/**
 *
 */
type ScreenDisplay = {
  home: boolean;
  game: boolean;
};

function App(): JSX.Element {
  /**
   * Controls the displaying of the screen
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [displayScreen, setDisplayScreen] = React.useState<ScreenDisplay>({
    home: true,
    game: true,
  });

  return (
    <div className="App">
      <header className="App-header"></header>
      {displayScreen.home ? <HomeScreen /> : null}
    </div>
  )
};

export default App
