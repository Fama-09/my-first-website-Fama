// Sample fashion data
const fashionData = [
  { title: "Summer Trends 2025", description: "Bright colors, floral prints, and oversized sunglasses are in." },
  { title: "Office Outfit Ideas", description: "Neutral blazers paired with wide-leg pants for a chic look." },
  { title: "Party Wear Guide", description: "Shimmery dresses and bold accessories are perfect for night outs." },
  { title: "Street Style Inspiration", description: "Sneakers with skirts and oversized hoodies are trending." },
  { title: "Sustainable Fashion", description: "Eco-friendly fabrics and thrift shopping are the new cool." }
];

// Get elements
const searchInput = document.getElementById("search");
const resultsContainer = document.getElementById("results");

// Function to show results
function displayResults(items) {
  resultsContainer.innerHTML = "";
  items.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<h3>${item.title}</h3><p>${item.description}</p>`;
    resultsContainer.appendChild(card);
  });
}

// Initial display
displayResults(fashionData);

// Search filter
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = fashionData.filter(item =>
    item.title.toLowerCase().includes(query) ||
    item.description.toLowerCase().includes(query)
  );
  displayResults(filtered);
});
