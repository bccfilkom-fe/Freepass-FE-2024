import Button from "./Button";
import { useRef } from "react";

interface ModalProps {
  text: string;
  onClose?: () => void;
  onClick?: () => void;
}

const Modal: React.FC<ModalProps> = ({ text, onClose, onClick }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center px-32">
      <div
        className="px-20 bg-white flex flex-col py-32 gap-40 rounded-lg overflow-y-auto max-h-[90vh]"
        ref={modalRef}
      >
        <h1 className="h3 text-center md:h1">{text}</h1>
        <div className="flex gap-10 items-center justify-center">
          <Button className="" onClick={onClose}>
            Cancle
          </Button>
          <Button variant="default" className="" onClick={onClick}>
            Yes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
