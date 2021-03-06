/* Funções Pagina Seguros */
function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();

function accordionSeguro() {
  const accordionLista = document.querySelectorAll(".js-accordion dt");
  if (accordionLista.length) {
    accordionLista[0].classList.add("ativo");
    accordionLista[0].nextElementSibling.classList.add("ativo");
    function activeAccordion(event) {
      this.classList.toggle("ativo");
      this.nextElementSibling.classList.toggle("ativo");
    }

    accordionLista.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
accordionSeguro();

/* Funções página Index */
function scrollSuave() {
  const sections = document.querySelectorAll(".js-scroll");
  if (sections.length) {
    const metadeTela = window.innerHeight * 0.6;
    function animarScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop - metadeTela < 0) {
          section.classList.add("ativo");
        } else {
          section.classList.remove("ativo");
        }
      });
    }

    animarScroll();
    window.addEventListener("scroll", animarScroll);
  }
}
scrollSuave();
