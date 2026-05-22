document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
            }
        });
    });
    
    // Search and destination functionality
    const searchForm = document.getElementById('searchForm');
    const destinationInput = document.getElementById('destinationInput');
    const mainContent = document.getElementById('mainContent');
    const allowedDestinations = new Set(['Egypt', 'France', 'Turkey', 'Russia', 'Italy', 'England']);
    
    const destinationDetails = {
        'Egypt': 'egyptDetails',
        'France': 'franceDetails',
        'Turkey': 'turkeyDetails',
        'Russia': 'russiaDetails',
        'Italy': 'italyDetails',
        'England': 'englandDetails'
    };
    
    const handleSearch = (e) => {
        e.preventDefault();
        const destination = destinationInput.value.trim();
        
        const normalizedInput = destination.toLowerCase();
        const foundDestination = Array.from(allowedDestinations).find(
            d => d.toLowerCase() === normalizedInput
        );
        
        if (!foundDestination) {
            alert('Please select a destination from the list');
            return;
        }
        
        showDestinationDetails(foundDestination);
    };
    
    const handleCountryClick = (element) => {
        const country = element.getAttribute('data-country');
        showDestinationDetails(country);
    };
    
    function showDestinationDetails(destination) {
        const detailPageId = destinationDetails[destination];
        if (detailPageId) {
            document.getElementById('mainContent').style.display = 'none';
            document.getElementById(detailPageId).style.display = 'block';
            window.scrollTo(0, 0);
        }
    }
    
    window.goBack = function() {
        document.getElementById('mainContent').style.display = 'block';
        document.querySelectorAll('.destination-details').forEach(page => {
            page.style.display = 'none';
        });
        window.scrollTo(0, 0);
    };
    
    searchForm.addEventListener('submit', handleSearch);
    
    document.querySelectorAll('.country-card').forEach(item => {
        item.addEventListener('click', () => handleCountryClick(item));
        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleCountryClick(item);
            }
        });
        item.setAttribute('tabindex', '0');
        item.setAttribute('role', 'button');
    });
});