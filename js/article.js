document.addEventListener('DOMContentLoaded', function() {
    const articleContent = document.getElementById('article-content');
    
    // SEO 친화적인 URL에서 슬러그 추출
    const pathParts = window.location.pathname.split('/');
    const slug = pathParts[pathParts.length - 1];

    if (articleContent && slug) {
        const article = articles.find(a => a.slug === slug);

        if (article) {
            // SEO를 위한 메타 태그 업데이트
            document.title = `${article.title} - Tech Innovators Conference`;
            document.querySelector('meta[name="description"]').setAttribute("content", article.summary);
            
            const ogTitle = document.createElement('meta');
            ogTitle.setAttribute('property', 'og:title');
            ogTitle.setAttribute('content', article.title);
            document.head.appendChild(ogTitle);

            const ogDescription = document.createElement('meta');
            ogDescription.setAttribute('property', 'og:description');
            ogDescription.setAttribute('content', article.summary);
            document.head.appendChild(ogDescription);

            const ogType = document.createElement('meta');
            ogType.setAttribute('property', 'og:type');
            ogType.setAttribute('content', 'article');
            document.head.appendChild(ogType);

            const ogUrl = document.createElement('meta');
            ogUrl.setAttribute('property', 'og:url');
            // og:url을 새로운 SEO 친화적인 형식으로 업데이트
            ogUrl.setAttribute('content', `https://product-build-1.pages.dev/articles/${article.slug}`);
            document.head.appendChild(ogUrl);

            // 아티클 콘텐츠 채우기
            const articleHtml = `
                <article>
                    <header class="article-header">
                        <h1>${article.title}</h1>
                        <div class="article-meta">
                            <span>By ${article.author}</span> | 
                            <span>${article.date}</span> | 
                            <span>${article.category}</span>
                        </div>
                    </header>
                    <div class="article-body">${article.content}</div>
                </article>
            `;
            articleContent.innerHTML = articleHtml;
        } else {
            articleContent.innerHTML = '<h1>아티클을 찾을 수 없습니다.</h1><p><a href="/articles.html">목록으로 돌아가기</a></p>';
        }
    }
});