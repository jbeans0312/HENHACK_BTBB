import React from "react";
import "./App.css";

import { HomeScreen } from "./components";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { WarmupScreen } from "./components/WarmupScreen/WarmupScreen";
import { SuspectCard } from "./components/SuspectCard";
import { SuspectContainer } from "./components/SuspectContainer";
import { DragDropContext, type DropResult } from "react-beautiful-dnd";

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

  const [suspects, setSuspects] = React.useState<string[]>(IMAGES);

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

  const onDragEnd = React.useCallback(
    (result: DropResult) => {
      const { destination, source } = result;

      console.log(destination, source);
      if (
        destination?.droppableId === source.droppableId &&
        source.droppableId === "droppable_suspect_container"
      ) {
        const oldSuspects = [...suspects];
        oldSuspects.splice(
          destination.index,
          0,
          oldSuspects.splice(source.index, 1)[0]
        );
        setSuspects(oldSuspects);
      }
    },
    [suspects]
  );

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
        <DragDropContext onDragEnd={onDragEnd}>
          <SuspectContainer>
            {suspects.map((eachSuspectName: string, index: number) => (
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
