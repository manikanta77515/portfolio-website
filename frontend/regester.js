const form=document.getElementById('register-form')
const name=document.getElementById('name')
const mail=document.getElementById('email')
const password=document.getElementById('password')
const confirm=document.getElementById('confirmpassword')
const mobile=document.getElementById('mobile')



form.addEventListener('submit',function(e){
    e.preventDefault();
    validateInputs();
})


function validateInputs(){
    const nameVal=nameInput.value.trim();
    const emailVal=email.value.trim();
    const passwordVal=password.value.trim();
    const confirmVal=confirmpassword.value.trim();
    const mobileVal=mobile.value.trim()

}


if(nameVal===''){
    setError(nameInput,'define your correct name')
} else{
    setSuccess(nameInput)
}


if(!isValidEmail(emailVal)){
    setError(email,'type your correct email')
} else{
    setSuccess(email)
}

if(passwordVal.lenth <6){
    setError(password,'password atleast 7characters')
} else{
    setSuccess(password)
}

if(passVal!==confirmVal){
    setError(confirmVal,'confirm same as password')
} else{
    setSuccess(confirmVal)
}

 if (!/^\d{10}$/.test(mobileVal)) {
    setError(mobile, 'Enter 10 digit number');
  } else {
    setSuccess(mobile);

  }




