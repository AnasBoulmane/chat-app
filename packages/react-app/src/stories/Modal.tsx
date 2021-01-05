import React from "react";
import { Container, ModalPopup, Overlay } from "./Modal.style";

export const Modal = ({ children }: any) => (
  <Overlay data-animate-modal-backdrop="true" className="overlay _3QE0O lLc_C _1mHgA copyable-area">
    <Container className="sWE2H">
      <ModalPopup className="_1HX2v" data-animate-modal-popup="true">
        <div className="_3e9k9" data-animate-modal-body="true">
          {children}
        </div>
      </ModalPopup>
    </Container>
  </Overlay>
);
