const mixer1 = mixitup('.colour-copy', {
   controls: {
      scope: 'local',
   },

   selectors: {
      target: '.upload__img',
   },

   animation: {
      duration: 400,
      queueLimit: 5,
   },

   load: {
      filter: '.category-1',
   },
});

const mixer3 = mixitup(document.querySelector('[data-ref="container__2"]'), {
   controls: {
      scope: 'local',
   },
   selectors: {
      target: '.document-tips__img-container__paper',
   },

   animation: {
      duration: 400,
      queueLimit: 5,
      // enable: false,
   },

   load: {
      filter: '.category_1',
   },
});

const currentCheckbox = document.querySelectorAll('.document-type');
const uploadBackSide = document.querySelector('.upload-document__wrapper-back-side');
const rowDocumentTips = document.querySelector('.document-tips');
const rowBorderRight = document.querySelector('.border-right');

function hidePassportBackSection() {
   currentCheckbox.forEach(el =>
      el.addEventListener('click', e => {
         const { target } = e;
         const idCheckbox = target.id;

         if (idCheckbox === 'document-type__passport') {
            uploadBackSide.classList.add('sr-only');
            rowDocumentTips.style.borderLeft = '1px solid #ededed';
            rowBorderRight.classList.remove('border-right');
         } else {
            uploadBackSide.classList.remove('sr-only');
            rowDocumentTips.style.borderLeft = '';
            rowBorderRight.classList.add('border-right');
         }
      }),
   );
}

hidePassportBackSection();
