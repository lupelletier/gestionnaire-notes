import {MarkListProps} from "../interfaces.tsx";
import React from "react";

const MarkList: React.FC<MarkListProps> = ({ marks }) => {
    return (
        <div>
            <h2>Marks List</h2>
            <ul>
                {marks.map((mark, index) => (
                    <li key={index}>
                        <h3>{mark.title}</h3>
                        <p>{mark.comment}</p>
                        <p>Mark: {mark.mark}/20</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MarkList;