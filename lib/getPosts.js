const API_URL = "https://6a4afa00edfa6a2b5fd82325.mockapi.io/posts";

export async function getPosts() {
  const response = await fetch(API_URL, {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch blog posts");
  }

  return response.json();
}

export async function getPost(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
    throw new Error("Blog post not found");
  }

  return response.json();
}
