function addListItem (text){

    const container = document.querySelector(".commentList");

    // Create li Element

    const newElement = document.createElement("li")

    // Add text

    newElement.textContent = text

    // Add item to page

    container.appendChild(newElement)

}

function handleForm (e) {

    e.preventDefault()
    
    //Get reference to form
    const form = e.target;
    
    addListItem(form.text.value)
    
    }

document.getElementById("form").addEventListener("submit", handleForm)

// FETCH STUFF

const postUrl1 = "http://localhost:4000/userPosts/1/singleJournalEntry"
const p = document.getElementById("singleEntry")

//FIRST POST ENTRY
fetch(postUrl1)
.then(resp => resp.text())
.then(data => {
    p.textContent = data
})

const commentUrl1 = "http://localhost:4000/userPosts/1/commentsSection"
const comment1 = document.getElementById("comment1")
const newCom = document.createElement("li")

fetch(commentUrl1)
.then(resp => resp.text())
.then(data => {
    newCom.textContent = data
    comment1.appendChild(newCom)
    
})
