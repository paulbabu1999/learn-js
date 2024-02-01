window.onload = function() {
  document.getElementById('addTableBtn').addEventListener('click', addTable);
}

function createTRNode(colNodes) {
  let trNode = document.createElement("tr");
  colNodes.forEach(function(colNode) {
    trNode.appendChild(colNode);
  })
  return trNode;
}

function createTDNode(childNode1) {
  let tdNode = document.createElement("td");
  tdNode.appendChild(childNode1);

  return tdNode;
}
function createTDButton(label,event,listener) {
  let buttonNode = document.createElement("button");
  let buttonLabel= document.createTextNode(label);
  buttonNode.appendChild(buttonLabel)
  if (listener){
  buttonNode.addEventListener(event,listener);
  }
  return buttonNode;
}
function editbox(parentNode){
  var element=document.createElement("input");
  element.type="text";
  element.placeholder="Enter Cell (x,y) ..."
  var place = document.createTextNode("Label");
  parentNode.replaceChild(element,parentNode.childNodes[0])

  
  
}



function createTxtNode(txt) {
  let txtNode = document.createTextNode(txt);
  return txtNode;
}



function addTable() {
  const tableNode = document.createElement("table");
  for(let i = 0; i < 3; i++) {
    let col1 = createTDNode(createTxtNode("Cell (" + i + ", 0)"));
    let col2= createTDNode(createTDButton("Edit Text","click",()=>
      editbox(col1)
    ))
    tableNode.appendChild(createTRNode([col1,col2]));
  }
  document.getElementById("root").appendChild(tableNode);
}
