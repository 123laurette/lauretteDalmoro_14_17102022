import DataTable from "react-data-table-component"
import {useState, useMemo} from "react"
import "./ListeData.css"
import {item} from "./../create/FormCreate"

const columns = [
    {
        name: 'First Name',
        selector: row => row.first,
        sortable: true,
        filterable: true,
		reorder: true,
    },
    {
        name: 'Last Name',
        selector: row => row.last,
        sortable: true,
        filterable: true,
		reorder: true,

    },
    {
        name: 'Start Date',
        selector: row => row.start,
        sortable: true,
        filterable: true,
		reorder: true,
    },
    {
        name: 'Department',
        selector: row => row.department,
        sortable: true,
        filterable: true,
		reorder: true,

    },
    {
        name: 'Date of Birth',
        selector: row => row.birth,
        sortable: true,
        filterable: true,
		reorder: true,
    },
    {
        name: 'Street',
        selector: row => row.street,
        sortable: true,
        filterable: true,
		reorder: true,
    },
    {
        name: 'City',
        selector: row => row.city,
        sortable: true,
        filterable: true,
		reorder: true,
    },
    {
        name: 'State',
        selector: row => row.state,
        sortable: true,
        filterable: true,
		reorder: true,
    },
    {
        name: 'Zip Code',
        selector: row => row.code,
        sortable: true,
        filterable: true,
		reorder: true,
    },
];

let tabItem = []
function renderDatas() {
    tabItem.push(item)
    return tabItem

}
/*const data = [
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
        last: 'Busters',
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
        first: 'Laurette',
        last: 'Dal moro',
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
        first: 'Julien',
        last: 'Gallet',
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
        first: 'Vivian',
        last: 'Mingaud',
        birth: "1976/04/13",
        start: "2021/03/10",
        street: "fontaine",
        city: "servies",
        state: "france",
        code:"81220",
        department: "graph",
    },
]*/
let results = [...tabItem]
console.log(results)
console.log(tabItem)


const FilterComponent = ({ filterText, onFilter, onClear }) => (
	<>
		<input
			id="search"
			type="text"
			placeholder="Search"
			aria-label="Search Input"
			value={filterText}
			onChange={onFilter}
		/>
		<button type="button" onClick={onClear}>
			X
		</button>
	</>
);
function MyComponent() {
    const [filterText, setFilterText] = useState('');
	const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

	const filteredItems = results.filter(data =>
        (data.first.toLowerCase()).includes(filterText.toLowerCase()) ||
        (data.last.toLowerCase()).includes(filterText.toLowerCase()) ||
        (data.start.toLowerCase()).includes(filterText.toLowerCase()) ||
        (data.department.toLowerCase()).includes(filterText.toLowerCase()) ||
        (data.birth.toLowerCase()).includes(filterText.toLowerCase()) ||
        (data.street.toLowerCase()).includes(filterText.toLowerCase()) ||
        (data.city.toLowerCase()).includes(filterText.toLowerCase()) ||
        (data.state.toLowerCase()).includes(filterText.toLowerCase()) ||
        (data.code.toLowerCase()).includes(filterText.toLowerCase())

	);
        
	const subHeaderComponentMemo = useMemo(() => {
		const handleClear = () => {
			if (filterText) {
				setResetPaginationToggle(!resetPaginationToggle);
				setFilterText('');
			}
		};

		return (
			<FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
		);
	}, [filterText, resetPaginationToggle]);

	return (
		<DataTable
			columns={columns}
			data={renderDatas(filteredItems)} //filteredItems, était inscrit à la place de tabItem et là le filtre fonctionne
			pagination
			paginationResetDefaultPage={resetPaginationToggle} 
			subHeader
			subHeaderComponent={subHeaderComponentMemo}
			persistTableHead
		/>
        

	);
}


export default MyComponent




