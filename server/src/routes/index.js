import path from 'path';
import fs from 'fs';

export default (app) => {
    const routesDir = path.join("./");

    fs.readdirSync(routesDir).forEach(file => {
        if (file === 'index.js' || !file.endsWith('.js')) return;

        import(path.join(routesDir, file)).then(route => {
            app.use('/', route.default);
        }).catch(err => {
            console.error(`Failed to load route ${file}:`, err);
        });
    });
};