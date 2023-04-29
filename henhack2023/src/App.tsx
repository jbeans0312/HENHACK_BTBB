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
<<<<<<< HEAD
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
      <WarmupScreen></WarmupScreen>
    </>
=======
      <>
        {displayScreen.home ? (
          <HomeScreen
            toggleShowGame={() => {
              changeDisplay("warmup");
            }}
          />
        ) : null}
        {displayScreen.warmup ? (
          <>
            {IMAGES.map((eachSuspectName: string, index: number) => (
              <SuspectCard
                key={`suspect_${index}_${eachSuspectName}`}
                id={eachSuspectName}
              />
            ))}
          </>
        ) : null}
        {displayScreen.game ? <div /> : null}
      </>
>>>>>>> 9187b1e86eec9d06e7cf08397df880910071bef5
    </DndProvider>
  );
}

export default App;
