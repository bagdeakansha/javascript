function validate(){
    let nm=document.getElementById("name").value;
    let ct=document.getElementById("contact").value;
    let em=document.getElementById("mail").value;
    let pass=document.getElementById("pass").value
    let cpass=document.getElementById("cpass").value

    if(nm==""){
        alert("please fill your name")
        document.getElementById("name").focus()
        return false
    }

    else if(ct==""){
        alert("please fill your contact")
        document.getElementById("contact").focus()
        return false
    }

    else if(isNaN(ct)){//not a no
        alert("only digits are allowed")
        document.getElementById("contact").focus()
        return false
    }

    else if(ct.length!=10){
        alert("10 no are allowed")
        document.getElementById("contact").focus()
        return false
    }
    else if(em==""){
        alert("enter your mail")
        document.getElementById("mail").focus()
        return false
    }
    else if(!(em.includes("@"))){
        alert("plz add @ in your mail")
        document.getElementById("mail").focus()
        return false
    }

    else if(pass==""){
        alert("please fill your password")
        document.getElementById("pass").focus()
        return false
    }
    else if(!(pass.match(/[~!@#$%^&*()_+]/))){
        alert("please fill one special character")
        document.getElementById("pass").focus()
        return false
    }


    else if(cpass!=pass){
        alert("mismatch password")
        document.getElementById("cpass").focus()
        return false
    }

    






}