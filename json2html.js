// json2html.js

export default function json2html(data) {
  // Start with the opening table tag and add the data-user attribute
  let html = '<table data-user="deekshitadurgam.077@gmail.com">';

  // Create the table header row
  html += "<thead><tr><th>Name</th><th>Age</th><th>Gender</th></tr></thead>";

  // Start the table body
  html += "<tbody>";

  // Loop through each object in the data array
  data.forEach((item) => {
    html += "<tr>";
    html += `<td>${item.Name || ""}</td>`;
    html += `<td>${item.Age || ""}</td>`;
    html += `<td>${item.Gender || ""}</td>`;
    html += "</tr>";
  });

  // Close the table body and table tags
  html += "</tbody></table>";

  return html;
}
