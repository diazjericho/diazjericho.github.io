// Get the button:
let mybutton = document.getElementById("myBtn");
let myButtonDown = document.getElementById("myBtnDown");

// When the user scrolls down 20px from the top of the document, show the buttons
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    // Show both buttons when scrolled 20px down
    if (scrollTop > 20) {
        mybutton.style.display = "block"; // Show "Go back to top" button
        myButtonDown.style.display = "block"; // Show "Go to bottom" button
        mybutton.style.bottom = "90px"; // Ensure the "Go back to top" button is above "Go to bottom"
    } else {
        mybutton.style.display = "none"; // Hide "Go back to top" button
        myButtonDown.style.display = "block"; // Ensure the "Go to bottom" button shows initially
        myButtonDown.style.bottom = "20px"; // Reset "Go to bottom" position to default when "Go back to top" is hidden
    }

    // Hide "Go to bottom" button when near the bottom of the page
    if (scrollTop + clientHeight >= scrollHeight - 100) { // Adjust the buffer (100px) as needed
        myButtonDown.style.display = "none";
        mybutton.style.bottom = "20px"; // Move "Go back to top" button to the bottom when "Go to bottom" is hidden
    }
}



// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// When the user clicks on the button, scroll to the bottom of the document
function bottomFunction() {
    document.body.scrollTop = document.body.scrollHeight; // For Safari
    document.documentElement.scrollTop = document.documentElement.scrollHeight; // For Chrome, Firefox, IE and Opera
}

// Website accepting responses
const scriptURL = 'https://script.google.com/macros/s/AKfycbzfN4u1TvgUU7lWRpUwrEcWnEErQ6hp44PimWT9kwYEISR3hwoj13a8wlxPU5a7cWtLmQ/exec'
const form = document.forms['contactForm']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => alert("Thank you! Your form is submitted successfully." ))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
})

// Filter projects
function filterProjects() {
    const searchInput = document.getElementById('searchBar').value.toLowerCase();
    const selectedFramework = document.getElementById('frameworkFilter').value.toLowerCase();
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        const projectTitle = card.querySelector('h3').textContent.toLowerCase();
        const projectTags = card.getAttribute('data-tags').toLowerCase();
        const projectFramework = card.getAttribute('data-framework').toLowerCase();

        // Show or hide project cards based on search input and framework dropdown selection
        if (
            (projectTitle.includes(searchInput) || projectTags.includes(searchInput)) &&
            (selectedFramework === 'all' || projectFramework.includes(selectedFramework))
        ) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Clear filter for projects
function clearFilters() {
    // Clear search bar and dropdown selection
    document.getElementById('searchBar').value = '';
    document.getElementById('frameworkFilter').value = 'all';

    // Reset the filter to show all projects
    filterProjects();
}


