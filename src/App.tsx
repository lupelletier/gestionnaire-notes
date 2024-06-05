import {useState} from "react";
import {Mark} from "./interfaces.tsx";
import MarkList from "./components/MarkList.tsx";
import MarkForm from "./components/MarkForm.tsx";
import Modal from "./components/Modal.tsx";
import "./App.css";

export default function App(){
    const [marks, setMarks] = useState<Mark[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const addMark = (newMark: Mark) => {
        setMarks([...marks, newMark]);
        setIsModalOpen(false);
    };

    return (
        <div id="app" className="">
            <button onClick={() => setIsModalOpen(true)}>Add Mark</button>
            <MarkList marks={marks} />
            {isModalOpen && (
                <Modal onClose={() => setIsModalOpen(false)}>
                    <MarkForm onSubmit={addMark} />
                </Modal>
            )}
        </div>
    );

}
