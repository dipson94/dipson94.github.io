
const postsContainer = document.getElementById("posts-container");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");

let currentPage = 0;
const postsPerPage = 4;

function displayPosts() {
  postsContainer.innerHTML = "";

  const startIndex = currentPage * postsPerPage;
  const endIndex = (currentPage + 1) * postsPerPage;
  const currentPosts = posts.slice(startIndex, endIndex);

  currentPosts.forEach(post => {
    const postElement = document.createElement("div");
    postElement.innerHTML = post;
    postsContainer.appendChild(postElement);
  });

  prevButton.disabled = currentPage === 0;
  nextButton.disabled = endIndex >= posts.length;
}

prevButton.addEventListener("click", () => {
  if (currentPage > 0) {
    currentPage--;
    displayPosts();
  }
});

nextButton.addEventListener("click", () => {
  const totalPages = Math.ceil(posts.length / postsPerPage);
  if (currentPage < totalPages - 1) {
    currentPage++;
    displayPosts();
  }
});

displayPosts();
