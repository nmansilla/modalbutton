import React, { useEffect, useState } from 'react';
import ForgeReconciler, { Text, Modal, ModalBody, ModalTransition, ModalTitle, ModalFooter, ModalHeader, Form, useForm, Textfield, Label, Button } from '@forge/react';
import { invoke } from '@forge/bridge';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <Button appearance="primary" onClick={openModal}>
        Open modal
      </Button>
      <ModalTransition>
        {isOpen && (
          <Modal onClose={closeModal}>
            <ModalHeader>
              <ModalTitle appearance="warning">
                This is the ModalTitle
              </ModalTitle>
            </ModalHeader>
            <ModalBody>
              This is the ModalBody.
            </ModalBody>
            <ModalFooter>
              <Button appearance="subtle" onClick={closeModal}>Close Modal</Button>
            </ModalFooter>
          </Modal>
        )}
      </ModalTransition>
      {openModal}
    </>
  );
};

ForgeReconciler.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
