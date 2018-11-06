

/*  global variable for 'name' attribute incrementing  */
var i = 0;
var newLine = document.createElement('br');
var tab = "\xa0\xa0\xa0\xa0";


function increment(){
    /*  function called to increment 'name' attributes    */
    i += 1;
}

function deleteElement(parentId, childId){
    /*  function called to remove a section or textbox from the doc  */
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

function clearElements(){
    /*  function called to completely clear the doc and start over  */
    if( confirm('Are you sure you want to clear your document and start over?')){
        document.getElementById('myForm').innerHTML = '';
    }
    else{
        //  Do nothing
    }
}

function buildSection(){
    /*  function called to generate a new section including button controls */
    var sectionContainer = document.createElement('span');
    var sectionTitle = document.createElement("textarea");

    //  build section buttons  
    var subsectionButton = document.createElement('button');
    var subsectionButtonText = document.createTextNode("Create Subsection");
    var textboxButton = document.createElement('button');
    var textboxButtonText = document.createTextNode("Create Textbox");
    var removeButton = document.createElement('button');
    var removeButtonText = document.createTextNode("Delete");
    subsectionButton.appendChild(subsectionButtonText);
    textboxButton.appendChild(textboxButtonText);
    removeButton.appendChild(removeButtonText);
    subsectionButton.setAttribute('onclick', "buildSection()");
    textboxButton.setAttribute('onclick', "buildTextbox()");

    //  build section body
    sectionTitle.setAttribute("type", "text");
    sectionTitle.setAttribute("placeholder", "Section Title");
    sectionTitle.setAttribute("cols", "40");
    sectionTitle.setAttribute("rows", "1");
    increment();
    sectionTitle.setAttribute("Name", "sectionName_" + i);
    sectionContainer.appendChild(sectionTitle);

    removeButton.setAttribute('onclick', "deleteElement('myForm', 'sectiontitle_" + i + "')");

    //  render
    sectionContainer.append(removeButton);
    sectionContainer.append(subsectionButton);
    sectionContainer.append(textboxButton);
    sectionContainer.setAttribute("id", "sectiontitle_" + i);
    sectionContainer.setAttribute("class", "dragula-container");

    document.getElementById("myForm").append(newLine);
    document.getElementById("myForm").appendChild(sectionContainer);
}

function buildTextbox(){
    /*  function called to generate a textbox for section content  */
    var textboxContainer = document.createElement('span');
    var textbox = document.createElement('textarea');

    textbox.setAttribute("placeholder", "Section content...")
    textbox.setAttribute("contenteditable", "true");
    textbox.setAttribute("cols", "50");
    textbox.setAttribute("rows", "10");

    var removeButton = document.createElement('button');
    var removeButtonText = document.createTextNode("Delete");
    removeButton.appendChild(removeButtonText);

    increment();
    textbox.setAttribute("Name", "textbox_" + i);
    textboxContainer.appendChild(textbox);
    removeButton.setAttribute('onclick', "deleteElement('myForm', textbox_" + i + "')");
    textboxContainer.append(removeButton);
    textboxContainer.setAttribute("id", "textbox_" + i);
    document.getElementById("myForm").append(newLine);
    document.getElementById("myForm").appendChild(textboxContainer);
}



/*  "rich text editor" code after this point... revisit */

// var oDoc, sDefTxt;

// function initDoc() {
//     oDoc = document.getElementById("textBox");
//     sDefTxt = oDoc.innerHTML;
//     if (document.compForm.switchMode.checked) {
//         setDocMode(true);
//     }
// }

// function formatDoc(sCmd, sValue) {
//     if (validateMode()) {
//         document.execCommand(sCmd, false, sValue);
//         oDoc.focus();
//     }
// }

// function validateMode() {
//     if (!document.compForm.switchMode.checked) {
//         return true;
//     }
//     alert("Uncheck \"Show HTML\".");
//     oDoc.focus();
//     return false;
// }

// function setDocMode(bToSource) {
//     var oContent;
//     if (bToSource) {
//         oContent = document.createTextNode(oDoc.innerHTML);
//         oDoc.innerHTML = "";
//         var oPre = document.createElement("pre");
//         oDoc.contentEditable = false;
//         oPre.id = "sourceText";
//         oPre.contentEditable = true;
//         oPre.appendChild(oContent);
//         oDoc.appendChild(oPre);
//         document.execCommand("defaultParagraphSeparator", false, "div");
//     } else {
//         if (document.all) {
//             oDoc.innerHTML = oDoc.innerText;
//         } else {
//             oContent = document.createRange();
//             oContent.selectNodeContents(oDoc.firstChild);
//             oDoc.innerHTML = oContent.toString();
//         }
//         oDoc.contentEditable = true;
//     }
//     oDoc.focus();
// }

// function printDoc() {
//     if (!validateMode()) {
//         return;
//     }
//     var oPrntWin = window.open("", "_blank", "width=450,height=470,left=400,top=100,menubar=yes,toolbar=no,location=no,scrollbars=yes");
//     oPrntWin.document.open();
//     oPrntWin.document.write("<!doctype html><html><head><title>Print<\/title><\/head><body onload=\"print();\">" + oDoc.innerHTML + "<\/body><\/html>");
//     oPrntWin.document.close();
// }







 //function buildSection(){
//     document.getElementById('section-a').innerHTML = document.getElementById("section").innerHTML + document.getElementById('section-a').innerHTML;
// }

// function buildTextbox(){
//     document.getElementById('section-a').innerHTML = document.getElementById('section-a').innerHTML + document.getElementById("textBox");
// }