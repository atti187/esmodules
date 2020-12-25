# Example repo of using esmodules with Apps Script

Currently, Google Apps Script does **not** support ES modules. Hence the typical `export`/`import` pattern cannot be used and will fail.

The trick here is to make sure not to export any functions in your entry point code, e.g. `index.ts`, _and_ to prevent any generation of export statement in the final bundle (see the custom rollup plugin in [rollup.config.js](./rollup.config.js).

## Usage

* Add your script id to [.clasp.json](./.clasp.json)
* Put your code into [index.ts](./src/index.ts)

## Build

`npm run build`

## Deploy

`npm run deploy`

