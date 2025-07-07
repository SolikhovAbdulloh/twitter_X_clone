import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./dialog";

function Modal({ body, footer, isOpen, Onclose }) {
  return (
    <Dialog open={isOpen} onOpenChange={Onclose}>
      <DialogContent className="bg-[black] opacity-80">
        <div className="mt-4">{body}</div>
        {footer && <div className="mt-4">{footer}</div>}
      </DialogContent>
    </Dialog>
  );
}

export default Modal;
