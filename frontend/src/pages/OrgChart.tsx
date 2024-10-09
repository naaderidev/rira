import React, { useState, useEffect, FC } from "react";
import Form from "../components/Form";
import Company from "../components/Company";
import Department from "../components/Department";
import { HiOutlineArrowPath } from "react-icons/hi2";
import Modal from "../components/Modal";
import AlertModal from "../components/AlertModal";

interface DepartmentType {
  id: string;
  department: string;
  manager: string;
  contact: string;
  team: number;
  order: number;
}

const OrgChart: FC = () => {
  const [departments, setDepartments] = useState<DepartmentType[]>([]);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [currentModal, setCurrentModal] = useState<string | null>(null);

  useEffect(() => {
    async function getDepartments(): Promise<void> {
      const result: DepartmentType[] = await fetch(
        "http://localhost:3000/departments"
      ).then((res) => res.json());
      result.sort((a, b) => a.order - b.order);
      setDepartments(result);
    }
    getDepartments();
  }, []);

  useEffect(() => {
    localStorage.setItem("departments", JSON.stringify(departments));
  }, [departments]);

  const onDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    index: number
  ): void => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", "");
  };

  const onDragOver = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>, index: number): void => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === index) return;

    const updatedDepartments = [...departments];
    const [removed] = updatedDepartments.splice(draggedIndex, 1);
    updatedDepartments.splice(index, 0, removed);

    setDepartments(updatedDepartments);
    localStorage.setItem("departments", JSON.stringify(updatedDepartments));
    setDraggedIndex(null);
  };

  const saveOrder = async (): Promise<void> => {
    try {
      const updatedOrder = departments.map((dept) => ({
        id: dept.id,
        order: departments.indexOf(dept) + 1,
      }));

      await Promise.all(
        updatedOrder.map(async (dept) => {
          await fetch(`http://localhost:3000/departments/${dept.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ order: dept.order }),
          });
        })
      );

      localStorage.setItem("departments", JSON.stringify(departments));
      setCurrentModal("update");
    } catch (error) {
      console.error("Error saving order:", error);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-6">
        <div className="lg:col-span-2">
          <Form length={departments.length} />
        </div>
        <div className="lg:col-span-4">
          <div className="py-8 px-4">
            <div className="flex items-center gap-0">
              <Company />
              <div className="relative flex flex-col justify-between gap-2 py-2 border-r-4 border-sky-800">
                <span className="absolute -bottom-3 -right-2.5 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-blue"></span>
                </span>
                {departments.map((dept, index) => (
                  <div
                    key={dept.id}
                    onDragOver={onDragOver}
                    onDrop={(e) => onDrop(e, index)}
                  >
                    <Department
                      id={dept.id}
                      department={dept.department}
                      manager={dept.manager}
                      contact={dept.contact}
                      team={dept.team}
                      draggable
                      onDragStart={(e) => onDragStart(e, index)}
                    />
                  </div>
                ))}
                <span className="absolute -top-3 -right-2.5 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-blue"></span>
                </span>
                {departments.length ? (
                  <button
                    onClick={saveOrder}
                    className="w-full flex-center gap-2 text-blue hover:text-green my-2 py-2 text-xs md:text-sm child:cursor-pointer bordeer border-y-2 border-blue"
                  >
                    <span className="text-base font-Lalezar">به روزرسانی</span>
                    <HiOutlineArrowPath className="icon-sm" />
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {currentModal && (
        <Modal>
          {currentModal === "update" && (
            <AlertModal
              content="چارت سازمان با موفقیت به روزرسانی شد."
              closeModal={() => setCurrentModal(null)}
            />
          )}
        </Modal>
      )}
    </>
  );
};

export default OrgChart;
