function createFakeSheet() {
  let css = {
    ".col": {
      "display": "flex",
      "flexDirection": "column",
      "justifyContent" : "space-between",
      "alignItems": "center",
      "height": "100%",
      "width": "auto"
    },
    ".row": {
      "display": "flex",
      "flexDirection": "row",
      "justifyContent" : "space-between",
      "alignItems": "center",
      "height": "auto",
      "width": "100%"
    }
  }
}

function displayFakeSheet(sheet) {
  let body = document.getElementsByClassName("body")[0];
  body.appendChild(sheet);
}

document.onkeyup = (event) => {

}