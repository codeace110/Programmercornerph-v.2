let activeEditor = null;
const htmlEditor = CodeMirror(document.querySelector('.html-editor'), {
  mode: 'xml',
  theme: 'monokai',
  lineNumbers: true,
  value: '<!-- Type your HTML code here -->',
});
const cssEditor = CodeMirror(document.querySelector('.css-editor'), {
  mode: 'css',
  theme: 'monokai',
  lineNumbers: true,
  value: '/* Type your CSS code here */',
});
const jsEditor = CodeMirror(document.querySelector('.js-editor'), {
  mode: 'javascript',
  theme: 'monokai',
  lineNumbers: true,
  value: '// Type your JavaScript code here',
});

// Set the active editor to the HTML editor by default
activeEditor = htmlEditor;

// Define the buttons
const runButton = document.querySelector('.run-button');
const htmlButton = document.querySelector('.html-button');
const cssButton = document.querySelector('.css-button');
const jsButton = document.querySelector('.js-button');

// Function to switch between editors
function switchEditor(type) {
  // Remove the active class from all buttons
  document.querySelectorAll('.buttons button').forEach(button => {
    button.classList.remove('active');
  });

  // Add the active class to the clicked button
  document.querySelector(`.buttons button[data-type=${type}]`).classList.add('active');

  // Hide all editors
  document.querySelectorAll('.editor').forEach(editor => {
    editor.classList.remove('active');
  });

  // Show the selected editor
  if (type === 'html') {
    activeEditor = htmlEditor;
    cssEditor.setOption('theme', 'default');
    jsEditor.setOption('theme', 'default');
    document.querySelector('.html-editor').classList.add('active');
  } else if (type === 'css') {
    activeEditor = cssEditor;
    htmlEditor.setOption('theme', 'default');
    jsEditor.setOption('theme', 'default');
    cssEditor.setOption('theme', 'default');
    document.querySelector('.css-editor').classList.add('active');
  } else if (type === 'javascript') {
    activeEditor = javascriptEditor;
    htmlEditor.setOption('theme', 'default');
    jsEditor.setOption('theme', 'default');
    cssEditor.setOption('theme', 'default');
    document.querySelector('.javascript-editor').classList.add('active');
  }
}

  function runCode() {
    output.innerHTML = "";
    const iframe = document.createElement("iframe");
    document.body.appendChild(iframe);
    const iframeContent = `<html><head><style>${cssEditor.getValue()}</style></head><body>
        ${htmlEditor.getValue()}<script>${jsEditor.getValue()}</script></body></html>`;

    const iframeDoc = iframe.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write(iframeContent);
    iframeDoc.close();

    runButton.addEventListener("click", runCode);

    htmlButton.addEventListener("click", () => {
      activeEditor.setOption("theme", "default");
      htmlEditor.setOption("theme", "material-darker");
      activeEditor = htmlEditor;
    });

    cssButton.addEventListener("click", () => {
      activeEditor.setOption("theme", "default");
      cssEditor.setOption("theme", "material-darker");
      activeEditor = cssEditor;
    });

    jsButton.addEventListener("click", () => {
      activeEditor.setOption("theme", "default");
      jsEditor.setOption("theme", "material-darker");
      activeEditor = jsEditor;
    });
  }

