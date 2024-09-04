console.log("Script running...")

document.querySelector('.cross').style.display='none';
document.querySelector('.hammenu').addEventListener("click", () =>{
    document.querySelector('.sidebar').classList.toggle('sidebargo');

    // if(document.querySelector('.sidebar').classList.contains('sidebargo')){

    //     document.querySelector('.hammenu').style.display='inline'
    //     document.querySelector('.cross').style.display='none' 
    // }
    // else{
    //     document.querySelector('.hammenu').style.display='none'
    //     document.querySelector('.cross').style.display='inline'
    
    // }
    

} )


