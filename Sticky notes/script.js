const container = document.getElementById('container');
const btn=document.getElementsByClassName('btn')[0];


function getStorage(){
    return JSON.parse(localStorage.getItem('sticky-note') || "[]")
}
//using local storage data this creates sticky notes
getStorage().forEach(element => {
    const textElement=createTextElement(element.id,element.content);
    container.insertBefore(textElement,btn);
});

//Create a new Textarea
function createTextElement(id,content){
    const text=document.createElement('textarea');
    text.classList.add('sticky');
    text.value=content;
    text.placeholder="Enter Your Note";

    text.addEventListener('change',()=>{
        updateNote(id,text.value);
    })
    text.addEventListener('dblclick',()=>{
        const check=confirm("Are you sure do you wanna delete?")
        if(check){
            deleteNotes(id,text);
        }
    })
    return text;
}

//this create new random id and call createText Element and add empty contennt in local storage
function addNote(){
    const notes=getStorage();
    const newob={
        id:Math.floor(Math.random()*10000),
        content:""
    }
    const netnote=createTextElement(newob.id,newob.content);
    container.insertBefore(netnote,btn);
    notes.push(newob);
    saveNote(notes)
}
btn.addEventListener('click',()=>addNote());

//save note to local storage
function saveNote(notes){
    localStorage.setItem('sticky-note',JSON.stringify(notes));
}

//Save typed content to local storage
function updateNote(id,content){
    const notes=getStorage();
    const elementNote=notes.filter((note)=>note.id==id)[0];
    elementNote.content=content;
    saveNote(notes)
}

// Delete Element
function deleteNotes(id,element){
    const notes=getStorage().filter((note)=>note.id!=id);
    saveNote(notes)
    container.removeChild(element);
}