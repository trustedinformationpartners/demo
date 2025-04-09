document.addEventListener("DOMContentLoaded", () => {
  const baseUrl = '/'; // Basispaden variabele, centraal gedefinieerd
  
  const navbarLogo = document.getElementById("navbar-logo");
  const menuLinksContainer = document.getElementById("menu-links");
  const fullscreenMenu = document.getElementById("fullscreen-menu");
  const closeMenu = document.getElementById("close-menu");
  const hamburgerMenu = document.getElementById("hamburger-menu");

  const logoSrc = baseUrl + "assets/logo6.svg";
  const logoAlt = "Logo";
  const logoLink = baseUrl + "index.html";

  if (navbarLogo) {
    const logoAnchor = document.createElement("a");
    logoAnchor.href = logoLink;
    logoAnchor.appendChild(navbarLogo.cloneNode(true));
    navbarLogo.replaceWith(logoAnchor);
    const updatedNavbarLogo = logoAnchor.querySelector("img");
    updatedNavbarLogo.src = logoSrc;
    updatedNavbarLogo.alt = logoAlt;
  } else {
    console.error("Navbar-logo ontbreekt in de DOM.");
  }

const links = [
  { href: baseUrl + "index.html", icon: "fas fa-home", text: "Home" },
  { href: baseUrl + "examples/index.html", icon: "fas fa-play", text: "Demo's" },
  { href: baseUrl + "research/index.html", icon: "fas fa-flask", text: "Onderzoek" },
  { hr: true },
  { href: baseUrl + "about/index.html", icon: "fas fa-info-circle", text: "Over" },
  { href: baseUrl + "contact/index.html", icon: "fas fa-comments", text: "Contact" },
];

if (menuLinksContainer) {
  links.forEach((link) => {
    if (link.hr) {
      const hr = document.createElement("hr");
      hr.className = "nav-separator"; 
      menuLinksContainer.appendChild(hr);
    } else {
      const li = document.createElement("li");
      li.innerHTML = `
        <a href="${link.href}">
          <i class="${link.icon}"></i> ${link.text}
        </a>
      `;
      menuLinksContainer.appendChild(li);
    }
  });
} else {
  console.error("Menu-links container ontbreekt in de DOM.");
}

if (hamburgerMenu && fullscreenMenu && closeMenu) {
  hamburgerMenu.addEventListener("click", () => {
    fullscreenMenu.classList.add("active");
  });

  closeMenu.addEventListener("click", () => {
    fullscreenMenu.classList.remove("active");
  });
} else {
  console.error("Een of meer elementen voor het menu ontbreken in de DOM.");
}
});