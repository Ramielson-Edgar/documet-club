document.querySelectorAll(".document-type__checkbox").forEach((o) => {
  o.addEventListener("click", () => {
    onHandleRemoveActiveClass();
    let parent = o.closest(".document-type");
    parent.classList.add("document-type_checked-active");
  });
});

function onHandleRemoveActiveClass() {
  document.querySelectorAll(".document-type").forEach((a) => {
    a.classList.remove("document-type_checked-active");
  });
}
