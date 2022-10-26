import DataTable from "react-data-table-component"
import "./ListeData.css"


const columns = [
    {
        name: 'First Name',
        selector: row => row.first,
        sortable: true
    },
    {
        name: 'Last Name',
        selector: row => row.last,
        sortable: true

    },
    {
        name: 'Start Date',
        selector: row => row.start,
        sortable: true

    },
    {
        name: 'Department',
        selector: row => row.department,
        sortable: true

    },
    {
        name: 'Date of Birth',
        selector: row => row.birth,
        sortable: true

    },
    {
        name: 'Street',
        selector: row => row.street,
        sortable: true

    },
    {
        name: 'City',
        selector: row => row.city,
        sortable: true

    },
    {
        name: 'State',
        selector: row => row.state,
        sortable: true

    },
    {
        name: 'Zip Code',
        selector: row => row.code,
        sortable: true

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
        <>
            <DataTable
            columns={columns}
            data={data}
            pagination
            />
        </>
    );
};

export default MyComponent