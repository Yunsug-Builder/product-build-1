document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop();

    if (currentPage === 'board.html') {
        initBoardPage();
    } else if (currentPage === 'view.html') {
        initViewPage();
    }
});

function initBoardPage() {
    const postsGrid = document.getElementById('posts-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');

    function renderPosts(filter = 'all') {
        postsGrid.innerHTML = '';
        const filteredPosts = filter === 'all' ? posts : posts.filter(p => p.category === filter);

        if (filteredPosts.length === 0) {
            postsGrid.innerHTML = '<p>No posts found in this category.</p>';
            return;
        }

        filteredPosts.forEach(post => {
            const card = document.createElement('a');
            card.href = `view.html?id=${post.id}`;
            card.className = 'post-card-link';

            card.innerHTML = `
                <article class="post-card-new">
                    <div class="card-image">
                        <img src="${post.thumbnailUrl}" alt="${post.title}">
                    </div>
                    <div class="card-content">
                        <span class="card-category">${post.category}</span>
                        <h3 class="card-title">${post.title}</h3>
                        <p class="card-summary">${post.summary}</p>
                        <div class="card-footer">
                            <span class="card-date">${post.date}</span>
                        </div>
                    </div>
                </article>
            `;
            postsGrid.appendChild(card);
        });
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Render filtered posts
            renderPosts(category);
        });
    });

    // Initial render
    renderPosts();
}

function initViewPage() {
    const postContentContainer = document.getElementById('post-content');
    const urlParams = new URLSearchParams(window.location.search);
    const postId = parseInt(urlParams.get('id'), 10);

    const post = posts.find(p => p.id === postId);

    if (post) {
        // Update meta tags for SEO
        document.title = `${post.title} - Tech Trends & Insights`;
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', post.summary);
        }

        // Render post content
        postContentContainer.innerHTML = `
            <h1 class="post-full-title">${post.title}</h1>
            <div class="post-full-meta">
                <span class="post-full-author">By ${post.author}</span>
                <span class="post-full-date">${post.date}</span>
                <span class="post-full-category">${post.category}</span>
            </div>
            <div class="post-full-image">
                <img src="${post.thumbnailUrl}" alt="${post.title}">
            </div>
            <div class="post-full-body">
                ${post.content}
            </div>
        `;
    } else {
        postContentContainer.innerHTML = '<h1>Post not found</h1><p>The requested post could not be found. Please return to the <a href="board.html">board</a>.</p>';
        document.title = 'Post Not Found - Tech Trends & Insights';
    }
}
