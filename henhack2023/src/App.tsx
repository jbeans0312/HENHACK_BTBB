import React from "react";
import "./App.css";

import { HomeScreen } from "./components";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { WarmupScreen } from "./components/WarmupScreen/WarmupScreen";
import { SuspectCard } from "./components/SuspectCard/SuspectCard";
import { SuspectContainer } from "./components/SuspectContainer";
import { DragDropContext, type DropResult } from "react-beautiful-dnd";
import { Layout } from "./components/Layout";
import { SuspectPage } from "./components/SuspectPage";
import { SuspectProvider } from "./provider";
import Sound from "react-sound";

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
    <>
      <SuspectProvider suspectNames={IMAGES}>
        <Layout>
          {displayScreen.home ? (
            <HomeScreen
              toggleShowGame={() => {
                changeDisplay("warmup");
              }}
            />
          ) : null}
          {displayScreen.warmup ? <SuspectContainer depositBanks={1} /> : null}
          {displayScreen.game ? <div /> : null}
        </Layout>
      </SuspectProvider>
    </>
  );
}

export default App;
