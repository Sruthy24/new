const API =
  "https://66c5b85f134eb8f43494b8d2.mockapi.io/posts";

export async function getPosts() {
  const res = await fetch(API, {
    cache: "no-store",
  });

  return res.json();
}

export async function getPost(id) {
  const res = await fetch(`${API}/${id}`, {
    cache: "no-store",
  });

  return res.json();
}
