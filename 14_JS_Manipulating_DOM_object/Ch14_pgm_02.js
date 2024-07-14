// Use the countries array to display all the countries. 


//See the design

// https://github.com/Asabeneh/30-Days-Of-JavaScript/raw/master/images/projects/dom_min_project_countries_aray_day_2.2.png

//code
    // Array of countries
    const countries = [
      'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola',
      'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria',
      'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados',
      'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan',
      // Add more countries as needed
    ];

    // Get the countries-list div
    const countriesList = document.getElementById('countries-list');

    // Create ul element
    const ul = document.createElement('ul');

    // Loop through the countries array
    countries.forEach(country => {
      // Create li element for each country
      const li = document.createElement('li');
      li.textContent = country;
      // Append li to ul
      ul.appendChild(li);
    });

    // Append ul to countries-list div
    countriesList.appendChild(ul);
