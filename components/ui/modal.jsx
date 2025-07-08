import React from "react";
import { Dialog, DialogContent } from "./dialog";
import { X } from "lucide-react";

function Modal({ body, footer, isOpen, Onclose, step, totalStep }) {
  return (
    <Dialog open={isOpen} onOpenChange={Onclose}>
      <DialogContent className="bg-[black] opacity-80">
        <button
          onClick={Onclose}
          className="p-2 hover:opacity-70 transition w-fit border-0 cursor-pointer"
        >
          <X size={28} />
        </button>
        {step && totalStep && (
          <div className="text-xl font-bold">
            Step {step} of {totalStep}
          </div>
        )}
        <div className="mt-4">{body}</div>
        {footer && <div className="mt-4">{footer}</div>}
      </DialogContent>
    </Dialog>
  );
}

export default Modal;
