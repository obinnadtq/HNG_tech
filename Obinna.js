function validateform(){

	var x = document.getElementById('name').value;

	var y = document.getElementById('message').value;

	if (x.length < 4 || y.length < 20 ) {

		alert("Fill in the necessary information");
		return false;

	}

}
