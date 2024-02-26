function validateForm() {
    let userName = document.getElementById( "userName" ).value;
    let password =document.getElementById("password").value;
    let msg = document.getElementById("msg").value;
    const mySet =new Set([])
    if (!userName.startsWith('cademy_') && userName.length <= 12) {
        mySet.add(false);
    }
    

    if (password.length < 15 && !(/[ _@]/.test(password))) {
        mySet.add(false);
    }
    if (msg.length < 30) {
    mySet.add(false);
    }
    if (msg.includes('israel')) {
        alert('Undefined');
    
    }
    if (mySet.size === 0) {
        alert('Sent Successfully!');
    }
    else{
        alert("Please check your inputs!");
    } 
}

