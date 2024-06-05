import create from 'zustand';

interface Mark {
    title: string;
    comment: string;
    mark: number;
}

interface MarkStore {
    marks: Mark[];
    addMark: (mark: Mark) => void;
    loadMarks: () => void;
}

const localStorageKey = 'marks';

const getMarksFromLocalStorage = (): Mark[] => {
    const storedMarks = localStorage.getItem(localStorageKey);
    return storedMarks ? JSON.parse(storedMarks) : [];
};

export const useMarkStore = create<MarkStore>((set) => ({
    marks: getMarksFromLocalStorage(),

    addMark: (mark) =>
        set((state) => {
            const updatedMarks = [...state.marks, mark];
            localStorage.setItem(localStorageKey, JSON.stringify(updatedMarks));
            return { marks: updatedMarks };
        }),

    loadMarks: () =>
        set(() => {
            const marks = getMarksFromLocalStorage();
            return { marks };
        }),
}));
