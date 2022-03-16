const { join } = require( 'path' );

module.exports = {
    defaultValues: {
        folderName: "src",
        editorScript: 'file:./index.js',
        editorStyle: 'file:./index.css',
        style: 'file:./style-index.css',
        customScripts: {
            'start': 'wp-scripts start --webpack-copy-php',
            'build': 'wp-scripts build --webpack-copy-php'
        }
    },
    templatesPath: join( __dirname, 'plugin' ),
    blockTemplatesPath: join( __dirname, 'block' ),
};