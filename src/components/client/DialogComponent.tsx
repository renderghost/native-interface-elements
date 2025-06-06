'use client';

import React, { useRef } from 'react';

/**
 * Dialog component that shows a modal dialog.
 * This is a client component because it uses useState and event handlers.
 */
const DialogComponent = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  
  return (
    <div>
      <button onClick={() => dialogRef.current?.showModal()}>
        Open Dialog
      </button>
      <dialog ref={dialogRef}>
        <h4>Dialog Title</h4>
        <p>
          This is a dialog window. Press Escape to close or
          click the button below.
        </p>
        <button onClick={() => dialogRef.current?.close()}>
          Close
        </button>
      </dialog>
    </div>
  );
};

export default DialogComponent;

