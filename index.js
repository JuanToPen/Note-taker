const button = document.getElementById("button")
const table = document.getElementById("table")
const preview = document.getElementById("preview")
const modal = document.getElementById("theModal")
const escapeModal = document.getElementById("closeModal")
const modalText = document.getElementById("modalText")
const regex = /[0-9]/
let noteNumber = 0

button.addEventListener("click",() =>{
    noteNumber += 1
    if(preview !== null){
        preview.remove()
    }
    let entireNote = document.createElement("p")
    entireNote.innerText = document.getElementById("input").value
    entireNote.setAttribute("id",`Note ${noteNumber}`)
    document.body.append(entireNote)
    entireNote.style.display = "none"
    let newNote = document.createElement("div")
    let header = document.createElement("h3")
    let text = document.createElement("p")
    let viewButton = document.createElement("button")
    newNote.setAttribute("class","noteContainers")
    header.setAttribute("class","headers")
    text.setAttribute("class","texts")
    viewButton.setAttribute("class","viewButtons")
    if (entireNote.innerText.length > 80){
        text.innerText = entireNote.innerText.slice(0,80) + "..."
    }else{
        text.innerText = document.getElementById("input").value
    }
    header.innerText = `Note ${noteNumber}`
    viewButton.innerText = "View detail"
    table.appendChild(newNote)
    newNote.appendChild(header)
    newNote.appendChild(text)
    newNote.appendChild(viewButton)
})

table.addEventListener("click",(e) =>{
    if (e.target.classList.contains("viewButtons")){
        modal.style.display = "flex"
        modal.style.justifyContent = "center"
        modal.style.alignItems = "center"
        let arr = e.target.previousElementSibling.previousElementSibling.innerText.split("")
        let filter = arr.filter((v,i) =>{
            if(regex.test(v)){
                return v
            }
        })
        let number = parseInt(filter)
        modalText.innerText = document.getElementById(`Note ${number}`).innerText
    }
})

escapeModal.addEventListener("click",()=>{
    modal.style.display = "none"
})