function validateForm(){
    let x = document.vlaidTeszt.keresztnev.value;
if ( x === ""){
    alert("A mező kitöltése kötelező!")
    return false;
}    
return true;
}