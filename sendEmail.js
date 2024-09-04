function emailSend(){
    const email= document.getElementById('email');
    const phone= document.getElementById('phone');

    // var messageBody = "Email:" + email + "<br/> Phone:" + phone;}
    const submit=document.getElementsByClassName('form-contact')[0];
    submit.addEventListener('submit', (e)=>{
        e.preventDefault();
        console.log("Clicked");

        let ebody= `
        <b>Email:</b>${email.value}
        <br>
        <b>Phone Number:</b>${phone.value}`

    
    email.send({
        SecureToken : "294a79ae-abbc-4539-8add-78a4d1cfee36",
        To : 'prathamesh4402@gmail.com',
        From : "prathamesh4402@gmail.com",
        Subject : "Email from: " +email.value,
        Body : ebody
    }).then(
      message => alert(message)
    );
    
})};