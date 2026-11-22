# Skedr landing

Astro marketing website for Skedr. Use **pnpm 12.6.0** (the same pinned version
as the app) and the Node.js version in `.node-version`. Commit only
`pnpm-lock.yaml`; do not generate npm or Yarn lockfiles.

## Setup

Install pnpm 12.6.0 using your preferred version manager, or:

```sh
npm install --global pnpm@12.6.0
pnpm install --frozen-lockfile
```

Dependency install scripts are explicitly reviewed in `pnpm-workspace.yaml`.
Keep optional dependencies enabled: Sharp needs platform-specific binaries.
The existing Rollup WASM override is now recorded in that file as well.

Local production builds need `PUBLIC_FLICKR_KEY` in `.env` for build-time Flickr
lookups. Keep credentials out of Git.

## Cloudflare Pages

Set these for **both Production and Preview** in the Pages project settings:

| Setting | Value |
| --- | --- |
| Build command | `pnpm install --frozen-lockfile && pnpm run build` |
| Build output directory | `dist` |
| `NODE_VERSION` | `22.23.4` (matching `.node-version`) |
| `PNPM_VERSION` | `12.6.0` (matching `packageManager`) |
| `SKIP_DEPENDENCY_INSTALL` | `true` |

Remove the old `YARN_VERSION` and `NPM_VERSION` overrides, retain existing
application environment variables, and clear the build cache for the first
migrated build. These dashboard settings are not configured by this repository.
The explicit install command prevents Cloudflare's automatic installer from
using Yarn and ignoring the committed pnpm lockfile.

Dependabot still uses `package-ecosystem: npm`: that ecosystem supports pnpm and
will update `pnpm-lock.yaml`. Old npm-lockfile PRs need regenerating after this
migration lands.

## Commands

| Command | Action |
| --- | --- |
| `pnpm install --frozen-lockfile` | Install the committed dependency tree |
| `pnpm dev` | Start the local server at `localhost:4321` |
| `pnpm build` | Check types and build into `dist/` |
| `pnpm preview` | Preview the production build |
| `pnpm exec playwright install --with-deps` | Install browser test dependencies |
| `pnpm test:e2e` | Run browser tests against a production build |
| `pnpm astro --help` | Show Astro CLI help |

See the [Astro documentation](https://docs.astro.build) for framework reference.
