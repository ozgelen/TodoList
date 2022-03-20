//Html elementlerine ulaştık
let btnDOM      = document.querySelector("#liveToastBtn")
let taskDOM     = document.querySelector("#task")
let listDOM     = document.querySelector("#list")

//Ekle butonuna tıklatınca çalışacak fonksiyon
btnDOM.addEventListener("click", listAdd)


//Listeye değer girince yapılacak işlem
function listAdd(){
    if(taskDOM.value == ""){
        $(".error").toast("show")
    }
    else{
        $(".success").toast("show")
        //eklenecek değer
        let liDOM = document.createElement('li')
        listDOM.appendChild(liDOM)
        liDOM.innerHTML =taskDOM.value
        taskDOM.value = ""

        //close butonuna tıklayınca sil
        let closeButton = document.createElement("span");
        closeButton.textContent = "\u00D7";
        closeButton.classList.add("close");
        closeButton.onclick = removeButton;
        
        let checkButton = document.createElement("span");
        checkButton.textContent = "✔"
        checkButton.classList.add("checkBtn");
        checkButton.onclick = check;

        liDOM.append(checkButton,closeButton )
        listDOM.append(liDOM);
        inputElement.value = ("");  

    }

}

function removeButton(){
    this.parentElement.remove();  
  }

  function check(){
    this.textContent ="Yapıldı"
   
  }

  