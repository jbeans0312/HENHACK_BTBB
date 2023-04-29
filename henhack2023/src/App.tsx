import React from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./App.css";
import { HomeScreen } from "./components";
import { WarmupScreen } from "./components/WarmupScreen/WarmupScreen";
import { DndProvider } from 'react-dnd';
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
    <DndProvider backend={HTML5Backend}>
       <div className="App">
      <header className="App-header"></header>
      {displayScreen.home ? <HomeScreen /> : null}
        <WarmupScreen></WarmupScreen>
      </div>
    </DndProvider>
  );
};

export default App
