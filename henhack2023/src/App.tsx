import React from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./App.css";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { HomeScreen } from "./components";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300&family=Righteous&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossOrigin="anonymous"
        />
      </head>
      {displayScreen.home ? <WarmupScreen /> : null}
    </>
    </DndProvider>
  );
};

export default App;
