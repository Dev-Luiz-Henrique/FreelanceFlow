const path = require('path');
const fs = require('fs');

module.exports = (app) => {
    const routesDir = path.join(__dirname);

    fs.readdirSync(routesDir).forEach(file => {
        if (file === 'index.js' || !file.endsWith('.js')) return;

        const route = require(path.join(routesDir, file));
        app.use('/', route);
    });
};