// Simulate an API call that fails
async function fetchUserData() {
  try {
    // Simulating a failed API request
    const response = await simulateHttpRequest();
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const user = await response.json();
    console.log('User data:', user);
    return user;
  } catch (error) {
    console.error('Error in fetchUserData:', error.message);
    throw error; // Re-throw the error
  }
}

// Simulate an HTTP request that fails
function simulateHttpRequest() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        ok: false,
        status: 404,
        json: () => Promise.resolve({ error: 'Not found' })
      });
    }, 1000);
  });
}

// Using catch with an async function
fetchUserData().catch(error => {
  console.log('Caught outside of async function:', error.message);
});