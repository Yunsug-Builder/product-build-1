document.addEventListener('DOMContentLoaded', function() {
    const articlesList = document.getElementById('articles-list');

    if (articlesList) {
        articles.forEach(article => {
            // Create the main link wrapper
            const link = document.createElement('a');
            link.href = `article.html?id=${article.id}`;
            link.className = 'post-card-link';

            // Create the card container
            const card = document.createElement('div');
            card.className = 'post-card-new';

            // Create the image container
            const imageContainer = document.createElement('div');
            imageContainer.className = 'card-image';
            const image = document.createElement('img');
            image.src = article.thumbnailUrl;
            image.alt = article.title;
            imageContainer.appendChild(image);

            // Create the content container
            const content = document.createElement('div');
            content.className = 'card-content';

            // Create category, title, summary, and footer elements
            const category = document.createElement('div');
            category.className = 'card-category';
            category.textContent = article.category;

            const title = document.createElement('h2');
            title.className = 'card-title';
            title.textContent = article.title;

            const summary = document.createElement('p');
            summary.className = 'card-summary';
            summary.textContent = article.summary;

            const footer = document.createElement('div');
            footer.className = 'card-footer';
            footer.textContent = `${article.author} | ${article.date}`;

            // Append elements to content
            content.appendChild(category);
            content.appendChild(title);
            content.appendChild(summary);
            content.appendChild(footer);

            // Append image and content to the card
            card.appendChild(imageContainer);
            card.appendChild(content);

            // Append the card to the link
            link.appendChild(card);
            
            // Append the link to the main list
            articlesList.appendChild(link);
        });
    }
});