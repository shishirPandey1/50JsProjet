const inputField=document.getElementById('password');
const outputField=document.getElementById('output');


inputField.addEventListener('input',function(){
    console.log(inputField.value);
    const password=inputField.value;
    if(password.length<8)
    {
        outputField.innerText='password is to short';
        outputField.style.color='red';
    }
    else{
        // outputField.innerText='password is long enough';
        // outputField.style.color='green';
        if(password.search(/[a-z]/)==-1)
        {
            outputField.innerText='small letter is missing';
            outputField.style.color='red';
        }
        else if(password.search(/[A-Z]/)==-1)
        {
            outputField.innerText='capital letter is missing'
        }
        else if(password.search(/[0-9]/)==-1)
        {
            outputField.innerText='password is missing number'
        }
        else if(password.search(/[!\@\#\$\%\^\&\*]/)==-1)
        {
            outputField.innerText='special character is missing';
        }
        else{
            outputField.innerText='password is strong';
            outputField.style.color='green';
        }
    }
})