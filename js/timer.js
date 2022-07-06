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

         if (idCheckbox === 'document-type__passport_2') {
            document.querySelector('.passport-btn').style.display = 'none';
         } else {
            document.querySelector('.passport-btn').style.display = 'flex';
         }
      }),
   );
}

hidePassportBackSection();

document.addEventListener('DOMContentLoaded', function (event) {
   const showNavbar = (toggleId, navId, bodyId, headerId) => {
      const toggle = document.getElementById(toggleId),
         nav = document.getElementById(navId),
         bodypd = document.getElementById(bodyId),
         headerpd = document.getElementById(headerId);

      // Validate that all variables exist
      if (toggle && nav && bodypd && headerpd) {
         toggle.addEventListener('click', () => {
            // show navbar
            nav.classList.toggle('show');
            // change icon
            toggle.classList.toggle('bx-x');
            // add padding to body
            bodypd.classList.toggle('body-pd');
            // add padding to header
            headerpd.classList.toggle('body-pd');
         });
      }
   };

   showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header');

   /*===== LINK ACTIVE =====*/
   const linkColor = document.querySelectorAll('.nav_link');

   function colorLink() {
      if (linkColor) {
         linkColor.forEach(l => l.classList.remove('active'));
         this.classList.add('active');
      }
   }
   linkColor.forEach(l => l.addEventListener('click', colorLink));

   // Your code to run since DOM is loaded and ready
});
