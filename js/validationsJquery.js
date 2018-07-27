$(document).ready(function(){
    $('#fname').keyup(function(){
        isFname();
    });
    $('#lname').keyup(function(){
        isLname();
    });		
    $('#phno').keyup(function(){
        isPhone();
    });
    $('#officeno').keyup(function(){
        isOfficeNumber();
    });
    $('#emailid').keyup(function(){
        isEmail();
    });
    $('#pwd').keyup(function(){
        isPassword();
    });
    $('#cnfPwd').keyup(function(){
        isCnfPwd();
    });
    $('#year').click(function(){
    	getYears();
	});	
    $('#year').on('change',function(){
    	calculateAge();
	});	
	$('#month').click(function(){
		if($("#month").val()==02){
			$("#date option[value=" + 30 + "]").hide();
			$("#date option[value=" + 31 + "]").hide();
		}
		else{
			$("#date option[value=" + 30 + "]").show();
			$("#date option[value=" + 31 + "]").show();
		}
    });
    $('#aboutYou').keyup(function(){
        isAbout();
    });
    $('#country').on('change',function(){
    	isCountry();
    });	
    $('#other').keyup(function(){
        isOther();
    });
    $('#uploadFile').on('change',function(){
    	isFile();
    });	
    $(".next_btn").click(function(){
		validate();
    });
    $("#residence1").on('change',function(){
        isRadioSelected();
    });
    $("#residence2").on('change',function(){
        isRadioSelected();
    });
    $("#checkbox_sample18").on('change',function(){
        isCheckboxChecked();
    });
    $("#checkbox_sample19").on('change',function(){
        isCheckboxChecked();
    });
    $("#checkbox_sample20").on('change',function(){
        isCheckboxChecked();
    });
});




phno=$("#phno").val();
officeno=$("#officeno").val();
about=$("#about").val();
emailid=$("#emailid").val();
pwd=$("#pwd").val();

age=$("#age").val();

ErrPassword=$("#ErrPassword").val();

ErrCnfPwd=$("#ErrCnfPwd").val();

ErrBday=$("#ErrBday").val();

ErrGender=$("#ErrGender").val();

ErrInterest=$("#ErrInterest").val();
$("#ErrInterest").hide();
ErrAboutYou=$("#ErrAboutYou").val();
$("#ErrAboutYou").hide();
ErrCountry=$("#ErrCountry").val();
$("#ErrCountry").hide();
ErrOther=$("#ErrOther").val();
$("#ErrOther").hide();
ErrAddFiles=$("#ErrAddFiles").val();
$("#ErrAddFiles").hide();

