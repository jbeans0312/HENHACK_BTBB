import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { HomeScreen} from "./components";
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
