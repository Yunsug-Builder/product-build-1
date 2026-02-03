document.addEventListener('DOMContentLoaded', function() {
    const articleContentEl = document.getElementById('article-content');
    const params = new URLSearchParams(window.location.search);
    const articleId = parseInt(params.get('id'));

    // The 'articles' array is loaded from /js/article-data.js
    const article = articles.find(a => a.id === articleId);

    if (article) {
        // Update page title and meta description
        document.title = `${article.title} - Tech Innovators Conference`;
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', article.summary);
        }

        // Create and structure the article header
        const header = document.createElement('header');
        header.className = 'article-header';

        const title = document.createElement('h1');
        title.textContent = article.title;

        const meta = document.createElement('p');
        meta.className = 'article-meta';
        meta.textContent = `${article.author} · ${article.date}`;

        const image = document.createElement('img');
        image.src = article.thumbnailUrl;
        image.alt = article.title;
        image.className = 'article-featured-image';
        
        header.appendChild(title);
        header.appendChild(meta);

        // Create the article body
        const body = document.createElement('div');
        body.className = 'article-body';
        body.innerHTML = article.content; // The content is already HTML

        // Append all parts to the main content element
        articleContentEl.appendChild(header);
        articleContentEl.appendChild(image);
        articleContentEl.appendChild(body);

    } else {
        // Handle case where article is not found
        articleContentEl.innerHTML = `
            <div style="text-align: center;">
                <h1>아티클을 찾을 수 없습니다.</h1>
                <p>요청하신 아티클이 존재하지 않거나, 주소가 잘못되었습니다.</p>
                <a href="/articles.html">아티클 목록으로 돌아가기</a>
            </div>
        `;
    }
    
    // Handle theme switching
    const themeSwitcher = document.getElementById('theme-switcher');
    if (themeSwitcher) {
        const theme = localStorage.getItem('theme');
        if (theme === 'light') {
            document.documentElement.classList.add('light-mode');
            themeSwitcher.checked = false; // Assuming unchecked is light
        } else {
            themeSwitcher.checked = true; // Assuming checked is dark
        }

        themeSwitcher.addEventListener('change', function() {
            if (this.checked) {
                document.documentElement.classList.remove('light-mode');
                localStorage.setItem('theme', 'dark');
            } else {
                document.documentElement.classList.add('light-mode');
                localStorage.setItem('theme', 'light');
            }
        });
    }
});
