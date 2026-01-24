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

// Using promise
getUserPromise(1)
  .then(user => {
    console.log('User:', user);
    return getUserPostsPromise(user);
  })
  .then(posts => {
    console.log('Posts:', posts);
  })
  .catch(error => {
    console.error(error);
  });