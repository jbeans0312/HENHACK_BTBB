import React from "react";
import "./App.css";

import { HomeScreen } from "./components";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { WarmupScreen } from "./components/WarmupScreen/WarmupScreen";
import { SuspectCard } from "./components/SuspectCard";
import { SuspectContainer } from "./components/SuspectContainer";
import { DragDropContext } from "react-beautiful-dnd";

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

  const onBeforeCapture = React.useCallback(() => {
    console.log("before capture");
  }, []);
  const onBeforeDragStart = React.useCallback(() => {
    console.log("before drag start");
  }, []);
  const onDragStart = React.useCallback(() => {
    console.log("drag start");
  }, []);
  const onDragUpdate = React.useCallback(() => {
    console.log("drag update");
  }, []);
  const onDragEnd = React.useCallback(() => {
    console.log("drag end");
  }, []);

  return (
    <>
      {displayScreen.home ? (
        <HomeScreen
          toggleShowGame={() => {
            changeDisplay("warmup");
          }}
        />
      ) : null}
      {displayScreen.warmup ? (
        <DragDropContext
          onBeforeCapture={onBeforeCapture}
          onBeforeDragStart={onBeforeDragStart}
          onDragStart={onDragStart}
          onDragUpdate={onDragUpdate}
          onDragEnd={onDragEnd}
        >
          <SuspectContainer>
            {IMAGES.map((eachSuspectName: string, index: number) => (
              <SuspectCard
                key={`suspect_${index}_${eachSuspectName}`}
                id={eachSuspectName}
                index={index}
              />
            ))}
          </SuspectContainer>
        </DragDropContext>
      ) : null}
      {displayScreen.game ? <div /> : null}
    </>
  );
}

export default App;
