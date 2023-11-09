// const noteContainer=document.querySelector(".note-Container")
// const modalContainer=document.querySelector(".modalContainer")
// const form=document.querySelector("form")
// const titleInput=document.querySelector("#title")
// class note{
//     constructor(title,body){
//     this.title=title;
//     this.body=body;
//     this.id=Math.random();
//     }
// }
// function getNotes(){
//     let notes;
//     if(localStorage.getItem("noteApp.notees")==null){
//         notes=[];
//     }
//     else{
//         notes=JSON.parse(localStorage.getItem("notesApp.notes"));
//     }
//     return notes;
// }
// function addNotesTolocalStorage(note){
//     const notes=getNotes;
//     notes.push(note);
//     localStorage.setItem("noteApp.notes",JSON.stringify(notes));
// }
// function removeNote(id){
//     const notes=getNotes();
//     notes.forEach((note,index) => {
//         if(note.id===id){
//             notes.splice(index,1);
//         }
//         localStorage.setItem("noteApp.notes",JSON.stringify(notes));
        
//     });
// }
// function addNoteToList(note) {
//     const newUINote = document.createElement("div");
//     newUINote.classList.add("note");
//     newUINote.innerHTML = `
//       <span hidden>${note.id}</span>
//       <h2 class="note__title">${note.title}</h2>
//       <p class="note__body">${note.body}</p>
//       <div class="note__btns">
//         <button class="note__btn note__view">View Detail</button>
//         <button class="note__btn note__delete">Delete Blog</button>
//       </div>
//     `;
//     noteContainer.appendChild(newUINote);
//   }
  
//   function displayNotes() {
//     const notes = getNotes();
//     notes.forEach((note) => {
//       addNoteToList(note);
//     });
//   }
  
//   function showAlertMessage(message, alertClass) {
//     const alertDiv = document.createElement("div");
//     alertDiv.className = `message ${alertClass}`;
//     alertDiv.appendChild(document.createTextNode(message));
//     form.insertAdjacentElement("beforebegin", alertDiv);
//     titleInput.focus();
//     setTimeout(() => alertDiv.remove(), 2000);
//   }
  
//   function activateNoteModal(title, body) {
//     const modalTitle = document.querySelector(".modal__title");
//     const modalBody = document.querySelector(".modal__body");
//     modalTitle.textContent = title;
//     modalBody.textContent = body;
//     modalContainer.classList.add("active");
//   }
  
//   const modalBtn = document
//     .querySelector(".modal__btn")
//     .addEventListener("click", () => {
//       modalContainer.classList.remove("active");
//     });
  
//   noteContainer.addEventListener("click", (e) => {
//     if (e.target.classList.contains("note__view")) {
//       const currentNote = e.target.closest(".note");
//       const currentTitle = currentNote.querySelector(".note__title").textContent;
//       const currentBody = currentNote.querySelector(".note__body").textContent;
//       activateNoteModal(currentTitle, currentBody);
//     }
//     if (e.target.classList.contains("note__delete")) {
//         const currentNote = e.target.closest(".note");
//         showAlertMessage("Your Blog was permanently deleted", "remove-message");
//         currentNote.remove();
//         const id = currentNote.querySelector("span").textContent;
//         removeNote(Number(id));
//       }
//     });
    
//     document.addEventListener("DOMContentLoaded", displayNotes);
    
//     form.addEventListener("submit", (e) => {
//       e.preventDefault();
//       const noteInput = document.querySelector("#note");
    
//       if (titleInput.value.length > 0 && noteInput.value.length > 0) {
//         const newNote = new Note(titleInput.value, noteInput.value);
//         addNoteToList(newNote);
//         addNotesToLocalStorage(newNote);
//         titleInput.value = "";
//         noteInput.value = "";
//         showAlertMessage("Blog successfully added", "success-message");
//         titleInput.focus();
//       } else {
//         showAlertMessage("Please add both a title and a Blog", "alert-message");
//       }
//     });

function submitForm() {
    var title = document.getElementById('title').value;
    var content = document.getElementById('content').value;
    var image = document.getElementById('image').files[0];
    var video = document.getElementById('video').files[0];

    var dataSection = document.getElementById('dataSection');

    var newData = "<div class='card'>" +
      "<div class='card-header'>" +
      "<h3 class='card-title'><b>Title:</b>" + title + "</h3>" +
      "</div>" +
      "<div class='card-body'>" +
      "<p><b>Content: </b>" + content + "</p>";

    if (image) {
      var imagePreview = document.createElement('img');
      imagePreview.src = URL.createObjectURL(image);
      imagePreview.style.maxWidth = '100%';
      imagePreview.style.height = 'auto';
      imagePreview.style.marginTop = '10px';
      newData += "<p><b>Image:</b></p>";
      newData += "<div class='card-body-image'>" +
        "<img class='preview' src='" + imagePreview.src + "' alt='Selected Image'>" +
        "</div>";
    }
    
    if (video) {
      var videoPreview = document.createElement('video');
      videoPreview.src = URL.createObjectURL(video);
      videoPreview.controls = true;
      videoPreview.autoplay = true;
      videoPreview.style.maxWidth = '100%';
      videoPreview.style.height = 'auto';
      videoPreview.style.marginTop = '20px';
      newData += "<p><b>Video:</b></p>";
      newData += "<div class='card-body-video'>" +
        "<video class='video-preview' src='" + videoPreview.src + "' controls autoplay></video>" +
        "</div>";
    }

    newData += "</div></div>";

    dataSection.innerHTML += newData;

    document.getElementById('title').value = '';
    document.getElementById('content').value = '';
    document.getElementById('image').value = '';
    document.getElementById('video').value = '';
  }