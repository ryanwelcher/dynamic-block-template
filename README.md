# Dynamic Block Template

This template will scaffold a plugin that is set up for registering multiple blocks in a single plugin create using the [`@wordpress/create-block`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-create-block/) tool.

It also provides integration with the `@wordpress/env` package for a local development solution.

## Usage
Run the following in the terminal of your choice:

`npx @wordpress/create-block example-plugin --template @ryanwelcher/dynamic-block-template`

The name of the plugin ( example-plugin in the example above) is used as both the name of the plugin and the name of the block being created. This is due to the current `@wordpress/create-block` tool expecting a single block per plugin.


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
.wp-env.json
{example-block}.php
package.json
package-lock.json
```
### @wordpress/env setup

In order to use the `@wordpress/env`, you will need to add `"env": "wp-env"` to the scripts in package.json.
Please refer to the [`@wordpress/env` docs ](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-env/) for details on requirements and usage.