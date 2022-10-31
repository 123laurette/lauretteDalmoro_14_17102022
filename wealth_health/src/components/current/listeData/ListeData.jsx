import DataTable from "react-data-table-component"
import "./ListeData.css"

/*const sortDate = (rowA, rowB) => {
    const a = rowA.toLowerCase();
    const b = rowB.toLowerCase();

    if (a>b) {
        return 1;
    }
    if (b > a) {
        return -1;
    }
    return 0;
}*/


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
        birth: "1965/12/21",
        start: "2021/10/19",
        street: "amusement",
        city: "fou",
        state: "skhkgh",
        code:"25000",
        department: "jeu",
    },
    {
        id: 2,
        first: 'Ghost',
        last: 'busters',
        birth: "1965/11/01",
        start: "2022/10/01",
        street: "bouuuuu",
        city: "peur",
        state: "fbsbf",
        code:"25000",
        department: "securité",
    },
    {
        id: 3,
        first: 'laurette',
        last: 'dal moro',
        birth: "1966/03/17",
        start: "2021/09/30",
        street: "metairie",
        city: "servies",
        state: "france",
        code:"81220",
        department: "compta",
    },
    {
        id: 4,
        first: 'julien',
        last: 'gallet',
        birth: "1990/06/14",
        start: "2021/01/01",
        street: "golf",
        city: "rochebrune",
        state: "france",
        code:"83000",
        department: "commerce",
    },
    {
        id: 5,
        first: 'vivian',
        last: 'mingaud',
        birth: "1976/04/13",
        start: "2021/03/10",
        street: "fontaine",
        city: "servies",
        state: "france",
        code:"81220",
        department: "graph",
    },
]

const subHeaderComponent = (
    <div style={{ display: 'flex', alignItems: 'center'
    }}>
        <input id="outlined-basic" label="Search" variant="outlined" size="small"  style={{ margin: '5px' }} />

    </div>
);
function MyComponent() {
    return (
        <>
            <DataTable
                columns={columns}
                data={data}
                pagination
                fixedHeader
                fixedHeaderScrollHeight="300px"
                highlightOnHover
                pointerOnHover
                responsive
                subHeader
                subHeaderComponent={subHeaderComponent}
                subHeaderAlign="right"
                subHeaderWrap
            />
        </>
    );
};

export default MyComponent

/*reflexion :
les values du formulaire sont récupérées dans item fonction renderTodos
importer la fonction renderTodos dans le fichier ListeData et la mettre en relation avec une contante data
*/

/*non résolu:
les dates ne se stockent pas dans l'item
les dropdowns ne se remettent pas à zéro après le save et ne se stockent pas dans l'item
dans la data liste, le search ne fontionne pas, car pas réussi a mettre un nouveau plugin*/

