const makeChange = (c) => {
	 const c=parseInt(c,10);
	return{
		q:Math.floor(c/25),
		d:Math.floor((c%25)/10),
	    n:Math.floor((c%25%10)/5),
	p:c%5;
	}
};

// Do not the change the code below
/const c = prompt("Enter c: ");
/alert(JSON.stringify(makeChange(c)));
