import React, { useState } from 'react';
import { Mark } from '../interfaces';

interface MarkFormProps {
    onSubmit: (mark: Mark) => void;
}

const MarkForm: React.FC<MarkFormProps> = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [comment, setComment] = useState('');
    const [mark, setMark] = useState<number | string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ title, comment, mark: Number(mark) });
        setTitle('');
        setComment('');
        setMark('');
    };

    return (
        <form onSubmit={handleSubmit} className={'mark-form'}>
            <div>
                <label className={'mark-form-label'}>
                    Title:
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className={''}
                    />
                </label>
            </div>
            <div>
                <label className={'mark-form-label'}>
                    Comment:
                    <input
                        type="text"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div>
                <label className={'mark-form-label'}>
                    Mark (out of 20):
                    <input
                        type="number"
                        value={mark}
                        onChange={(e) => setMark(e.target.value)}
                        max="20"
                        min="0"
                        required
                    />
                </label>
            </div>
            <button type="submit">Add Mark</button>
        </form>
    );
};

export default MarkForm;
