// Highlight the navbar link correlated to the active webpage
document.addEventListener('DOMContentLoaded', function() {
    const links = document.getElementsByClassName("nav-link");
    for (let i = 0; i < links.length; i++) {
      if (links[i].classList.contains('active') == false) {
        links[i].style.opacity = "0.8";
      }
    }
})

// Change navbar dropdown menu text to "Less" when clicked
document.addEventListener('DOMContentLoaded', function() {
    let dropdown = document.querySelector(".dropdown-toggle");
    dropdown.addEventListener('click', function() {
      if (dropdown.getAttribute('aria-expanded') == 'true') {
        dropdown.innerHTML = "Less";
      }
    })
})

// Change navbar dropdown menu text to "More" on any mouse click when already open
document.addEventListener('DOMContentLoaded', function() {
  let dropdown = document.querySelector(".dropdown-toggle");
  document.addEventListener('click', function() {
    if (dropdown.getAttribute('aria-expanded') == 'false') {
      dropdown.innerHTML = "More";
    }
  })
})

/* Set the width of the sidepanel to 300px (show sidepanel) & darken background */
function openNav() {
  document.getElementById("mySidepanel").style.width = "300px";
  document.getElementById("mySidepanel").style.boxShadow = "0 0 0 10000px rgba(0,0,0,.75)";
}

/* Set the width of the sidepanel to 0 (hide sidepanel) & remove dark background */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
  document.getElementById("mySidepanel").style.boxShadow = "none";
}

/* Hide/Show search bar in top navigation when the search icon is clicked */
document.addEventListener('DOMContentLoaded', function() {
  let input = document.getElementById("input-search");
  let openSearch = document.getElementById("dummy-search");
  let searchButton = document.getElementById("search-button");
  let clsButton = document.getElementById("closeSearchBtn");
  openSearch.addEventListener('click', function() {
    if (input.style.visibility = "hidden") {
      clsButton.style.visibility = "visible";
      searchButton.style.visibility = "visible";
      openSearch.style.visibility = "hidden";
      input.style.width = "200px";
      input.style.visibility = "visible";
      input.style.transition = "width 0.3s ease-in-out";
    }
  })
})

/* Open and close the animated search bar in top navigation */
document.addEventListener('DOMContentLoaded', function() {
  const searchBtn = document.querySelector(".search-btn");
  // const actual = document.querySelector(".btn-actual");
  const exitBtn = document.querySelector(".exit-btn");
  const searchBox = document.querySelector(".search-box");
  const searchInput = document.querySelector("input");
  searchBtn.addEventListener('click', function() {
    searchBox.classList.add("active");
    searchInput.classList.add("active");
    searchBtn.classList.add("active");
    // actual.classList.add("active");
    exitBtn.classList.add("active");
    exitBtn.style.visibility = "visible";
  })
  exitBtn.addEventListener('click', function() {
    searchBox.classList.remove("active");
    searchInput.classList.remove("active");
    searchBtn.classList.remove("active");
    exitBtn.classList.remove("active");
    // actual.classList.remove("active");
    exitBtn.style.visibility = "hidden";
  })
})


