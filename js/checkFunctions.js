fname=document.getElementById("fname").value;
lname=document.getElementById("lname").value;

function isFName(){
	console.log("is name");
	fname=document.getElementById("fname").value;
	// document.getElementById("ErrFname").style.display="none";
	if(fname.length<1 || fname===null || fname===" " || fname.trim() == ""){
		document.getElementById("ErrFname").style.display="block";
		document.getElementById("ErrFname").innerHTML="First Name should not be empty";
	}
	else{
		document.getElementById("ErrFname").innerHTML="";
	}
	if(fname.match(/[0-9\s]/g)){
		document.getElementById("ErrFname").style.display="block";
		document.getElementById("ErrFname").innerHTML="First Name must not contain numbers, special characters or spaces";
	}
	else if(fname.match(/[^0-9]/g)){
		document.getElementById("ErrFname").innerHTML="";
	}
	
}

function isLName(){
  if(lname.length<1 || lname===null || lname===" " || lname.value.trim()==""){
		document.getElementById("ErrLname").style.display="block";
		document.getElementById("ErrLname").innerHTML="Last Name should not be empty";
		// alert("Please fill in your first name.");
	}
	else{
		document.getElementById("ErrLname").innerHTML="";
	}
	if(lname.value.match(/[0-9\s]/g)){
		// alert("Numbers validated");
		document.getElementById("ErrLname").style.display="block";
		document.getElementById("ErrLname").innerHTML="Last Name must not contain numbers, special characters or spaces";
	}
	else if(lname.value.match(/[^0-9]/g)){
		document.getElementById("ErrLname").innerHTML="";
	}
}

phno=document.getElementById("phno").value;

