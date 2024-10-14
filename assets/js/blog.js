const blogsPerPage = 6; // Number of blogs to display per page
let currentPage = 1; // Start at page 1

// Function to render blogs dynamically
function renderBlogs(page = 1) {
  const sortedBlogs = blogs.sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date in descending order
  const startIndex = (page - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;
  const blogsToDisplay = sortedBlogs.slice(startIndex, endIndex);

  const blogContainer = document.querySelector('.blog-posts .row');
  blogContainer.innerHTML = ''; // Clear previous content

  blogsToDisplay.forEach(blog => {
    const blogHtml = `
      <div class="col-lg-4">
        <article>
          <div class="post-img">
            <img src="${blog.image}" alt="" class="img-fluid">
          </div>
          <p class="post-category">${blog.category}</p>
          <h2 class="title">
            <a href="${blog.blogLink}">${blog.title}</a>
          </h2>
          <div class="d-flex align-items-center">
            <img src="${blog.authorImage}" alt="" class="img-fluid post-author-img flex-shrink-0">
            <div class="post-meta">
              <p class="post-author">${blog.author}</p>
              <p class="post-date">
                <time datetime="${blog.date}">${new Date(blog.date).toDateString()}</time>
              </p>
            </div>
          </div>
        </article>
      </div>`;
    blogContainer.innerHTML += blogHtml;
  });
}

// Function to render pagination
function renderPagination(totalBlogs, blogsPerPage) {
  const totalPages = Math.ceil(totalBlogs / blogsPerPage);
  const paginationContainer = document.querySelector('#blog-pagination ul');
  paginationContainer.innerHTML = ''; // Clear previous content

  // Previous button
  paginationContainer.innerHTML += `
    <li><a href="#" onclick="changePage(${currentPage - 1})"><i class="bi bi-chevron-left"></i></a></li>`;

  // Page numbers
  for (let i = 1; i <= totalPages; i++) {
    paginationContainer.innerHTML += `
      <li><a href="#" class="${i === currentPage ? 'active' : ''}" onclick="changePage(${i})">${i}</a></li>`;
  }

  // Next button
  paginationContainer.innerHTML += `
    <li><a href="#" onclick="changePage(${currentPage + 1})"><i class="bi bi-chevron-right"></i></a></li>`;
}

// Function to handle page change
function changePage(page) {
  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  if (page < 1 || page > totalPages) return; // Prevent invalid page navigation

  currentPage = page;
  renderBlogs(currentPage);
  renderPagination(blogs.length, blogsPerPage);
}

// Initial render
window.onload = function () {
  renderBlogs(currentPage);
  renderPagination(blogs.length, blogsPerPage);
}
