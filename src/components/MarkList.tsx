import { useState } from 'react';
import { Mark } from '../interfaces';
import MarkCard from './MarkCard';

interface MarkListProps {
    marks: Mark[];
}

function MarkList({ marks }: MarkListProps) {
    const [selectedMark, setSelectedMark] = useState<Mark | null>(null);

    function handleMarkClick(mark: Mark) {
        setSelectedMark(mark);
    }

    return (
        <div className="mark-list-container">
            <h2>Marks List</h2>
            <table className="mark-table">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Comment</th>
                    <th>Mark</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {marks.map((mark, index) => (
                    <tr key={index}>
                        <td>{mark.title}</td>
                        <td>{mark.comment}</td>
                        <td>{mark.mark}/20</td>
                        <td>
                            <button onClick={() => handleMarkClick(mark)}>View</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            {selectedMark && <MarkCard mark={selectedMark} />}
        </div>
    );
}

export default MarkList;
