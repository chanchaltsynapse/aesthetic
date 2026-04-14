async function loadPosts() {
  const container = document.getElementById("posts");

  // 1. Get list of files
  const indexRes = await fetch("/content/posts/index.json");
  const files = await indexRes.json();

  // 2. Load each post
  for (let file of files) {
    const res = await fetch(`/content/posts/${file}`);
    const post = await res.json();

    // 3. Create UI
    const div = document.createElement("div");
    div.className = "post";

    div.innerHTML = `
      <img src="${post.image}" width="200" />
      <h2>${post.title}</h2>
      <p>${post.body}</p>
    `;

    container.appendChild(div);
  }
}

loadPosts();