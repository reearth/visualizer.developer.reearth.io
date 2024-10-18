# Re:Earth Visualizer Developer Documentation

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

## Markdown Snippets

We have provided a set of code snippets for Visual Studio Code to help you write markdown files faster. Please check this file for supported snippets.

```planetext
.vscode/mdx.code-snippets
```

## Manage Codes

To avoid markdown files from becoming too long, we have provided a way to manage codes in separate files. Please put your code file to `src/content/code/` and manage with the same folder structure as the document.
You can import the code text and use it like this:

```mdx
import Add3dModelCode from "@code/plugin-api/layers/add-3d-model?raw";
import { clearNoCheck } from "@code/utils";

<Code code={clearNoCheck(Add3dModelCode)} lang="ts" />
```

## Mangae Assets

Please manage the assets in subfolders of `src/assets` following the same structure as the document.
Use `@assets` instead of relative paths to refer to the assets in markdown files.

```markdown
![Re:Earth Logo](@assets/ReearthLogoColorful.svg)
```

## Project Structure

Inside of your Astro + Starlight project, you'll see the following folders and files:

```planetext
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── code/
│   │   ├── docs/
│   │   ├── i18n/
│   │   └── config.ts
│   ├── styles/
│   └── env.d.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Want to learn more?

Check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).
