// Hardcoded mock data
const data = {
  "list": [
    {
      "name": "John Doe",
      "office": "New York",
      "position": "Software Engineer",
      "salary": "$90,000"
    },
    {
      "name": "Jane Smith",
      "office": "San Francisco",
      "position": "Product Manager",
      "salary": "$120,000"
    },
    {
      "name": "Alice Johnson",
      "office": "Chicago",
      "position": "UX Designer",
      "salary": "$85,000"
    },
    {
      "name": "Robert Brown",
      "office": "Los Angeles",
      "position": "Data Scientist",
      "salary": "$110,000"
    },
    {
      "name": "Emily Davis",
      "office": "Austin",
      "position": "Marketing Manager",
      "salary": "$95,000"
    }
  ]
};

// Calling the show function with the hardcoded data
show(data);

// Function to hide the loader
function hideloader() {
  document.getElementById('loading').style.display = 'none';
}

// Function to define innerHTML for HTML table
function show(data) {
  let tab = `
    <tr>
      <th>Name</th>
      <th>Office</th>
      <th>Position</th>
      <th>Salary</th>
    </tr>`;

  // Loop to access all rows
  for (let r of data.list) {
    tab += `
      <tr>
        <td>${r.name}</td>
        <td>${r.office}</td>
        <td>${r.position}</td>
        <td>${r.salary}</td>
      </tr>`;
  }

  // Setting innerHTML as tab variable
  document.getElementById("employees").innerHTML = tab;

  // Hide the loader
  hideloader();
}
