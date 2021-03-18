let data = ["Belajar coding itu pusing", 
			"Tetap semangat yess",
			"Kerja keras"
			];
const daftar = document.getElementById('daftar');

// //menambahkan tugas tugas ke item
tambah = () => {
	data.unshift(input.value);
	input.value = "";
	tampilkan();
}

//menampilkan data yang sudah di tambahkan
//cara ini sangat kotor sekali
// tampilkan = () => {
// 	for(let task in data){
// 		daftar.innerHTML += 
// 		`<div class="task"><p>${data[task]}</p></div>`
// 		data.splice(0, 1);
// 	}
// }


// tampilkan = () => {
// 	const newItem = document.createElement("div");
// 	// const penambahKelas = document.querySelector(".list")
// 	for(i in data){
// 		let task = document.createTextNode(data[i]);
// 		newItem.appendChild(task);
// 		daftar.appendChild(newItem);
// 	}
// 	// penambahKelas.classList.toggle("task");
// }

hapus = (id) => {
	data.splice(id, 1);
	tampilkan();
}

tampilkan = () => {
	daftar.innerHTML = "";
	data.forEach(show = (item, index) => {
		daftar.innerHTML += 
		`<div class="task" onclick="hapus(${index})"><p>${item}</p></div>`;
	})
} 

tampilkan();