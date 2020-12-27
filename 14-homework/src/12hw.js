const axios = require('axios');
export function drawInfo(filmNumber){
	const peopleTable = document.querySelector('#people-table');
	peopleTable.innerHTML = 
		`<tr class="people-table-row">
	        <td class="people-table-cell">Full name</td>
	        <td class="people-table-cell">Birth year</td>
	        <td class="people-table-cell">Gender</td>
	    </tr>`;
	const filmLink = `https://swapi.dev/api/films/${filmNumber}/`
	axios.get(filmLink)
	.then(res=>{
		const characters = res.data.characters;
		
		characters.map(e=>axios.get(e)
			.then(res=>{
				console.log(res.data);
				const newRow = document.createElement('tr');
				newRow.className = "people-table-row"
				const nameCell = document.createElement('td');
				nameCell.className = "people-table-cell"
				nameCell.textContent = res.data.name;
				const dateCell = document.createElement('td');
				dateCell.className = "people-table-cell";
				dateCell.textContent = res.data.birth_year;
				newRow.append(nameCell);
				newRow.append(dateCell);
				const genderCell = document.createElement('td');
				genderCell.className = "people-table-cell";
				if (res.data.gender === "n/a" || res.data.gender === "none"){
					genderCell.innerHTML =`<img src="pics/neither.png" height="50px">`;
				}
				else{
					genderCell.innerHTML =`<img src="pics/${res.data.gender}.png" height="50px">`;
				}
				newRow.append(genderCell);
				peopleTable.append(newRow);
			}))
	});
}