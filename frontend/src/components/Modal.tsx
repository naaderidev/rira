import { FC, ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
}

const Modal: FC<ModalProps> = (props) => {
  return <div className="modal active">{props.children}</div>;
};

export default Modal;
