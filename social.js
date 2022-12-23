function login(){
    var user = document.getElementById("Username").value 
    localStorage.setItem("Username: ", user)
    window.location ="socials_page.html"
}