import React from "react";
import { Button, Modal } from "react-bootstrap";
import "../../styles/WarmupScreen.css";
import { DepositBank } from "../DepositBank/DepositBank";
import { DraggableSuspect } from "./DraggableSuspect";

export function WarmupScreen(): JSX.Element {
  const [showInstructions, setShowInstructions] =
    React.useState<boolean>(false);

  const toggleShowInstructions = React.useCallback(() => {
    setShowInstructions((oldShowInstructions: boolean) => !oldShowInstructions);
  }, []);
  return (
    <div className="container">
      <h1>Suspects</h1>
      <div className="suspect_bank">
        <DraggableSuspect id="a"></DraggableSuspect>
        <DraggableSuspect id="b"></DraggableSuspect>
        <DraggableSuspect id="c"></DraggableSuspect>
        <DraggableSuspect id="d"></DraggableSuspect>
      </div>
      <Button
        className="my-2"
        onClick={toggleShowInstructions}
        variant="outline-secondary"
      >
        {"Instructions"}
      </Button>
      <Modal
        contentClassName={"warmup_screen_instructions_modal"}
        dialogClassName={"warmup_screen_instructions_modal"}
        show={showInstructions}
        onHide={toggleShowInstructions}
      >
        <Modal.Header className={"warmup_screen_instructions_header"}>
          {"Instructions"}
        </Modal.Header>
        <Modal.Body className={"warmup_home_screen_instructions_body"}>
          {
            <>
              <p>
                Greetings, Detective! Since it&apos;s your first day on the job,
                we have a very simple task for you. We&apos;ve been tracking the{" "}
                <strong>Single File Bandits.</strong> They&apos;re called that
                since <strong>they stick together in single file lines.</strong>
              </p>
              <p>
                Luckily we have been able to identify a group of four people
                getting off a bus, and we know that two of the people in the
                group are members of the bandit gang. We need you to find all
                possible combinations back-to-back bandits so we can continue
                with the investigation.
              </p>
            </>
          }
        </Modal.Body>
        <Modal.Footer className={"warmup_screen_instructions_footer"}>
          {"Click outside this box to close"}
        </Modal.Footer>
      </Modal>
    </div>
  );
}
