import Button from "./Button";
import { useRef, useState } from "react";
import { useOnClickOutside } from "@hooks/UseOnClickOutside";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "@services/api/env";

interface ModalProps {
  text: string;
  onClose?: () => void;
  id: string;
}

interface FormData {
  name: string;
  description: string;
  isPublic: boolean;
}

const FormModal: React.FC<ModalProps> = ({ text, onClose, id }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  if (onClose) {
    useOnClickOutside(modalRef, onClose);
  }
  const [formData, setFormData] = useState<FormData>({
    name: "",
    description: "",
    isPublic: true,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "isPublic" ? value === "true" : value,
    }));
  };

  const handleSubmit = () => {
    updatePlaylistMutation();

    if (onClose) {
      onClose();
    }
  };

  const updatePlaylist = async () => {
    const url = `${BASE_URL}playlists/${id}`;
    const token = window.localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    const data = {
      name: formData.name,
      description: formData.description,
      public: formData.isPublic,
    };

    await axios.put(url, data, config);
  };

  const { mutateAsync: updatePlaylistMutation } = useMutation({
    mutationFn: updatePlaylist,
    onSuccess: () => {
      alert("berhasil");
    },
  });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center px-32">
      <div
        className="px-20 bg-white flex flex-col py-32 gap-40 rounded-lg overflow-y-auto max-h-[90vh]"
        ref={modalRef}
      >
        <form>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
          />
          <select
            name="isPublic"
            value={formData.isPublic.toString()}
            onChange={handleChange}
          >
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </form>
        <h1 className="h3 text-center md:h1">{text}</h1>
        <div className="flex gap-10 items-center justify-center">
          <Button className="" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="default" className="" onClick={handleSubmit}>
            Yes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FormModal;
