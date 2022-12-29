function validateForm() {
    let name = document.getElementById('uName').value
    let password = document.getElementById('uPassword').value
    if (name == "") {
        document.getElementById('uMessage').innerHTML = "Please Enter User Name"
    }
    if (password == "") {
        document.getElementById('pMessage').innerHTML = "Please Enter Password"
    }
    return false
}