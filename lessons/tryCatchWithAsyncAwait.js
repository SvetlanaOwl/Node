const fs = require('fs');

async function loadUserData(userId) {
    try {
        const data = await fs.read(`users/${userId}.json`, 'utf8'); //simulate reading user datd from a
        const user = JSON.parse(data);
        if (!user.email) {
            throw new Error('Invalid user data: missing email');
        }

        return user;
    } catch (error) {
        //Handle different error types
        if (error.code === 'ENOENT') {
            throw new Error(`User ${userId} not found`);
        } else if (error instanceof SyntaxError) {
            throw new Error('Invalid user data format');
        }
        //re-throw other errors
        throw error;
    } finally {
        //Cleanup code that runs whether sucessful or not
        console.log(`Finshed processing user ${userId}`);
    }
    }

    //usage
    (async () => {
        try {
            const user = await loadUserData(123);
            console.log('User loaded', user);
        } catch (error) {
            console.error('Failed to load user: ', error.message);
            //handle errror (e.g., show to user, retry, etc.)
        }
    }) ();