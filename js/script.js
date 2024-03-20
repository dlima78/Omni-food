const btnMenu = document.querySelector('.btn-mobile-nav');
const headerNav = document.querySelector('.header');
btnMenu.addEventListener('click', function() {
  headerNav.classList.toggle('nav-open');
});

//when click on the link, close the btnMenu
const links = document.querySelectorAll('a');
links.forEach(link => {
  link.addEventListener('click', function() {
    if (link.classList.contains('main-nav-link')) {
      headerNav.classList.toggle('nav-open');
    }
  });  
});

const sectionHeroEl = document.querySelector('.section-hero');
const observer = new IntersectionObserver(function(entries) {
  const ent = entries[0];
  if(!ent.isIntersecting) {
    document.body.classList.add('sticky');
  }
  if(ent.isIntersecting) {
    document.body.classList.remove('sticky');
  }
}, {
  root: null,
  threshold: 0,
  rootMargin: '-80px'
});
observer.observe(sectionHeroEl);


///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);  

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();