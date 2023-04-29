import React from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./App.css";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { HomeScreen } from "./components";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { WarmupScreen } from "./components/WarmupScreen/WarmupScreen";
import { DndProvider } from "react-dnd";
import { SuspectCard } from "./components/SuspectCard";

/**
 *
 */
export type ScreenDisplay = {
  home: boolean;
  game: boolean;
  warmup: boolean;
} & Record<string, boolean>;

const IMAGES = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

function App(): JSX.Element {
  /**
   * Controls the displaying of the screen
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [displayScreen, setDisplayScreen] = React.useState<ScreenDisplay>({
    home: true,
    game: false,
    warmup: false,
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const changeDisplay = React.useCallback(
    (key: keyof ScreenDisplay) => {
      const newDisplayScreen: ScreenDisplay = { ...displayScreen };
      Object.keys(newDisplayScreen).forEach((eachDisplayKey: string) => {
        if (eachDisplayKey === key) {
          newDisplayScreen[eachDisplayKey] = true;
        } else {
          newDisplayScreen[eachDisplayKey] = false;
        }
      });
      setDisplayScreen(newDisplayScreen);
    },
    [displayScreen]
  );

  return (
    <DndProvider backend={HTML5Backend}>
     <WarmupScreen></WarmupScreen>
    </DndProvider>
  );
}

export default App;
