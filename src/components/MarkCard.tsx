import {Mark} from "../interfaces.tsx";

interface MarkCardProps {
    mark: Mark;
}

function MarkCard({ mark }: MarkCardProps) {
    return (
        <div className="card">
            <h2>{mark.title}</h2>
            <p>{mark.comment}</p>
            <p>Mark: {mark.mark}/20</p>
        </div>
    );
}

export default MarkCard;
