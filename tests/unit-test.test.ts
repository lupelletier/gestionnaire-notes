import { renderHook } from '@testing-library/react-hooks';
import { useMarkStore } from "../src/store/MarkStore";
import { expect, test } from 'vitest';

// Test adding a mark to the store
test('should add a mark to the store', () => {
    const { result } = renderHook(() => useMarkStore());
    const mark = { title: 'Test', comment: 'Test', mark: 5 };
    result.current.addMark(mark);
    expect(result.current.marks).toEqual([mark]);
});


