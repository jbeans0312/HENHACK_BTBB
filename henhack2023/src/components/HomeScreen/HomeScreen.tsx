import React from "react";
import logo from "../../icon.png";
import { Button, Modal, Image, Fade } from "react-bootstrap";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from "src/styles/HomeScreen.module.css";
import FadeIn from "react-fade-in/lib/FadeIn";

type HomeScreenProperties = {
  toggleShowGame: () => void;
};

/**
 *
 * @param props - The properties of the home screen (title screen)
 * @param props.toggleShowGame - Controls whether to show the game
 * @returns
 */
export const HomeScreen = ({
  toggleShowGame,
}: HomeScreenProperties): JSX.Element => {
  const [showTitle, setShowTitle] = React.useState<boolean>(false);
  const [showInstructions, setShowInstructions] =
    React.useState<boolean>(false);

  const toggleShowInstructions = React.useCallback(() => {
    setShowInstructions((oldShowInstructions: boolean) => !oldShowInstructions);
  }, []);

  React.useEffect(() => {
    setShowTitle(true);
  }, []);

  return (
    <>
      <div className={styles.home_screen}>
        <div className={styles.home_screen_upper_content}>
          <div className={styles.home_screen_image}>
            {" "}
            <Image
              alt="First image for game"
              className={styles.home_screen_game_logo_left}
              rounded
              src={logo}
            />
            <Image
              className={styles.home_screen_game_logo_right}
              rounded
              src={logo}
              alt="Second image for game"
            />
          </div>

          <FadeIn transitionDuration={700}>
            <div className={styles.home_screen_title}>
              {"Splitting Suspects: A Recursive Bank Heist Mystery"}
            </div>
            <div className={styles.home_screen_content}>
              <div className={styles.home_screen_description}>
                {
                  "Put your facial recognition skills to the test and solve the bank robbery with recursive precision!"
                }
              </div>
              <div className={styles.home_screen_action_buttons}>
                <Button
                  className={styles.home_screen_button}
                  onClick={toggleShowInstructions}
                  variant="outline-secondary"
                >
                  {"Instructions"}
                </Button>
                <Button
                  className={styles.home_screen_button}
                  variant="outline-success"
                  onClick={() => {
                    toggleShowGame();
                  }}
                >
                  {"Start Investigation"}
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
        <div className={styles.home_screen_footer}>{"Created by BTBB"}</div>
      </div>
      <Modal
        contentClassName={styles.home_screen_instructions_modal}
        dialogClassName={styles.home_screen_instructions_modal}
        show={showInstructions}
        onHide={toggleShowInstructions}
      >
        <FadeIn transitionDuration={700}>
          <Modal.Header
            className={styles.home_screen_instructions_header}
            closeButton
            closeVariant="white"
          >
            {"Instructions"}
          </Modal.Header>
          <Modal.Body className={styles.home_screen_instructions_body}>
            {
              "In this detective game, players must use clues about a suspect's face to determine if they robbed a bank. Using recursion, players will divide suspects into smaller groups based on facial characteristics until the perpetrator is identified."
            }
          </Modal.Body>
        </FadeIn>
      </Modal>
    </>
  );
};
