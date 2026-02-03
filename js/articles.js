document.addEventListener('DOMContentLoaded', function() {
    const articlesList = document.getElementById('articles-list');

    if (articlesList) {
        articles.forEach(article => {
            const articleElement = document.createElement('article');
            articleElement.className = 'article-item';

            const link = document.createElement('a');
            // SEO-friendly URL
            link.href = `/articles/${article.slug}`;

            const title = document.createElement('h2');
            title.textContent = article.title;

            const summary = document.createElement('p');
            summary.textContent = article.summary;

            const meta = document.createElement('div');
            meta.className = 'article-meta';
            meta.textContent = `${article.author} | ${article.date} | ${article.category}`;

            link.appendChild(title);
            articleElement.appendChild(link);
            articleElement.appendChild(summary);
            articleElement.appendChild(meta);
            
            articlesList.appendChild(articleElement);
        });
    }
});