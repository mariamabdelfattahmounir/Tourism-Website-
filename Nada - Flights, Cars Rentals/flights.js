
// Passenger Selector Functionality
document.addEventListener('DOMContentLoaded', function() {
    const passengerBtn = document.getElementById('passengerBtn');
    const passengerDropdown = document.getElementById('passengerDropdown');
    const passengerText = document.getElementById('passengerText');
    const confirmPassengers = document.getElementById('confirmPassengers');
    
    // Counter elements
    const adultsCount = document.getElementById('adultsCount');
    const childrenCount = document.getElementById('childrenCount');
    const infantsCount = document.getElementById('infantsCount');
    const travelClass = document.getElementById('travelClass');
    
    // Toggle dropdown
    passengerBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        passengerDropdown.classList.toggle('show');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function() {
        passengerDropdown.classList.remove('show');
    });
    
    // Prevent dropdown from closing when clicking inside
    passengerDropdown.addEventListener('click', function(e) {
        e.stopPropagation();
    });
    
    // Counter functionality
    document.getElementById('increaseAdults').addEventListener('click', function() {
        adultsCount.value = parseInt(adultsCount.value) + 1;
    });
    
    document.getElementById('decreaseAdults').addEventListener('click', function() {
        if (adultsCount.value > 1) {
            adultsCount.value = parseInt(adultsCount.value) - 1;
        }
    });
    
    document.getElementById('increaseChildren').addEventListener('click', function() {
        childrenCount.value = parseInt(childrenCount.value) + 1;
    });
    
    document.getElementById('decreaseChildren').addEventListener('click', function() {
        if (childrenCount.value > 0) {
            childrenCount.value = parseInt(childrenCount.value) - 1;
        }
    });
    
    document.getElementById('increaseInfants').addEventListener('click', function() {
        infantsCount.value = parseInt(infantsCount.value) + 1;
    });
    
    document.getElementById('decreaseInfants').addEventListener('click', function() {
        if (infantsCount.value > 0) {
            infantsCount.value = parseInt(infantsCount.value) - 1;
        }
    });
    
    // Confirm passenger selection
    confirmPassengers.addEventListener('click', function() {
        updatePassengerText();
        passengerDropdown.classList.remove('show');
    });
    
    // Update class selection
    travelClass.addEventListener('change', updatePassengerText);
    
    // Update the button text
    function updatePassengerText() {
        let text = `${adultsCount.value} Adult${adultsCount.value > 1 ? 's' : ''}`;
        
        if (childrenCount.value > 0) {
            text += `, ${childrenCount.value} Child${childrenCount.value > 1 ? 'ren' : ''}`;
        }
        
        if (infantsCount.value > 0) {
            text += `, ${infantsCount.value} Infant${infantsCount.value > 1 ? 's' : ''}`;
        }
        
        text += `, ${travelClass.options[travelClass.selectedIndex].text}`;
        
        passengerText.textContent = text;
    }
    
    // One-way/round trip toggle
    const tripTypeRadios = document.querySelectorAll('input[name="tripType"]');
    const returnDateGroup = document.getElementById('return-date-group');
    
    tripTypeRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            returnDateGroup.style.display = this.value === 'round' ? 'block' : 'none';
        });
    });
});

