// Initialize CodeMirror editors
var htmlEditor = CodeMirror.fromTextArea(
  document.getElementById("html-editor"),
  {
    mode: "htmlmixed",
    theme: "darcula",
    lineNumbers: true,
    tabSize: 2,
    matchBrackets: true,
    autoCloseTags: true,
    extraKeys: {
      "Ctrl-Space": "autocomplete",
      "Ctrl-Q": function (cm) {
        cm.foldCode(cm.getCursor());
      },
    },
  }
);
var cssEditor = CodeMirror.fromTextArea(document.getElementById("css-editor"), {
    mode: "htmlmixed",
    theme: "darcula",
    lineNumbers: true,
    tabSize: 2,
    matchBrackets: true,
    autoCloseTags: true,
    extraKeys: {
      "Ctrl-Space": "autocomplete",
      "Ctrl-Q": function (cm) {
        cm.foldCode(cm.getCursor());
      },
    },
});
var jsEditor = CodeMirror.fromTextArea(document.getElementById("js-editor"), {
    mode: "htmlmixed",
    theme: "darcula",
    lineNumbers: true,
    tabSize: 2,
    matchBrackets: true,
    autoCloseTags: true,
    extraKeys: {
      "Ctrl-Space": "autocomplete",
      "Ctrl-Q": function (cm) {
        cm.foldCode(cm.getCursor());
      },
    },
  
});

// Get the tabs and content elements
var htmlTab = document.getElementById("html-tab");
var cssTab = document.getElementById("css-tab");
var jsTab = document.getElementById("js-tab");

var editorContent = document.querySelector(".editor-content");

// Set the initial active tab and editor
htmlTab.classList.add("active");
htmlEditor.refresh();

// Add click event listeners to the tabs
htmlTab.addEventListener("click", function () {
  setActiveTab(htmlTab);
  showEditor(htmlEditor);
});
cssTab.addEventListener("click", function () {
  setActiveTab(cssTab);
  showEditor(cssEditor);
});
jsTab.addEventListener("click", function () {
  setActiveTab(jsTab);
  showEditor(jsEditor);
});

// Function to set the active tab
function setActiveTab(tab) {
    var tabs = document.querySelectorAll(".editor-tab");
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove("active");
    }
    tab.classList.add("active");
  }
  

// Function to show the selected editor
function showEditor(editor) {
    var editors = document.querySelectorAll(".CodeMirror");
    for (var i = 0; i < editors.length; i++) {
      if (editors[i] === editor) {
        editors[i].style.display = "block";
      } else {
        editors[i].display.wrapper.style.display = "none";
      }
    }
  }
  
 

// Add click event listener to the run button
var runBtn = document.getElementById("run-btn");
runBtn.addEventListener("click", function () {
  // Get the code from each editor
  var htmlCode = htmlEditor.getValue();
  var cssCode = cssEditor.getValue();
  var jsCode = jsEditor.getValue();

  // Create the HTML file contents
  var htmlFile = "<!DOCTYPE html>\n";
  htmlFile += "<html>\n";
  htmlFile += "<head>\n";
  htmlFile += '<meta charset="UTF-8">\n';
  htmlFile += "<title>Code Editor Output</title>\n";
  htmlFile += "<style>\n";
  htmlFile += cssCode + "\n";
  htmlFile += "</style>\n";
  htmlFile += "</head>\n";
  htmlFile += "<body>\n";
  htmlFile += htmlCode + "\n";
  htmlFile += "<script>\n";
  htmlFile += jsCode + "\n";
  htmlFile += "</script>\n";
  htmlFile += "</body>\n";
  htmlFile += "</html>";

  // Set the HTML file contents to the output iframe
  var output = document.getElementById("output").contentWindow.document;
  output.open();
  output.write(htmlFile);
  output.close();
});

// Add click event listener to the save button
var saveBtn = document.getElementById("save-btn");
saveBtn.addEventListener("click", function () {
  // Get the code from each editor
  var htmlCode = htmlEditor.getValue();
  var cssCode = cssEditor.getValue();
  var jsCode = jsEditor.getValue();

  // Create a new Blob object with the HTML file contents
  var fileContents = "<!DOCTYPE html>\n";
  fileContents += "<html>\n";
  fileContents += "<head>\n";
  fileContents += "<meta charset=UTF-8>\n";
  fileContents += "<title>Code Editor Output</title>\n";
  fileContents += "<style>\n";
  fileContents += cssCode + "\n";
  fileContents += "</style>\n";
  fileContents += "</head>\n";
  fileContents += "<body>\n";
  fileContents += htmlCode + "\n";
  fileContents += "<script>\n";
  fileContents += jsCode + "\n";
  fileContents += "</script>\n";
  fileContents += "</body>\n";
  fileContents += "</html>";
  var blob = new Blob([fileContents], { type: "text/html" });

  // Create a new URL for the blob object
  var url = URL.createObjectURL(blob);

  // Create a new link element and set its attributes
  var link = document.createElement("a");
  link.href = url;
  link.download = "code-editor-output.html";

  // Simulate a click on the link to trigger the download
  document.body.appendChild(link);
  link.click();

  // Clean up by removing the link and revoking the URL object
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
});

// Add click event listener to the clear button
var clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", function () {
  // Clear the code from each editor
  htmlEditor.setValue("");
  cssEditor.setValue("");
  jsEditor.setValue("");

  // Clear the output iframe
  var output = document.getElementById("output").contentWindow.document;
  output.open();
  output.write("");
  output.close();
});
