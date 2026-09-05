document.querySelectorAll("#termine .item .cursor-pointer").forEach((item) => {
  item.addEventListener("click", () => {
    const hiddenDiv = item.nextElementSibling;
    if (hiddenDiv) {
      hiddenDiv.classList.toggle("hidden");
    }
  });
});

const dialog = document.querySelector('#dialog');
const dialogShowBtn = document.querySelectorAll('.dialog-btn');
const dialogCloseBtn = document.querySelector("dialog button");

// "Show the dialog" button opens the dialog modally
dialogShowBtn.forEach((btn) => {
  const contentId = btn.getAttribute('content-id');
  const content = document.querySelector(`#${contentId}`)?.innerHTML;
  if (content) {
    btn.addEventListener("click", () => {
      dialog.querySelector('.dialog-content').innerHTML = content;
      dialog.showModal();
    });
  }
});