$('#fname').on('change',function(){
    isFname();
});
$('#fname').keyup(function(){
    isFname();
});	
console.log("validations");
function isFname(){
    fname=$("#fname").val();
    console.log("isFname");

    if(fname.trim()==''||fname == null || fname == ""){
        console.log("Empty");
        $("#ErrFname").text("First name cannot be empty");
        $("#ErrFname").show();
        $("#fname").focus();
        
    }
    else{
        $("#ErrFname").hide();
        
    }
    if(fname.match(/[0-9\s!@#$%^&*]/g)){
        console.log("Digits");
        $("#ErrFname").text("First name should not contain spaces, numbers or special characters");
        $("#ErrFname").show();
        $("#fname").focus(); 
    }
    else if(fname.match(fname.match(/[^0-9]/g))){
        $("#ErrFname").hide();
        
    }
}

function isLname(){
    lname=$("#lname").val();
    console.log("isLname");
    if(lname.trim()==''||lname == null || lname == ""){
        console.log("Empty");
        $("#ErrLname").text("Last name cannot be empty");
        $("#ErrLname").show();
        $("#lname").focus();
      
    }
    else{
        $("#ErrFname").hide();

    }
    if(lname.match(/[0-9\s!@#$%^&*]/g)){
        console.log("Digits");
        $("#ErrLname").text("Last name should not contain spaces, numbers or special characters");
        $("#ErrLname").show();
        $("#lname").focus();

    }
    else if(lname.match(/[^0-9]/g)){
        $("#ErrLname").hide();
        $("#ErrLname").text("Last name should not contain spaces, numbers or special characters");
        $("#ErrLname").show();

    }
    else{

    }
}

function isPhone(){

    phno=$("#phno").val();
    console.log($("#phno").val());
    if(phno.trim()=="" || phno.length<1 || phno==null){

		$("#ErrPhone").text("Please fill in your phone number.");
        $("#ErrPhone").show();
        $("#phno").focus();
	
    }

    else{

        $("#ErrPhone").hide();
    }
    if(phno.match(/[a-zA-Z@.&%$]/g)){

        console.log("digits not found");
        $("#ErrPhone").text("Phone field must contain only numbers, #, + or *");
        $("#ErrPhone").show();

    }
    if(phno.match(/[0-9*#+]/g)){

        console.log("digits found");
        if(phno.length===10 || phno.length===12){
            $("#ErrPhone").text("Valid phone number");
            $("#ErrPhone").css("color","green");
            $("#ErrPhone").show();
        }
        else if(phno.length!=10 || phno.length!=12){
            $("#ErrPhone").text("Number must be 10 or 12 digits long");
            $("#ErrPhone").show();
        }

    }
    if(phno.match(/[#*+]/g)){
        if(phno.match(/[a-z]/)){
            $("#ErrPhone").text("Phone field must contain only numbers, #, + or *");
            $("#ErrPhone").show();
        }
    }
}

function isOfficeNumber(){

    office=$("#officeno").val();
    console.log($("#officeno").val());
    if(office.trim()=="" || office.length<1 || office==null){

		$("#ErrOffice").text("Please fill in your phone number.");
        $("#ErrOffice").show();
        $("#officeno").focus();
	
    }

    else{

        $("#ErrOffice").hide();
    }
    if(office.match(/[a-zA-Z@.&%$]/gm)){

        console.log("digits not found");
        $("#ErrOffice").text("Phone field must contain only numbers, #, + or *");
        $("#ErrOffice").show();

    }
    if(office.match(/[0-9*#+]/g)){


        console.log("digits found");
        if(office.length===10 || office.length===12){
            $("#ErrOffice").text("Valid phone number");
            $("#ErrOffice").css("color","green");
            $("#ErrOffice").show();
        }
        else if(office.length!=10 || office.length!=12){
            $("#ErrOffice").text("Number must be 10 or 12 digits long");
            $("#ErrOffice").show();
        }
        
    }
    if(office.match(/[#*+]/g)){
        if(office.match(/[a-z]/)){
            $("#ErrOffice").text("Phone field must contain only numbers, #, + or *");
            $("#ErrOffice").show();
        }
    }
}

function isEmail(){
    var re=/[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z0.9]{2,5}(\.[a-zA-Z]{2,5}){0,1}$/;
    // var re=/^[a-zA-Z]+([\.-]?\w+)*@[a-z]+([\.-]?[a-z]+)+(\.\w{2,3}){0,1}$/;

    emailid=$("#emailid").val();
    if(emailid.trim()=="" || emailid.length<1 || emailid==null){

        $("#ErrEmail").text("Please fill in your email.");
        $("#ErrEmail").show();
        $("#emailid").focus();
    
    }
    else{	
        if(re.test(emailid)==true){
            console.log("not empty");
            console.log("valid");
            $("#ErrEmail").text("Email id is valid");
            $("#ErrEmail").css("color","green");
            $("#ErrEmail").show();

        }
        else if(re.test(emailid)==false){
            console.log("invalid");
            $("#ErrEmail").text("Email id is invalid");
            $("#ErrEmail").show();
        }
    }
}

function isPassword(){
    pwd=$("#pwd").val();
    var re=/^[a-z0-9]+$/g;
    if(pwd.length<1 || pwd==null || pwd=="" ||pwd.trim()==""){
        
        $("#ErrPassword").text("Password is mandatory");
        $("#ErrPassword").show();
        $("#cnfPwd").text("");
        $("#ErrCnfPwd").hide();
    }	
    else{
        $("#ErrPassword").hide();
        console.log(pwd)
        if(re.test(pwd)==true){
            if(pwd.length>8 && pwd.length<12){
                            
                            $("#ErrPassword").text("Valid Password");
                            $("#ErrPassword").css("color","green");
                            $("#ErrPassword").show();

                        }
                        else if(pwd.length<8 || pwd.length>12){
                            
                            $("#ErrPassword").text("Password must be 8-12 characters long");
                            $("#ErrPassword").show();
                        }
        }
        else if(re.test(pwd)==false){
            
            $("#ErrPassword").text("Password must not contain special characters");
            $("#ErrPassword").show();
        }
    }
}

function isCnfPwd(){
    pwd=$("#pwd").val();
    cnfPwd=$("#cnfPwd").val();
    // if(pwd.length<1 || pwd==null || pwd.length<1 || pwd.trim()==""){
    //     $("#cnfPwd").text("");
    // }
    console.log(cnfPwd)
    if(cnfPwd.length<1 || cnfPwd==null || cnfPwd.trim()=="" || cnfPwd==""){
        console.log("empty");
        $("#ErrCnfPwd").text("Confirm your password");
        $("#ErrCnfPwd").show();
    }
    else{
        $("#ErrCnfPwd").hide();
    }

    if(cnfPwd!=pwd){
        
        $("#ErrCnfPwd").text("Passwords donot match");
        $("#ErrCnfPwd").show();
    }
    else if(cnfPwd==pwd){
        
        $("#ErrCnfPwd").text("Passwords match");
        $("#ErrCnfPwd").css("color","green");
        $("#ErrCnfPwd").show();
    }
    else{
        $("#ErrCnfPwd").hide();
    }
}

function getYears(){
    $("#ErrBday").text("");
    if($("#year").find(":selected").val()==undefined){
        $("#ErrBday").text("Please select your birthdate");
        $("#ErrBday").hide();
    }
	var min=1980;
	var max=new Date().getFullYear();
	select = document.getElementById('year');
	for (var i = min; i<=max; i++){
    var opt = document.createElement('option');
    opt.value = i;
    opt.innerHTML = i;
    select.appendChild(opt);
    }
    if($("#year").find(":selected").val()!=""){
        $("#ErrBday").text("");
        $("#ErrBday").hide();
    }
}

function calculateAge(){
	var v_month=$("#month").find(":selected").val();
	var v_date=$("#date").find(":selected").val();
	var v_year=$("#year").find(":selected").val();
	console.log(v_month);
	console.log(v_date);
	console.log(v_year);
	var today=new Date();
	var this_year=0;
	if(today.getMonth() < v_month){
		this_year=1;
	}
	else if(today.getMonth()==v_month && today.getDate < v_date){
		this_year=1;
	}
	var age=today.getFullYear()-v_year-this_year;
	console.log(age);
	$("#age").val(age);
	return;
}	

function isRadioSelected(){

    if($("#residence1").is(":checked")==false && $("#residence2").is(":checked")==false){

		$("#ErrGender").text("Please select your gender");
		$("#ErrGender").show();
    }
    if($("#residence1").is(":checked")==true || $("#residence2").is(":checked")==true){

		$("#ErrGender").text("");
		$("#ErrGender").hide();
    }
    
}

function isCheckboxChecked(){
    if($("#checkbox_sample18").is(":checked")==false && $("#checkbox_sample19").is(":checked")==false && $("#checkbox_sample20").is(":checked")==false){
        $("#ErrInterest").text("Please select atleast one interest");
        $("#ErrInterest").show();
	
    }
    if($("#checkbox_sample18").is(":checked")==true || $("#checkbox_sample19").is(":checked")==true || $("#checkbox_sample20").is(":checked")==true){
        $("#ErrInterest").text("");
        $("#ErrInterest").hide();
		
	}
}

function isAbout(){
    aboutYou=$("#aboutYou").val();
	console.log($("#aboutYou").val())
	if(aboutYou===null || aboutYou===" " || aboutYou.trim()==""){
		
        $("#ErrAboutYou").text("Please fill about you");
        $("#ErrAboutYou").show();
		// alert("Please fill in your first name.");
	}
	else{
        $("#ErrAboutYou").text("");
        $("#ErrAboutYou").hide();
	}
}

function isCountry(){

	country=$("#country");

    v_country=$("#country").find(":selected").val();
	console.log(v_country);
	if(v_country=='India' || v_country=='USA' || v_country=='Australia'){
		$("#other").hide();
		$("#ErrOther").hide();
		$("#ErrCountry").text("");
		$("#ErrOther").text("");
		// alert("1 out of 3 selected")
	}
	if(v_country=='Other'){
		$("#other").show();
		$("#ErrCountry").text("");
		$("#ErrOther").text("");
		// alert("Other selected")
	}
	if(v_country=='Select Country'){
		$("#other").hide();
        $("#ErrCountry").text("Please select a country");
        $("#ErrCountry").show();
		$("#ErrOther").text("");
	}	
} 

function isOther(){
    other=$("#other").val();
	console.log(other)

		if(other.length<1 || other==null || other=="" || other.trim()==""){
			
            $("#ErrOther").text("Enter your country name");
            $("#ErrOther").show();
		}
		else{
            $("#ErrOther").text("");
            $("#ErrOther").hide();
        }
        if(other.match(/[0-9!@#$%^&*]/g)){
            // console.log("Digits");
            $("#ErrOther").text("Country name should not contain numbers or special characters");
            $("#ErrOther").show();
            $("#other").focus(); 
        }
        else {
            $("#ErrOther").hide();
            
        }
}

function isFile(){
    file=$("#uploadFile").val();
    console.log(file);
	console.log(file.length);
	if(file.length<1){
		console.log(file.length);
		
        $("#ErrAddFiles").text("Please attach a file");
        $("#ErrAddFiles").show();
		// document.getElementById("ErrAddFiles").innerHTML="";
	}
	else if(file!==null || file!=="" || file.trim!==""){
        $("#ErrAddFiles").text("");
        $("#ErrAddFiles").hide();
		
	}
}

function validate(){
    isFname();
    isLname();
    isPhone();
    isOfficeNumber();
    isEmail();
    isPassword();
    isCnfPwd();
    isRadioSelected();
    isCheckboxChecked();
    isAbout();
    isCountry();
    isOther();
    isFile();
    console.log($("#age").val().trim());
    console.log($("#year").find(":selected").val());

    if($("#age").val().length<0){
        $("#ErrBday").text("Please select your birthdate");
        $("#ErrBday").show();
    }
	
        // $("#ErrBday").text("");
        // $("#ErrBday").hide();
    
    country=$("#country");
    v_country=$("#country").find(":selected").val();
    if(v_country=='Other'){
        if($("#other").val().trim()=="" || $("#other").val().length=="" || $("#other").val()==null){
            $("#ErrOther").text("Please enter your country name");
            $("#ErrOther").show();
        }
    }
    else{
        $("#ErrOther").hide();
    }
}