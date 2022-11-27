let submitButton= document.querySelector('#myForm #btn');
let nameInput= document.querySelector('#myForm #name');
let emailInput= document.querySelector('#myForm #email');
let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
let messageErorr=document.querySelector('#msg');
submitButton.addEventListener('click',function(e){
    e.preventDefault();
    let myName =nameInput.value;
    let myEmail =emailInput.value;
    // console.log( myEmail);
    let outputList=document.querySelector('.list');
    //    console.log( outputList);
    if( myName=='' || myEmail=='' ){
        alert('you should fill form');
    }
   
    else if (!myEmail.match(pattern)) {
       
        messageErorr.innerHTML='your email invalid';
        emailInput.value='';
        emailInput.focus();
    }
    else{
    outputList.innerHTML +='<li>'  +myName+ '\n' +myEmail +'</li>';
    nameInput.value='';
    emailInput.value='';
    messageErorr.innerHTML='';
    }

})
