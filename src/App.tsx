import { useEffect, useState } from 'react';
import MarkList from './components/MarkList';
import MarkForm from './components/MarkForm';
import Modal from './components/Modal';
import './App.css';
import {useMarkStore} from "./store/MarkStore.tsx";

export default function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const marks = useMarkStore((state) => state.marks);
    const loadMarks = useMarkStore((state) => state.loadMarks);

    useEffect(() => {
        loadMarks();
    }, [loadMarks]);

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div id="app">
            <button onClick={() => setIsModalOpen(true)}>Add Mark</button>
            <MarkList marks={marks} />
            {isModalOpen && (
                <Modal onClose={closeModal}>
                    <MarkForm onSubmit={closeModal} />
                </Modal>
            )}
        </div>
    );
}
