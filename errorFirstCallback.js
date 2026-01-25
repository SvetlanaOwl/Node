const fs = require('fs');

function readConfigFile(filename, callback) {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
           // Handle specific error types
           if (err.code === 'ENOENT') {
            return callback(new Error(`Config file ${filename} not found`));
            } else if (err.code === 'EACCES') {
                return callback(new Error(`No permission tu read ${filename}`));
           }
           //For all other errrors
           return callback(err);
        }
        //Process data if no error
        try {
            const config = json.parse(data);
            callback(null, config); 
        } catch (parseError) {
            callback(new Error(`Invalid Json in ${filename}`));
        }
    });
}
//Usage
readConfigFile('config.json', (err, config) => {
    if (err) {
        console.error('Failed to read config: ', err.message);
        //Hangle the error (e.g., use default config)
        return;
    }
    console.log('Config loaded sucessfully: ', config);
});