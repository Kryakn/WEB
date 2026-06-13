const posts = [
  { postId: 1, likes: 100, comments: 20, shares: 10 },
  { postId: 2, likes: 200, comments: 50, shares: 30 }
];

const engagedPosts = posts
  .map(post => ({
    ...post,
    engagementScore:
      post.likes * 1 +
      post.comments * 2 +
      post.shares * 3
  }))
  .filter(post => post.engagementScore > 300);

console.log(" Engagement > 300:", engagedPosts);