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
        liDOM.innerHTML = task.value
        taskDOM.value = ""

        liDOM.onclick = check;
        
        //close butonuna tıklayınca sil
        let closeButton = document.createElement("span");
        closeButton.textContent = "\u00D7";
        closeButton.classList.add("close");
        closeButton.onclick = removeButton;
        
        liDOM.append(closeButton);
        listDOM.append(liDOM);
        inputElement.value = ("");

    }

}

function removeButton(){
    this.parentElement.remove();  
  }

  function check(){
    this.classList.toggle("checked");  
  }
