# Dynamic Block Template

This template will scaffold a plugin that is set up for registering dynamic block using the [`@wordpress/create-block`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-create-block/) tool.
## Usage
Run the following in the terminal of your choice:

`npx @wordpress/create-block example-plugin --template @ryanwelcher/dynamic-block-template`


## Structure

Once the command has completed, the following structure will be created:

```
- build
- src
--> {example-block}
---> block.json
---> edit.js
---> editor.scss
---> index.js
---> style.scss
.editorconfig
.eslintrc
.gitignore
{example-block}.php
package.json
package-lock.json
```