const fs = require('fs');
const md5 = require('md5');
const mix = require('laravel-mix');
const path = require('path');

class VersionFilenames {
    boot() {
        mix.version().then(() => {
            for (let asset in Mix.manifest.read()) {
                const parsedPath = path.parse(asset);
                const file = fs.readFileSync(path.join(Mix.config.publicPath, asset), 'utf8');
                const newFilename = parsedPath.name + '.' + md5(file).substr(0, 20) + parsedPath.ext;

                Mix.manifest.manifest[asset] = path.join(parsedPath.dir, newFilename);
            }

            Mix.manifest.refresh();
        });
    }
}

mix.extend('versionFilenames', new VersionFilenames());
