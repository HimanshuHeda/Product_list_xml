// Load the XML file
fetch('products.xml')
.then(response => response.text())
.then(data => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(data, "text/xml");

    // Extract product data
    const products = xmlDoc.getElementsByTagName("product");

    // Reference to the table body
    const tableBody = document.querySelector("#productTable tbody");

    // Loop through each product and create a table row
    for (let i = 0; i < products.length; i++) {
        const id = products[i].getElementsByTagName("id")[0].textContent;
        const name = products[i].getElementsByTagName("name")[0].textContent;
        const price = products[i].getElementsByTagName("price")[0].textContent;
        const category = products[i].getElementsByTagName("category")[0].textContent;

        // Create a new row
        const row = document.createElement("tr");

        // Create cells and append them to the row
        row.innerHTML = `
            <td>${id}</td>
            <td>${name}</td>
            <td>${price}</td>
            <td>${category}</td>
        `;

        // Append the row to the table body
        tableBody.appendChild(row);
    }
})
.catch(error => {
    console.error("Error loading XML file:", error);
});