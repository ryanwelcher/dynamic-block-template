const { join } = require( 'path' );

module.exports = {
    defaultValues: {
        folderName: "src",
        editorScript: 'file:./index.js',
        editorStyle: 'file:./index.css',
        style: 'file:./style-index.css',
        wpEnv: true
    },
    templatesPath: join( __dirname, 'plugin' ),
    blockTemplatesPath: join( __dirname, 'block' ),
};