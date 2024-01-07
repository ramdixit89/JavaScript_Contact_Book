//set contact

function addContact()
{
    let cName = document.getElementById("name").value.toUpperCase();
    let cNumber = document.getElementById("number").value;
    let displayNotification = document.getElementById("displayNoti");
    if(cName == "" || cNumber == "")
    {
      displayNotification.innerHTML = "Please enter details !";
      displayNotification.style.color = "red";
    }
    else
    {
        //set Items
        localStorage.setItem(cName,cNumber);
        displayNotification.innerHTML = "Successfully Added New contact";
        displayNotification.style.color = "Green";
    }
    setInterval(() =>
    {
        displayNotification.innerHTML = "";
    },2000);
}
function showContact(){
    alert("hello")
    let cName = document.getElementById("getContactName").value;
    let displayC = document.getElementById("displayContact");
    if(cName.value === ""){
         displayC.innerHTML = "Empty!";
         displayC.style.color = "red";
         }else{
            let cNum = localStorage.getItem(cName.value);
            
            if(cNum){
                displayC.innerHTML = `Phone Number: ${cNum}`;
                displayC.style.color = "green";
            }else{
                displayC.innerHTML = "Contact not found";
                displayC.style.color = "red";
            }
         }
}
const getDetailButton = document.getElementById("getDetailButton"); // Assuming your button ID is "getDetailButton"
getDetailButton.addEventListener("click", showContact);