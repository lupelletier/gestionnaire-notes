import { test, expect } from 'vitest';
import MarkList from '../src/components/MarkList';
import {renderHook} from "@testing-library/react-hooks";

// Define the test case
test('should apply appropriate color to marks based on their values', () => {
    // Define sample marks with different values
    const marks = [
        { title: 'Mark 1', comment: 'Comment 1', mark: 5 },
        { title: 'Mark 2', comment: 'Comment 2', mark: 8 },
        { title: 'Mark 3', comment: 'Comment 3', mark: 11 },
        { title: 'Mark 4', comment: 'Comment 4', mark: 15 },
    ];

    // Render the MarkList component with the sample marks
    const { container } = renderHook(<MarkList marks={marks} />);

    // Get the rendered rows from the table
    const rows = container.querySelectorAll('.mark-list-container tbody tr');

    // Assert the color of each row based on the mark value
    expect(rows[0].className).toContain('mark-rouge'); // Mark 1: < 8, should contain rouge
    expect(rows[1].className).toContain('mark-orange'); // Mark 2: < 10, should contain orange
    expect(rows[2].className).toContain('mark-jaune'); // Mark 3: < 13, should contain jaune
    expect(rows[3].className).toContain('mark-vert'); // Mark 4: ≥ 13, should contain vert
});