function isPhone(){
    if(phno.length<1 || phno===null || phno==="" || phno.value.trim()==""){
        document.getElementById("ErrPhone").style.display="block";
        document.getElementById("ErrPhone").innerHTML="Phone field should not be empty";
		}
		else{
			document.getElementById("ErrPhone").innerHTML="";
		}
		if(phno.value.match(/[a-zA-Z@.&%$]/g)){
			document.getElementById("ErrPhone").style.display="block";
			document.getElementById("ErrPhone").innerHTML="Phone field must contain only numbers";
		}
		if(phno.value.match(/[0-9*#+]/g)){
			// if(officeno.value.length!==10 || officeno.value.length!==12){
			// 	document.getElementById("ErrOffice").style.display="block";
			// 	document.getElementById("ErrOffice").innerHTML="Phone field must contain 10-12 numbers";
			// }
			if(phno.value.length===10 || phno.value.length===12){
				document.getElementById("ErrPhone").style.display="block";
				document.getElementById("ErrPhone").innerHTML="correct";
			}
			else if(phno.value.length!=10 || phno.value.length!=12){
				document.getElementById("ErrPhone").innerHTML="incorrect";
			}
	
		}
		// if(phno.value.match(/[^0-9]/g)){
		// 		document.getElementById("ErrPhone").style.display="block";
		// 		document.getElementById("ErrPhone").innerHTML="Phone field must contain only numbers";
		// }
		// else if(phno.value.match(/[0-9]/g)){
		// 		document.getElementById("ErrPhone").innerHTML="";
		// 		if(!phno.value.match(/^[0-9]{10,12}$/)){
		// 			console.log("not 10");
		// 			document.getElementById("ErrPhone").style.display="block";
		// 			document.getElementById("ErrPhone").innerHTML="Number of digits must be 10 or 12";
		// 		}
		// }	
}

officeno=document.getElementById("officeno").value;

function isOfficeNumber(){
	if(officeno.value.match(/[^0-9*#+]/g)){
		document.getElementById("ErrOffice").style.display="block";
		document.getElementById("ErrOffice").innerHTML="Phone field must contain only numbers";
	}
	if(officeno.value.match(/[0-9*#+]/g)){
		// if(officeno.value.length!==10 || officeno.value.length!==12){
		// 	document.getElementById("ErrOffice").style.display="block";
		// 	document.getElementById("ErrOffice").innerHTML="Phone field must contain 10-12 numbers";
		// }
		if(officeno.value.length===10 || officeno.value.length===12){
			document.getElementById("ErrOffice").style.display="block";
			document.getElementById("ErrOffice").innerHTML="correct";
		}
		else if(officeno.value.length!=10 || officeno.value.length!=12){
			document.getElementById("ErrOffice").innerHTML="incorrect";
		}

	}
	console.log(officeno.value.length);
}

emailid=document.getElementById("emailid");

function isEmail(){
	console.log(emailid.value);
	var re=/^[a-zA-Z]+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})$/;
		if(emailid.value.length<1 || emailid==null || emailid=="" || emailid.value.trim()==""){
			console.log("Empty");
			document.getElementById("ErrEmail").style.display="block";
			document.getElementById("ErrEmail").innerHTML="Email field is mandatory";
		}
		else{	
	 if(re.test(emailid.value)==true){
			console.log("not empty");
			// document.getElementById("ErrEmail").innerHTML="";
			// if(emailid.toString().match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})$/)){
				console.log("valid");
				document.getElementById("ErrEmail").style.display="block";
				document.getElementById("ErrEmail").innerHTML="Valid Email";
			}
			else if(re.test(emailid.value)==false){
				console.log("invalid");
				document.getElementById("ErrEmail").style.display="block";
				document.getElementById("ErrEmail").innerHTML="Invalid Email";
			}
		}

	}

pwd=document.getElementById("pwd").value;
	
function isPwd(){
		var re=/^[a-z0-9]+$/g;
		if(pwd.value.length<1 || pwd==null || pwd=="" ||pwd.value.trim()==""){
			document.getElementById("ErrPassword").style.display="block";
			document.getElementById("ErrPassword").innerHTML="Password is mandatory";
			document.getElementById("cnfPwd").value="";
			document.getElementById("ErrCnfPwd").innerHTML="";
		}	
		else{
			document.getElementById("ErrPassword").innerHTML="";
			console.log(pwd.value)
			if(re.test(pwd.value)==true){
				if(pwd.value.length>8 && pwd.value.length<12){
								document.getElementById("ErrPassword").style.display="block";
								document.getElementById("ErrPassword").innerHTML="Valid Password";
							}
							else if(pwd.value.length<8 || pwd.value.length>12){
								document.getElementById("ErrPassword").style.display="block";
								document.getElementById("ErrPassword").innerHTML="Password must be 8-12 characters long";
							}
			}
			else if(re.test(pwd.value)==false){
				document.getElementById("ErrPassword").style.display="block";
				document.getElementById("ErrPassword").innerHTML="Password must not contain special characters";
			}
		}
	}

	cnfPwd=document.getElementById("cnfPwd").value;

function isCnfPwd(){
			if(pwd.value.length<1 || pwd==null || pwd.length<1 || pwd.value.trim()==""){
				document.getElementById("cnfPwd").value="";
			}
			if(cnfPwd.value.length<1 || cnfPwd==null || cnfPwd.length<1 || cnfPwd.value.trim()==""){
				document.getElementById("ErrCnfPwd").style.display="block";
				document.getElementById("ErrCnfPwd").innerHTML="Confirm your password";
			}
			else{
				document.getElementById("ErrCnfPwd").innerHTML="";
			}

			if(cnfPwd.value!=pwd.value){
				document.getElementById("ErrCnfPwd").style.display="block";
				document.getElementById("ErrCnfPwd").innerHTML="Passwords donot match";
			}
			else{
				document.getElementById("ErrCnfPwd").style.display="block";
				document.getElementById("ErrCnfPwd").innerHTML="Passwords match";
			}
	}


function getYears(){
	var min=1980;
	var max=new Date().getFullYear();
	select = document.getElementById('year');
	for (var i = min; i<=max; i++){
    var opt = document.createElement('option');
    opt.value = i;
    opt.innerHTML = i;
    select.appendChild(opt);
	}
	}


	function isLeap(year){
		console.log("Function callled");
			if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) 
			{
				// alert("Leap");
				return true;  
			}
			else{
				// alert("Not leap");
			}
	}
	function isFeb(){
		month=document.getElementById("month");
		v_month=month.options[month.selectedIndex].value;
		// date=document.getElementById("date");
		year=document.getElementById("year");
		v_year=year.options[year.selectedIndex].value;
		// v_day=day.options[date.selectedIndex].value;
		console.log(v_year);
		if(isLeap(year)){
			// alert("if condition");
		}
		if(v_month=='02' && date.length==31){	
			date=document.getElementById("day");
			date=document.getElementById("day");
			date.remove(30);
			date.remove(29);
		}
		else if(v_month == '02' && date.length == 30){
					date.remove(29);
		}
		else if(v_month=='01' || v_month=='03' || v_month=='05' || v_month=='07' || v_month=='08' || v_month=='10' || v_month=='12'){
			date=document.getElementById("day");
			if(date.length==29){
				option=document.createElement("option");
				option2=document.createElement("option");
				option.text="30";
				option2.text="31";
				date.add(option);
				date.add(option2);
			}
			else if(date.length==30){
				option=document.createElement("option");
				option.text="31";
				date.add(option);
			}
		}
		else if(v_month=='04' || v_month=='06' || v_month=='09' || v_month=='11'){
			if(date.length==29){
				date=document.getElementById("date");
				option=document.createElement("option");
				option.text="30";	
				date.add(option);
			}
			else if(date.length==31){
				date=document.getElementById("date");
				date.remove(30);
			}	
		}
		calculateAge();
	}
	function calculateAge(){
	
		var month=document.getElementById("month");
		var day=document.getElementById("day");
		var year=document.getElementById("year");
	
		var v_month=month.options[month.selectedIndex].value;
		var v_date=date.options[day.selectedIndex].value;
		v_year=year.options[year.selectedIndex].value;
	
		var today=new Date();
		var this_year=0;
		if(today.getMonth() < v_month){
			this_year=1;
		}
		else if(today.getMonth()==v_month && today.getDate < v_date){
			this_year=1;
		}
		var age=today.getFullYear()-v_year-this_year;
		document.getElementById("age").value=age;
		if(age!=null || age!=""){
				document.getElementById("ErrBday").innerHTML="";
		}
		return true;
	}

function isChecked(){
	/*********Validation for Gender***********/

	rdMale=document.getElementById("residence1");
	rdFemale=document.getElementById("residence2");
	console.log(rdMale.checked);
	console.log(rdFemale.checked);
	if(rdMale.checked==true || rdFemale.checked==true){
		document.getElementById("ErrGender").innerHTML="";
	}
	if(rdMale.checked==false && rdFemale.checked==false){
		document.getElementById("ErrGender").style.display="block";
		document.getElementById("ErrGender").innerHTML="Please select your gender";
	}
	// if(rdMale.checked==true || rdFemale.checked==true){
	// 	document.getElementById("ErrGender").innerHTML="";
	// }

/*********Validation for Interest***********/

	val1=document.getElementById("checkbox_sample18");
	val2=document.getElementById("checkbox_sample19");
	val3=document.getElementById("checkbox_sample20");
	if(val1.checked==false && val2.checked==false && val3.checked==false){
		document.getElementById("ErrInterest").style.display="block";
		document.getElementById("ErrInterest").innerHTML="Please select atleast one interest";
		// alert("Please select atleast one interest");
	}
	else{
		document.getElementById("ErrInterest").innerHTML="";
	}
	if(val1.checked==true || val2.checked==true || val3.checked==true){
		document.getElementById("ErrInterest").innerHTML="";
	}
}

aboutYou=document.getElementById("aboutYou").value;

function isAbout(){
	console.log(aboutYou.length)
	if(aboutYou.value.length<1 || aboutYou===null || aboutYou===" " || aboutYou.trim==""){
		document.getElementById("ErrAboutYou").style.display="block";
		document.getElementById("ErrAboutYou").innerHTML="Please fill about you";
		// alert("Please fill in your first name.");
	}
	else{
		document.getElementById("ErrAboutYou").innerHTML="";
	}
}

function isCountry(){

	country=document.getElementById("country");
	v_country=month.options[country.selectedIndex].value;
	console.log(v_country);
	if(v_country==02 || v_country==03 || v_country==04){
		document.getElementById("other").style.display="none";
		document.getElementById("ErrOther").style.display="none";
		document.getElementById("ErrCountry").innerHTML="";
		document.getElementById("ErrOther").innerHTML="";
		// alert("1 out of 3 selected")
	}
	if(v_country==05){
		document.getElementById("other").style.display="block";
		document.getElementById("ErrCountry").innerHTML="";
		document.getElementById("ErrOther").innerHTML="";
		// alert("Other selected")
	}
	if(v_country==01){
		document.getElementById("ErrCountry").style.display="block";
		document.getElementById("ErrCountry").innerHTML="Please select a country";
		document.getElementById("ErrOther").innerHTML="";
	}	
} 

other=document.getElementById("other").value;

function isOther(){
	console.log(other.value)

		if(other.value.length<1 || other==null || other=="" || other.value.trim()==""){
			document.getElementById("ErrOther").style.display="block";
			document.getElementById("ErrOther").innerHTML="Enter your country name";
		}
		else{
			document.getElementById("ErrOther").innerHTML="";
		}
}

function isFile(){
	file=document.getElementById("uploadFile");
	console.log(file.files);
	if(file.files.length<1){
		console.log(file.files.length);
		document.getElementById("ErrAddFiles").style.display="block";
		document.getElementById("ErrAddFiles").innerHTML="Please attach a file";
		// document.getElementById("ErrAddFiles").innerHTML="";
	}
	else if(file.files.value!==null || file.value!=="" || file.value.trim!==""){
		document.getElementById("ErrAddFiles").innerHTML="Valid";
		
	}
}

function validate(){
	if(fname.length<1 || fname===null || fname===" " || fname.value.trim() == ""){
		document.getElementById("ErrFname").style.display="block";
		document.getElementById("ErrFname").innerHTML="First Name should not be empty";
	}
	else{
		document.getElementById("ErrFname").innerHTML="";
	}

	if(lname.length<1 || lname===null || lname===" " || lname.value.trim()==""){
		document.getElementById("ErrLname").style.display="block";
		document.getElementById("ErrLname").innerHTML="Last Name should not be empty";
		// alert("Please fill in your first name.");
	}
	else{
		document.getElementById("ErrLname").innerHTML="";
	}

	if(phno.length<1 || phno===null || phno==="" || phno.value.trim()==""){
		document.getElementById("ErrPhone").style.display="block";
		document.getElementById("ErrPhone").innerHTML="Phone field should not be empty";
	}
	else{
		document.getElementById("ErrPhone").innerHTML="";
	}

	if(emailid.value.length<1 || emailid==null || emailid=="" || emailid.value.trim()==""){
		console.log("Empty");
		document.getElementById("ErrEmail").style.display="block";
		document.getElementById("ErrEmail").innerHTML="Email field is mandatory";
	}
	else{
		document.getElementById("ErrEmail").innerHTML="";
	}

	if(pwd.value.length<1 || pwd==null || pwd=="" ||pwd.value.trim()==""){
		document.getElementById("ErrPassword").style.display="block";
		document.getElementById("ErrPassword").innerHTML="Password is mandatory";
	}	
	else{
		document.getElementById("ErrPassword").innerHTML="";
	}

	if(cnfPwd.value.length<1 || cnfPwd==null || cnfPwd.length<1 || cnfPwd.value.trim()==""){
		document.getElementById("ErrCnfPwd").style.display="block";
		document.getElementById("ErrCnfPwd").innerHTML="Confirm your password";
	}
	else{
		document.getElementById("ErrCnfPwd").innerHTML="";
	}

	isAbout();

	if(document.getElementById("age").value.trim()==""){
		document.getElementById("ErrBday").style.display="block";
		document.getElementById("ErrBday").innerHTML="Please select your birthdate";
	}
	else if(document.getElementById("age").value.length<1){
		document.getElementById("ErrBday").innerHTML="";
	}

	isChecked();
	isFile();
	isOther();

}

		//  if(pwd.value.length<8 || pwd.value.length>12){
		// 		document.getElementById("ErrPassword").style.display="block";
		// 		document.getElementById("ErrPassword").innerHTML="Password must be 8-12 characters long";
		// 	}
		
			// if(pwd.toString().match(/^[a-z0-9]+$/g) && pwd.value.length>8 && pwd.value.length<12){
			// 	document.getElementById("ErrPassword").style.display="block";
			// 	document.getElementById("ErrPassword").innerHTML="Valid Password";
			// }
			// else if(!pwd.toString().match(/^[a-z0-9]+$/g)){
			// 	document.getElementById("ErrPassword").style.display="block";
			// 	document.getElementById("ErrPassword").innerHTML="invalid";

			// }
		

			// if(!pwd.toString().match(/^[a-z0-9]+$/g) || pwd.length<8 || pwd.length>12){
			// 	document.getElementById("ErrPassword").innerHTML="Password must contain atleast 8-12 numbers or letters.";
			// }

			// if(re.test(pwd)==false || pwd.value.length>8 || pwd.value.length<12){
			// 	console.log("valid");
			// 	document.getElementById("ErrPassword").style.display="block";
			// 	document.getElementById("ErrPassword").innerHTML="Valid Password";
			// }
			// else{
			// 	document.getElementById("ErrPassword").style.display="block";
			// 	document.getElementById("ErrPassword").innerHTML="Invalid Password.";
			// }
		

			// else if(!emailid.toString().match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})$/)){
			// 						console.log("Invalid");
			// 	document.getElementById("ErrEmail").style.display="block";
			// 	document.getElementById("ErrEmail").innerHTML="Invalid email";
			// }
			// if(emailid.toString().match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/igm)){
			// 	console.log("valid");
			// 	document.getElementById("ErrEmail").style.display="block";
			// 	document.getElementById("ErrEmail").innerHTML="valid email";
			// }
			// else if(!emailid.toString().match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/igm)){
			// 	console.log("Invalid");
			// 	document.getElementById("ErrEmail").style.display="block";
			// 	document.getElementById("ErrEmail").innerHTML="Invalid email";
			// }


			// if(officeno.value.length!=12){
		// 	document.getElementById("ErrOffice").innerHTML="digits 12";
		// }
	// else if(officeno.value.match(/[0-9]/g)){
	// 	document.getElementById("ErrOffice").innerHTML="";
	// 	if(!officeno.value.match(/[0-9]{10,12}$/g)){
	// 		console.log("not 10");
	// 		document.getElementById("ErrOffice").style.display="block";
	// 		document.getElementById("ErrOffice").innerHTML="not 10 or 12";
	// 	}
	//  	else if(officeno.value.match(/[0-9]{10,12}$/g)){
	// 		console.log("exact 10");
			
	// 		document.getElementById("ErrOffice").style.display="block";
	// 		document.getElementById("ErrOffice").innerHTML="10 to 12";
	// 	}
	// }



		// if(officeno.value.match(/[0-9]{10}$/g)){
		// 	alert((officeno).toString.length);
		// 	document.getElementById("ErrOffice").style.display="block";
		// 	document.getElementById("ErrOffice").innerHTML="";
		// }
		// else if(!officeno.value.match(/^[0-9]{10}$/g)){
		// 	document.getElementById("ErrOffice").style.display="block";
		// 	document.getElementById("ErrOffice").innerHTML="must contain 10 or 12 numbers";
		// }
		// else if(!officeno.value.match(/^[0-9]{12}$/g)){
		// 	document.getElementById("ErrOffice").style.display="block";
		// 	document.getElementById("ErrOffice").innerHTML="must contain 10 or 12 numbers";
		// }
		// else if(officeno.value.match(/[0-9]{12}$/g)){
		// 	document.getElementById("ErrOffice").style.display="block";
		// 	document.getElementById("ErrOffice").innerHTML="";
		// }

		// else if(!officeno.value.match(/^[0-9]{10}$/g) || !officeno.value.match(/^[0-9]{12}$/g)){

		// }

		
	// if(phno.value.match(/^\d{10}$/)){
	// 	document.getElementById("ErrOffice").innerHTML="";
	// 

