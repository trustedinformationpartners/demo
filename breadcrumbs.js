document.addEventListener("DOMContentLoaded", function() {
  const urlMappings = {
    "examples": "Demo's",
      "eo": "Aan de slag bij een nieuwe werkgever",

    "research": "Onderzoek",
      "ipa": "Interactiepatronen attributen",
      
    "requirements": "Randvoorwaarden",
    
    "contact": "Contact en feedback",

    "flows" : "Onderzoek use cases",
  };
  
  const urlPath = window.location.pathname.split('/').filter(segment => segment !== "" && segment !== "index.html");
  const breadcrumbsContainer = document.getElementById('breadcrumbs');
  
  let breadcrumbHTML = '<a href="/">Home</a>';
  let currentPath = '';
  
  urlPath.forEach((segment, index) => {
    currentPath += `/${segment}`;
    let displayName = urlMappings[segment] || decodeURIComponent(segment);
    
    if (index < urlPath.length - 1) {
      breadcrumbHTML += ` > <a href="${currentPath}">${displayName}</a>`;
    } else {
      breadcrumbHTML += ` > ${displayName}`;
    }
  });
  
  breadcrumbsContainer.innerHTML = breadcrumbHTML;
});