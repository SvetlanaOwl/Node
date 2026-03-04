function getUserPromise(userId) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id: userId, name: 'John' });
    }, 1000);
  });
}

function getUserPostsPromise(user) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(['Post 1', 'Post 2']);
    }, 1000);
  });
}

// Using async/await
async function getUserAndPosts() {
  try {
    const user = await getUserPromise(1);
    console.log('User:', user);
    
    const posts = await getUserPostsPromise(user);
    console.log('Posts:', posts);
  } catch (error) {
    console.error(error);
  }
}

getUserAndPosts();