function makeid(l) {
  // write your code here
	let arr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

	let id=""

	for (let i = 0; i < l; i++) {
		id=id+arr[Math.floor(Math.random() *arr.length -1)]
	}

	
	
	return id;
} 

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
