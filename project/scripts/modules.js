
export function fetchBooksData(url) {
    return fetch(url)
        .then(response => response.json())
        .catch(error => console.error('Error fetching data:', error));
}

export function createBookCard(book) {
    const card = document.createElement("section");
    card.classList.add("book-card");

    const title = document.createElement("h3");
    const author = document.createElement("p");
    const releaseDate = document.createElement("p");
    const price = document.createElement("p");
    const image = document.createElement("img");

    title.textContent = book.name;
    author.innerHTML = `<span class="label">Author:</span> ${book.author}`;
    releaseDate.innerHTML = `<span class="label">Released:</span> ${book.release}`;
    price.innerHTML = `<span class="label">Price:</span> ${book.price} $`;

    image.setAttribute("src", book.imageUrl);
    image.setAttribute("alt", `${book.name} cover`);
    image.setAttribute("loading", "lazy");

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(releaseDate);
    card.appendChild(price);
    card.appendChild(image);

    return card;
}

export function updateReviewCounter() {
    const reviewCount = localStorage.getItem('reviewCount') || 0;
    localStorage.setItem('reviewCount', parseInt(reviewCount) + 1);
    document.getElementById('review-counter').textContent = 'Number of completed reviews: ' + localStorage.getItem('reviewCount');
}
