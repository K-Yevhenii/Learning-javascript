function getAgeFromTableRow(row: HTMLTableRowElement) {
    const firstCell = row.firstElementChild;

    if (firstCell) {
        const content = firstCell.textContent;

        return content ? Number(content) : null;
    }

    return null;
}

const TABLE_ROWS_COUNT = 2;

function getNameFromTableRow(row: HTMLTableRowElement) {
    if (row.children && row.children.length >= TABLE_ROWS_COUNT) {
        const [, secondCell] = row.children;

        return secondCell.textContent;
    }

    return null;
}

function sortTableRowsByAge(a: HTMLTableRowElement, b: HTMLTableRowElement) {
    const ageA = getAgeFromTableRow(a);
    const ageB = getAgeFromTableRow(b);

    if (!ageA || !ageB) return 0;

    return ageA - ageB;
}

function sortTableRowsByName(a: HTMLTableRowElement, b: HTMLTableRowElement) {
    const nameA = getNameFromTableRow(a);
    const nameB = getNameFromTableRow(b);

    if (!nameA || !nameB) return 0;

    return nameA.localeCompare(nameB);
}

type SortType = 'number' | 'string'; // OR
/**
 * enum SortType {
 *     AGE = 'number',
 *     NAME = 'string',
 * }
 */

const table = document.getElementById('grid');

if (table) {
    table.addEventListener('click', (event: MouseEvent) => {
        if (event.target instanceof Element && event.target.tagName !== 'TH') {
            return;
        }

        const sortType = (event.target as HTMLTableCellElement).dataset.type as SortType;
        const rows = [...table.querySelectorAll<HTMLTableRowElement>('tbody tr')];

        switch (sortType) {
            case 'number':
                rows.sort(sortTableRowsByAge);
                break;
            case 'string':
                rows.sort(sortTableRowsByName);
                break;
            default:
                throw new Error('Unknown sorting type');
        }

        const tableBody = table.querySelector<HTMLBodyElement>('tbody');

        if (tableBody) {
            tableBody.replaceChildren(...rows);
        }
    });
}
