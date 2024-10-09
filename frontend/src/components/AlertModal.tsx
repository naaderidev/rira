import { FC } from "react";

interface AlertModalProps {
  content: string;
  closeModal: () => void;
}

const AlertModal: FC<AlertModalProps> = (props) => {
  return (
    <div className="modal-wrapper flex flex-col items-center">
      <p className="text-center">{props.content}</p>
      <button
        className="w-fit flex-center text-sm font-Lalezar transition-colors hover:bg-gradient-to-r from-green to-blue border border-blue bg-blue text-gray-100 rounded-md px-2 py-1 mt-4"
        onClick={props.closeModal}
      >
        متوجه شدم
      </button>
    </div>
  );
};

export default AlertModal;
