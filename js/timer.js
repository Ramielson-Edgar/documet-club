const mixerDocuments = mixitup(".upload-document__container", {
  selectors: {
    target: ".upload-document__img-wrapper",
  },
  animation: {
    duration: 300,
  },
  load: {
    filter: ".category-1",
  },
});
