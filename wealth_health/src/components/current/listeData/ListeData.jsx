import DataTable from "react-data-table-component"
import "./ListeData.css"

const caseInsensitiveSort = (rowA, rowB) => {
    const a = rowA.first.toLowerCase();
    const b = rowB.first.toLowerCase();

    if (a > b) {
        return 1;
    }

    if (b > a) {
        return -1;
    }

    return 0;
};
const columns = [
    {
        name: 'First Name',
        selector: row => row.first,
        sortFunction: caseInsensitiveSort

    },
    {
        name: 'Last Name',
        selector: row => row.last,
    },
    {
        name: 'Start Date',
        selector: row => row.start,
    },
    {
        name: 'Department',
        selector: row => row.department,
    },
    {
        name: 'Date of Birth',
        selector: row => row.birth,
    },
    {
        name: 'Street',
        selector: row => row.street,
    },
    {
        name: 'City',
        selector: row => row.city,
    },
    {
        name: 'State',
        selector: row => row.state,
    },
    {
        name: 'Zip Code',
        selector: row => row.code,
    },
];

const data = [
    {
        id: 1,
        first: 'Beetle',
        last: 'Juice',
    },
    {
        id: 2,
        first: 'Ghost',
        last: 'busters',
    },
]



function MyComponent() {
    return (
        <DataTable
            columns={columns}
            data={data}
            pagination
        />
    );
};

export default MyComponent