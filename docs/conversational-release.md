# Phase 6 — conversational artifact release proof

2026-10-20. **Local artifact verified; public enablement NOT RUN.** Phase 5 feature
commit `3a6c4db` is self-contained on prior HEAD `079e357`; the independent dirty
homepage refresh is still preserved in the working tree. Phase 6 only adds this
runbook and `.github/workflows/conversational.yml`, delivered in this phase commit.
No existing dirty source/config/test/screenshot was written or regenerated.

## Actual committed-source proof

A new clean `git archive HEAD` of **`3a6c4db`**, with only installed `node_modules`
symlinked, was extracted to:

`/var/folders/w_/v1gqv36n2z78xj8g_t0j13b80000gn/T/opencode/phase6-landing-head.Vht0m6`

No dirty homepage components/helpers/configuration, `.env`, Flickr keys, copied
credentials or local acquisition files were included. Running this command in
that archive passed:

```sh
npx playwright test -c playwright.conversational.config.ts
```

**21 passed / 15 intentional disabled-variant skips**, 35.7 seconds locally.
Both exact gate states independently run Astro check/build, then serve the real
page/component trees in Chromium/Firefox/WebKit. Enabled tests cover honest
illustration, metadata/curated URLs, optional analytics failure, keyboard and
320/390/768/1440px horizontal-overflow checks. Disabled checks assert no delivered
starter/conversation markup. The sole build-time external Flickr profile lookup
uses the existing committed fixture; it is not a production credential test.
No user snapshot was updated. Default production Astro build's real profile
lookup remains a release-environment check, not a locally mocked credentials pass.

The new mandatory `conversational.yml` workflow runs the same on/off artifact
checks from clean checkout, installs all three browser engines, uses `npm ci`,
requires no Flickr/model/AWS secret and never updates screenshots. Hosted workflow
execution/branch protection was NOT RUN/NOT CHANGED.

For the current pnpm/Astro 7 checkout, install with `pnpm install --frozen-lockfile`
and run `pnpm exec playwright test -c playwright.conversational.config.ts`.
The workflow uses pnpm rather than the historical npm lockfile. Preview children
use the installed Astro CLI and `--ignore-lock`, keeping them foreground-owned by
Playwright even when Astro detects an agent. Both flag variants remain isolated.

## Preservation evidence

Before and after verification, `git diff --binary | shasum -a 256` was exactly:

`503f04984c630c9e7fc4a9efa908e764ccc6ccee636b48453c97069442af4221`

This covers every tracked dirty source/config/test/snapshot byte, including all
three existing homepage baselines. Existing untracked refresh-file SHA-256 values
also matched before/after:

| User-owned path | SHA-256 |
| --- | --- |
| `src/components/home/HomePricing.astro` | `5700e4ff4d2ee18036bb8b2d01e723d4e3df57ebddc107ca3da66aa7af417afe` |
| `src/components/home/HomeSignup.astro` | `5d1619b3ca28e6a4114d2779f30a3e42bc56a9c79853d7df5d4ada533069b701` |
| `src/components/home/HomeUseCases.astro` | `a5722e3a27f9641666c10053e8d2a355ed4706e39610ff440ac296d26b4015df` |
| `src/styles/homepage.css` | `001f1a5080a9a7048d2345cf6bb617b6545f05d2e0921fec5dfb5b54eabfb130` |
| `src/utils/homepageLinks.ts` | `b708dda5bc7379de25f3b6990c4afe56997695345db12a8dc4fed0d2a3adbc62` |
| `tests/homepage.spec.ts` | `fe8fb004d8b82608ebc0f55a5d16aa8b8bcfce2c5efe2ae3e8faa0acb7798667` |

The old Phase 5 index-only staging patch instructions in
`docs/conversational-preview.md` are historical: the feature is **already committed**
as `3a6c4db`. Do not reapply that patch or stage the dirty index page wholesale.

## Release order and rollback

Gate remains exact build-time `ENABLE_CONVERSATIONAL_SKEDR === "true"`, default off.
The screenshot/conversation is explicitly illustrative; no action executes on the
landing page. Fixed starter IDs become editable unsent goals in the actual app.

1. Deploy API schema/shared domain writers/scope fences/native/growth contracts.
2. Verify deployed model role/profile/IAM/stream/recovery/operational alerts and
   certified native cohort through the existing operations runbook.
3. Deploy compatible app and JWT hard-refresh behavior. Verify actual signup,
   email, OAuth, scoped group/photo actions, confirmed all-destination sharing,
   queued-vs-Flickr outcomes, debt/quota/retry recovery and durable attribution.
4. **Only then** build/promote this landing flag. Preserve testimonials, tracking,
   pricing policy and independent refresh; do not publish unavailable capabilities.

Rollback public promotion by rebuilding without the flag, then use the app/API
runbooks for their separate gates. Keep funded native work, recovery, clocks,
account certification/tombstones and AI budgets/receipts intact. A landing flag
does not cancel accepted work or authorize backend rollback to legacy execution.

Deployed availability, actual OAuth/Flickr writes, production model-role access,
activation rate/SL MRR, and production latency/cost are **NOT RUN**. Complete local
requirements matrix/phase ledger and operational detail:
`api/docs/assistant-phase6-release.md`; compatible app handoff:
`app/docs/assistant-release.md` in the coordination workspace.

## Exact Phase 6 whole-file manifest

```text
.github/workflows/conversational.yml
docs/conversational-release.md
```

No other landing change belongs to Phase 6. The coordinator delivers these two
files in a phase-scoped commit; no push, deployment or public feature enablement
has been performed.
