import React, { FC, useState } from "react";
import Modal from "../components/Modal";
import DeleteModal from "./DeleteModal";
import {
  HiMiniBuildingOffice,
  HiMiniUser,
  HiMiniPhone,
  HiOutlineTrash,
} from "react-icons/hi2";

interface DepartmentProps {
  id: string;
  department: string;
  manager: string;
  contact: string;
  team: number;
  draggable: boolean;
  onDragStart: (event: React.DragEvent<HTMLDivElement>) => void;
}

const Department: FC<DepartmentProps> = ({
  id,
  department,
  manager,
  contact,
  draggable,
  onDragStart,
}) => {
  const [currentModal, setCurrentModal] = useState<string | null>(null);

  const removeDepartment = async (deptId: string): Promise<void> => {
    await fetch(`http://localhost:3000/departments/${deptId}`, {
      method: "DELETE",
    });
    location.reload();
  };

  return (
    <>
      <div
        className="flex items-center cursor-move select-none min-w-60 max-w-72 font-VazirRegular"
        draggable={draggable}
        onDragStart={onDragStart}
      >
        <span className="block w-12 h-1 bg-gradient-to-r from-blue to-green"></span>
        <div className="flex flex-col items-start justify-center bg-gray-200 p-2 rounded-md">
          <div className="flex items-center justify-start gap-2 mb-0.5 text-xs md:text-sm">
            <HiMiniBuildingOffice className="text-blue" />
            <h2>
              <span className="hidden md:inline-block">دپارتمان:</span>{" "}
              {department}
            </h2>
          </div>
          <div className="flex items-center justify-start gap-2 mb-0.5 text-xs md:text-sm">
            <HiMiniUser className="text-blue" />
            <h2>
              <span className="hidden md:inline-block">مدیرمسئول:</span>{" "}
              {manager}
            </h2>
          </div>
          <div className="flex items-center justify-start gap-2 mb-0.5 text-xs md:text-sm">
            <HiMiniPhone className="text-blue" />
            <h2>
              <span className="hidden md:inline-block">تماس:</span> {contact}
            </h2>
          </div>
          <div
            onClick={() => setCurrentModal("delete")}
            className="w-full flex items-center justify-end  text-blue hover:text-gold mt-2 pt-2 text-xs md:text-sm child:cursor-pointer border border-t-green"
          >
            <span>حذف</span>
            <HiOutlineTrash className="icon-sm " />
          </div>
        </div>
      </div>
      {currentModal && (
        <Modal>
          {currentModal === "delete" && (
            <DeleteModal
              closeModal={() => setCurrentModal(null)}
              confirmModal={() => removeDepartment(id)}
            />
          )}
        </Modal>
      )}
    </>
  );
};

export default Department;
