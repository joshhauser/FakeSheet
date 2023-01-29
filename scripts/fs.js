let css = {
  ".col": {
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "space-between",
    "alignItems": "center",
    "height": "100%",
    "width": "auto"
  },
  ".row": {
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "height": "auto",
    "width": "100%"
  }
}

function createFakeSheet() {
  function createButton(type, text, icon) {
    if (type === 'text') {

    }
    else {
      
    }
  }

  function createToolbar() {

  }
  
  function createSheetGrid() {

  }
  
}

function displayFakeSheet(sheet) {
  let body = document.getElementsByClassName("body")[0];
  body.appendChild(sheet);
}

document.onkeyup = (event) => {
  
}