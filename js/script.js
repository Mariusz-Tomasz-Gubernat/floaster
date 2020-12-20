const btn = document.querySelector('.fas'),
  XBar = document.querySelector('.fa-times'),
  navigation = document.querySelector('nav'),
  filtrs = document.querySelectorAll('.filtrs p'),
  sectionsOfProducts = document.querySelectorAll('section.products'),
  showAllProducts = document.querySelector('.all-products');

const filtrsProducts = function () {
  for (let filtr of filtrs) {
    document.querySelector('.filtrs p');

    filtr.addEventListener('click', function () {

      const thisFiltr = this;
      const filtrId = thisFiltr.getAttribute('id').replace('sub-', '');

      for (let sectionOfProducts of sectionsOfProducts) {

        document.querySelector('section.products');

        const sectionOfProductsId = sectionOfProducts.getAttribute('id');

        if (filtrId == sectionOfProductsId) { sectionOfProducts.classList.add('active'); }

        else {
          sectionOfProducts.classList.add('nonActive');
          sectionOfProducts.classList.remove('active');

          showAllProducts.addEventListener('click', function () {
            sectionOfProducts.classList.remove('nonActive');
          });
        }
      }
    });
  }
};

filtrsProducts();

const showMenu = function () {

  btn.addEventListener('click', function () {

    navigation.classList.add('active');
    btn.classList.add('active');
    XBar.classList.add('active');

  });

  XBar.addEventListener('click', function () {
    navigation.classList.remove('active');
    btn.classList.remove('active');
    XBar.classList.remove('active');
  });

};

showMenu();
