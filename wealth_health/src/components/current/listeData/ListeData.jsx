import DataTable from "react-data-table-component"
import "./ListeData.css"

const columns = [
    {
        name: 'First Name',
        selector: row => row.first,
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
        />
    );
};

export default MyComponent