import Button from "./Button";
import { useRef, useState } from "react";
import { useOnClickOutside } from "@hooks/UseOnClickOutside";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "@services/api/env";
import { wait } from "@utils/Wait";
import { getUserResponse } from "@services/api/user/GetUserResponse";

interface ModalProps {
  type: string;
  text: string;
  onClose?: () => void;
  id: string;
}

interface FormData {
  name: string;
  description: string;
  isPublic: boolean;
}
interface FormModalState {
  isFormValid: boolean;
}

const FormModal: React.FC<ModalProps> = ({ type, text, onClose, id }) => {
  const { data } = useQuery({
    queryFn: async () => {
      await wait(2000);
      const token = window.localStorage.getItem("token");
      return getUserResponse({ url: "me", token });
    },
    queryKey: [window.localStorage.getItem("token")],
  });
  const modalRef = useRef<HTMLDivElement | null>(null);
  if (onClose) {
    useOnClickOutside(modalRef, onClose);
  }
  const [formData, setFormData] = useState<FormData>({
    name: "",
    description: "",
    isPublic: true,
  });
  const [formState, setFormState] = useState<FormModalState>({
    isFormValid: true,
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
    if (!formData.name || !formData.description) {
      setFormState((prevState) => ({ ...prevState, isFormValid: false }));
      return;
    }
    if (type === "post") {
      createPlaylistMutation();
    } else {
      updatePlaylistMutation();
    }

    if (onClose) {
      onClose();
    }
  };
  const putUrl = `${BASE_URL}playlists/${id}`;
  const postUrl = `${BASE_URL}users/${data?.id}/playlists`;

  const token = window.localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  const dataInput = {
    name: formData.name,
    description: formData.description,
    public: formData.isPublic,
  };

  const updatePlaylist = async () => {
    await axios.put(putUrl, dataInput, config);
  };
  const createPlaylist = async () => {
    console.log("create x")
    console.log(postUrl, dataInput, config)
    await axios.post(postUrl, dataInput, config);
  };

  const { mutateAsync: updatePlaylistMutation } = useMutation({
    mutationFn: updatePlaylist,
    onSuccess: () => {
      alert("berhasil");
    },
  });
  const { mutateAsync: createPlaylistMutation } = useMutation({
    mutationFn: createPlaylist,
    onSuccess: () => {
      alert("berhasil");
    },
  });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center px-32">
      <div
        className="px-20 bg-white flex flex-col py-32 gap-10 rounded-xl overflow-y-auto max-h-[90vh]"
        ref={modalRef}
      >
        <h1 className="h3 text-center md:h1">{text}</h1>
        {!formState.isFormValid && (
          <p className="text-red-500 text-sm mb-4">
            Please fill in all required fields.
          </p>
        )}
        <form className="flex flex-col gap-4 mr-8">
          <div className="flex gap-3">
            <label>Playlist Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="border-2"
            />
          </div>
          <div className="flex gap-3">
            <label>Playlist Desc:</label>
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              className="border-2"
            />
          </div>
          <div className="flex gap-3">
            <label>Public Playlist?:</label>
            <select
              name="isPublic"
              value={formData.isPublic.toString()}
              onChange={handleChange}
              className="border-2"
            >
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          </div>
        </form>
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
