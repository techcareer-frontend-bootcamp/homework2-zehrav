/*==================== SHOW MENU MOBILE ====================*/
const showMenu = (toggleId, navId) => { /* nereye tıklandığı ve nereye açacağı parametrelerinin alır */
    const toggle = document.getElementById(toggleId),
          nav    = document.getElementById(navId);

    if(toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')

/*==================== REMOVE MOBILE MENU ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show class
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

