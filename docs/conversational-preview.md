# Conversational homepage — Phase 5 local handoff

Build-time gate: **`process.env.ENABLE_CONVERSATIONAL_SKEDR === "true"`**.
Default is off; do not enable public acquisition messaging until the API/app
operating flow is deployed and verified. No live bot or production metrics are
claimed. The enabled page labels its conversation as illustrative.

The self-contained `HomeConversationalPreview.astro` and `conversationalLinks.ts`
provide the hero, Connect → Describe → Review → Share flow, fixed starter links,
privacy/fair-use/queued-vs-Flickr-outcome explanation, focus/mobile styles and
fail-open optional click analytics. It uses the existing brand/navigation/footer
and real testimonial component. Enabled-only styles account for HEAD's hydrated
header wrapper, negative mobile control margins and decorative testimonial blobs.
The enabled index omits legacy mission statistics and generic final CTA; the
feature-off manual page retains HEAD content/metadata/CTA. The working tree also
retains the user's independent manual-homepage refresh behind the disabled gate.

CTA destination is fixed `https://app.skedr.io/auth/create-account`; source is
`skedr_landing` / `website` / `conversational_skedr`. `assistant_starter` accepts
only `bird-sharing`, `landscape-groups`, `existing-groups`; there is no arbitrary
prompt or redirect. The app records the allowlisted source early, persists it
through signup/OAuth and associates it with authenticated server evidence. A
starter is an editable unsent goal, never a command on arrival.

## Coordinator staging manifest — do not stage the dirty index wholesale

Stage only these whole files when authorized:

```text
.gitignore                                      # only added .conversational-builds/
src/components/home/HomeConversationalPreview.astro
src/utils/conversationalLinks.ts
playwright.conversational.config.ts
tests/conversational.astro.config.mjs
tests/conversational-flickr.mjs
tests/conversational.spec.ts
docs/conversational-preview.md
```

Apply **only** the HEAD-relative index patch to the index when authorized:

```sh
git apply --cached --check /var/folders/w_/v1gqv36n2z78xj8g_t0j13b80000gn/T/opencode/phase5-landing-index.patch
git apply --cached /var/folders/w_/v1gqv36n2z78xj8g_t0j13b80000gn/T/opencode/phase5-landing-index.patch
git diff --cached -- src/pages/index.astro
```

Those are handoff instructions, **not commands executed by this task**. The patch
is based on `079e357` and imports no untracked homepage helper/component/style.
Keep all other dirty/untracked user homepage refresh files, existing homepage
tests, Playwright configuration and screenshot baselines out of the Phase 5 commit.

## Isolated proof and verification

An archive of landing HEAD plus only the manifest source/test files and minimal
index patch is assembled at:

`/var/folders/w_/v1gqv36n2z78xj8g_t0j13b80000gn/T/opencode/phase5-landing-isolated`

Only installed dependencies are symlinked. No local environment/credential files
are copied. `tests/conversational.astro.config.mjs` mocks the **external Flickr SDK
build-time profile lookup** using `conversational-flickr.mjs`; production components
and metadata stay real. Default Astro configuration is used for real release builds.

Run `npx playwright test -c playwright.conversational.config.ts` in either the
working repository or isolated artifact. It independently builds both feature
states, serves separate output trees, and checks Chromium/Firefox/WebKit. Enabled
cases cover metadata/curated URL contracts, keyboard/analytics failure, semantics
and 320/390/768/1440px layouts. Disabled-only cases assert no delivered starter or
conversational markup. Enabled-only cases are intentionally skipped in disabled
projects. Screenshots are review artifacts, not replacements for user baselines.

Full cross-project verification, delivery order and precise counts:
`api/docs/assistant-phase5-verification.md` in the coordination workspace.
