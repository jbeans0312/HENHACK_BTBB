import React from "react";
import logo from "../../icon.png";
import { Button, Modal } from "react-bootstrap";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from "src/styles/HomeScreen.module.css";

type HomeScreenProperties = {
  toggleShowGame: (key: string) => void;
};

export const HomeScreen = ({
  toggleShowGame,
}: HomeScreenProperties): JSX.Element => {
  const [showInstructions, setShowInstructions] =
    React.useState<boolean>(false);

  const toggleShowInstructions = React.useCallback(() => {
    setShowInstructions((oldShowInstructions: boolean) => !oldShowInstructions);
  }, []);

  return (
    <>
      <div className={styles.home_screen}>
        <div className={styles.home_screen_upper_content}>
          <div className={styles.home_screen_image}>
            {" "}
            <img
              style={{ width: 100, height: 100 }}
              src={logo}
              alt="Game Logo"
            ></img>
            <img
              style={{ width: 100, height: 100 }}
              src={logo}
              alt="Game Logo"
            ></img>
          </div>

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
                onClick={toggleShowInstructions}
                variant="outline-secondary"
              >
                {"Instructions"}
              </Button>
              <Button
                variant="outline-success"
                onClick={() => {
                  toggleShowGame("warmup");
                }}
              >
                {"Start Investigation"}
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.home_screen_footer}>{"Created by BTBB"}</div>
      </div>
      <Modal
        contentClassName={styles.home_screen_instructions_modal}
        dialogClassName={styles.home_screen_instructions_modal}
        show={showInstructions}
        onHide={toggleShowInstructions}
      >
        <Modal.Header className={styles.home_screen_instructions_header}>
          {"Instructions"}
        </Modal.Header>
        <Modal.Body className={styles.home_screen_instructions_body}>
          {
            "In this detective game, players must use clues about a suspect's face to determine if they robbed a bank. Using recursion, players will divide suspects into smaller groups based on facial characteristics until the perpetrator is identified."
          }
        </Modal.Body>
        <Modal.Footer className={styles.home_screen_instructions_footer}>
          {"Instructions footer"}
        </Modal.Footer>
      </Modal>
    </>
  );
};
