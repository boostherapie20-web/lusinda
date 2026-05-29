(function () {
  function isEditable(target) {
    return Boolean(target.closest("input, textarea, select, [contenteditable='true']"));
  }

  document.addEventListener("contextmenu", (event) => {
    if (!isEditable(event.target)) {
      event.preventDefault();
    }
  });

  document.addEventListener("copy", (event) => {
    if (!isEditable(event.target)) {
      event.preventDefault();
    }
  });

  document.addEventListener("cut", (event) => {
    if (!isEditable(event.target)) {
      event.preventDefault();
    }
  });

  document.addEventListener("dragstart", (event) => {
    if (!isEditable(event.target)) {
      event.preventDefault();
    }
  });
})();