// Search button functionality
document.getElementById('searchBtn').addEventListener('click', function() {
    // Hide the search form
    document.querySelector('.search-form').style.display = 'none';
    
    // Show the results section
    const resultsSection = document.getElementById('results');
    resultsSection.style.display = 'block';
    
    // Scroll to results
    resultsSection.scrollIntoView({ behavior: 'smooth' });
    
    // Here you would normally fetch real results, but we'll use our template
    const airlinesHTML = `

        <!-- Currency Converter Banner -->
    <div class="currency-banner">
        <h1>Currency converter</h1>
        <p>Convert any currency in seconds no math ,no hassle.</p>
        <a href="../../your guide/Jana - currency converter ,destenation vidos&images/currency converter/index.html">    
          <button class="banner-btn">try now!</button>
        </a>
    </div>
    <!-- Egyptair -->
    <div class="airline-card">
      <div class="airline-logo">
        <img src="images/air1.jpg" alt="Egyptair">
      </div>
      
      <div class="flight-details">
        <div class="flight-times">
          <div class="departure">
            <span class="time">10:35a</span>
            <span class="location"></span>
          </div>
          
          <div class="duration">
            <span class="total-time">3h 25m</span>
            <div class="timeline"></div>
          </div>
          
          <div class="arrival">
            <span class="time">6:20p</span>
            <span class="location"></span>
          </div>
        </div>
        
        <div class="flight-info">
          <span class="airline-name">Egyptair</span>
          <span class="flight-number">MS123</span>
        </div>
      </div>
      
      <div class="flight-pricing">
        <div class="price">19,589 EGP</div>
        <div class="fare-type">Multiple fares available</div>
        <button class="select-btn">SELECT</button>
      </div>
    </div>
    
    <!-- Air Asia -->
    <div class="airline-card">
      <div class="airline-logo">
        <img src="images/air2.jpg" alt="Air Asia">
      </div>
      
      <div class="flight-details">
        <div class="flight-times">
          <div class="departure">
            <span class="time">1:00p</span>
            <span class="location"></span>
          </div>
          
          <div class="duration">
            <span class="total-time">2h 45m</span>
            <div class="timeline"></div>
          </div>
          
          <div class="arrival">
            <span class="time">3:45p</span>
            <span class="location"></span>
          </div>
        </div>
        
        <div class="flight-info">
          <span class="airline-name">Air Asia</span>
          <span class="flight-number">AK789</span>
        </div>
      </div>
      
      <div class="flight-pricing">
        <div class="price">18,200 EGP</div>
        <div class="fare-type">Multiple fares available</div>
        <button class="select-btn">SELECT</button>
      </div>
    </div>
    
    <!-- ITA Airways -->
    <div class="airline-card">
      <div class="airline-logo">
        <img src="images/air3.jpg" alt="ITA Airways">
      </div>
      
      <div class="flight-details">
        <div class="flight-times">
          <div class="departure">
            <span class="time">8:15a</span>
            <span class="location"></span>
          </div>
          
          <div class="duration">
            <span class="total-time">4h 10m</span>
            <div class="timeline"></div>
          </div>
          
          <div class="arrival">
            <span class="time">12:25p</span>
            <span class="location"></span>
          </div>
        </div>
        
        <div class="flight-info">
          <span class="airline-name">ITA Airways</span>
          <span class="flight-number">AZ456</span>
        </div>
      </div>
      
      <div class="flight-pricing">
        <div class="price">21,350 EGP</div>
        <div class="fare-type">Multiple fares available</div>
        <button class="select-btn">SELECT</button>
      </div>
    </div>
    
    <!-- Royal Brunei Airlines -->
    <div class="airline-card">
      <div class="airline-logo">
        <img src="images/air4.PNG" alt="Royal Brunei Airlines">
      </div>
      
      <div class="flight-details">
        <div class="flight-times">
          <div class="departure">
            <span class="time">3:30p</span>
            <span class="location"></span>
          </div>
          
          <div class="duration">
            <span class="total-time">5h 20m</span>
            <div class="timeline"></div>
          </div>
          
          <div class="arrival">
            <span class="time">8:50p</span>
            <span class="location"></span>
          </div>
        </div>
        
        <div class="flight-info">
          <span class="airline-name">Royal Brunei Airlines</span>
          <span class="flight-number">BI234</span>
        </div>
      </div>
      
      <div class="flight-pricing">
        <div class="price">23,700 EGP</div>
        <div class="fare-type">Multiple fares available</div>
        <button class="select-btn">SELECT</button>
      </div>
    </div>
    
    <!-- Xiamen Airlines -->
    <div class="airline-card">
      <div class="airline-logo">
        <img src="images/air5.jpg" alt="Xiamen Airlines">
      </div>
      
      <div class="flight-details">
        <div class="flight-times">
          <div class="departure">
            <span class="time">10:10p</span>
            <span class="location"></span>
          </div>
          
          <div class="duration">
            <span class="total-time">6h 15m</span>
            <div class="timeline"></div>
          </div>
          
          <div class="arrival">
            <span class="time">4:25a</span>
            <span class="location"></span>
          </div>
        </div>
        
        <div class="flight-info">
          <span class="airline-name">Xiamen Airlines</span>
          <span class="flight-number">MF876</span>
        </div>
      </div>
      
      <div class="flight-pricing">
        <div class="price">20,900 EGP</div>
        <div class="fare-type">Multiple fares available</div>
        <button class="select-btn">SELECT</button>
      </div>
    </div>`;
    // Insert the airlines HTML
    document.getElementById('airlines-container').innerHTML = airlinesHTML;
    
    // Add event listeners to SELECT buttons immediately after insertion
    document.querySelectorAll('.select-btn').forEach(button => {
        button.addEventListener('click', function() {
            window.location.href = 'thankyou.html';
        });
    });
});
