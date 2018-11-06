/*  global variables for 'name' attribute incrementing  */
var sectionName = 0;
var textboxName = 0;

function increment(x){
    /*  function called to increment 'name' attributes    */
    x += 1;
}

function deleteElement(parentId, childId){
    if(childId == parentId){
        alert("This field cannot be removed.");
    }
    else if(document.getElementById(childId)){
        var child = document.getElementById(childId);
        var parent = document.getElementById(parentId);
        parent.deleteChild(child);
    }
    else{
        alert("Field has already been removed or does not exist");
        return false;
    }
}

function buildSection(){
    /*  function called to generate a new section including button controls */
    var sectionContainer = document.createElement('span');
    var sectionTitle = document.createElement("INPUT");
    var subsectionButton = document.createElement('button');
    var subsectionButtonText = document.createTextNode("Create Subsection");
    var textboxButton = document.createElement('button');
    var textboxButtonText = document.createTextNode("Create Textbox");
    subsectionButton.appendChild(subsectionButtonText);
    textboxButton.appendChild(textboxButtonText);
    sectionTitle.setAttribute("type", "text");
    sectionTitle.setAttribute("placeholder", "Section Title");
    sectionTitle.setAttribute("cols", "20");
    sectionTitle.setAttribute("rows", "1");
    var removeButton = document.createElement('button');
    var removeButtonText = document.createTextNode("Delete");
    removeButton.appendChild(removeButtonText);
    increment(sectionName);
    sectionTitle.setAttribute("Name", "sectiontitle_" + sectionName);
    sectionContainer.appendChild(sectionTitle);
    removeButton.setAttribute('onclick', "deleteElement('myForm', 'id_" + sectionName + "')");
    subsectionButton.setAttribute('onclick', "buildSection()");
    textboxButton.setAttribute('onclick', "buildTextbox()");
    sectionContainer.append(removeButton);
    sectionContainer.append(subsectionButton);
    sectionContainer.append(textboxButton);
    sectionContainer.setAttribute("id", "id_" + sectionName);
    document.getElementById("myForm").appendChild(sectionContainer);
}

function buildTextbox(){
    var textboxContainer = document.createElement('span');
    var textbox = document.createElement('textarea');
    textbox.setAttribute("placeholder", "Section content...")
    textbox.setAttribute("cols", "30");
    textbox.setAttribute("rows", "10");
    var removeButton = document.createElement('button');
    var removeButtonText = document.createTextNode("Delete");
    removeButton.appendChild(removeButtonText);
    increment(textboxName);
    textbox.setAttribute("Name", "textboxtitle_" + textboxName);
    textboxContainer.appendChild(textbox);
    removeButton.setAttribute('onclick', "deleteElement('myForm', id_" + textboxName + "')");
    textboxContainer.append(removeButton);
    textboxContainer.setAttribute("id", "id_" + textboxName);
    document.getElementById("myForm").appendChild(textboxContainer);
}

// function buildSection(){
//     document.getElementById('section-a').innerHTML = document.getElementById("section").innerHTML + document.getElementById('section-a').innerHTML;
// }

// function buildTextbox(){
//     document.getElementById('section-a').innerHTML = document.getElementById('section-a').innerHTML + document.getElementById("textBox");
// }