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
        sortFunction: caseInsensitiveSort

    },
    {
        name: 'Start Date',
        selector: row => row.start,
        sortFunction: caseInsensitiveSort

    },
    {
        name: 'Department',
        selector: row => row.department,
        sortFunction: caseInsensitiveSort

    },
    {
        name: 'Date of Birth',
        selector: row => row.birth,
        sortFunction: caseInsensitiveSort

    },
    {
        name: 'Street',
        selector: row => row.street,
        sortFunction: caseInsensitiveSort

    },
    {
        name: 'City',
        selector: row => row.city,
        sortFunction: caseInsensitiveSort

    },
    {
        name: 'State',
        selector: row => row.state,
        sortFunction: caseInsensitiveSort

    },
    {
        name: 'Zip Code',
        selector: row => row.code,
        sortFunction: caseInsensitiveSort

    },
];

const data = [
    {
        id: 1,
        first: 'Beetle',
        last: 'Juice',
        start: "19/10/2022"
    },
    {
        id: 2,
        first: 'Ghost',
        last: 'busters',
        start: "28/08/2022"

    },
    {
        id: 3,
        first: 'laurette',
        last: 'dal moro',
        start: "01/07/2022"

    },
    {
        id: 4,
        first: 'julien',
        last: 'gallet',
        start: "30/09/2022"

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