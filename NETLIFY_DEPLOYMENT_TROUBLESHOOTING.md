# Netlify deploy failure: "preparing repo"

## Diagnosis

Relevant log lines:

- Line 5: "Failed during stage 'preparing repo'"
- Line 6: "Failing build: Failed to prepare repo"

These indicate the failure happens before the build step while Netlify is preparing/cloning/checkout of the repository.

### Likely causes (most common)

- Netlify cannot access or clone the repo because the Git provider link/permissions/token was revoked or insufficient.
- The repo includes git submodules that are private or use SSH-only URLs so Netlify cannot initialize them.
- The repo uses Git LFS and Netlify failed to fetch LFS objects during prepare/clone.
- Less likely: a corrupted repository, extremely large files, or other repo-level issues that prevent checkout.

## Solution — steps to diagnose and fix

### Verify the simple checks

- In the Netlify site UI, open **Deploys** → click the failed deploy and read the full deploy log for any additional clone/checkout errors (the UI often shows more detail than the tiny snippet you pasted).
- Confirm the branch you set Netlify to build still exists in the repo.

### Reconnect Git provider / repo (fixes expired tokens or revoked permissions)

- On Netlify: **Site settings** → **Build & deploy** → **Continuous Deployment** → **Repository**.
- Unlink and re-link the repository or re-install the Netlify GitHub App (or re-authorize the Git provider). This commonly resolves "preparing repo" errors caused by access/permissions.
- After re-linking, trigger a new deploy.

### If your repo uses submodules

- Check for a `.gitmodules` file in the repo root. Locally run:

```bash
git submodule status --recursive
```

- If submodules use SSH URLs or are private, change them to HTTPS or vendor (copy) the submodule contents into the main repo, or give Netlify access to those repos.

Example change to `.gitmodules` (if applicable):

```ini
[submodule "foo"]
  path = foo
  url = https://github.com/owner/foo.git
```

Commit the updated `.gitmodules` and push, then re-deploy.

### If your repo uses Git LFS

- Locally run:

```bash
git lfs ls-files
```

- If LFS is used, either commit actual files (remove LFS) or ensure Netlify can fetch LFS objects. Netlify’s Git provider integration sometimes fails to pull LFS objects during prepare; the simplest fix is to remove or vendor LFS-tracked files needed for the build.
- Alternatively, you can enable an approach that fetches LFS during build, but because the failure occurs during "prepare repo" this is often not sufficient — best is to remove or vendor LFS-tracked files needed for the build.

### Further checks if reconnecting doesn't fix

- Try cloning the repository from the Netlify builder environment (or a fresh machine) to reproduce:

```bash
git clone --recursive https://github.com/<owner>/<repo>.git
```

- Look for authentication errors, submodule clone errors, or LFS messages.
- If you see authentication errors, re-check Netlify’s Git integration permissions or set up a deploy key or personal access token as appropriate.

### Clear cache and re-deploy

- In Netlify, trigger **Clear cache and deploy** from the Deploys screen after you’ve fixed the access/submodule/LFS issue.

## Notes and links

- The log snippet points to repository preparation failing rather than a Node or build tool problem, so you don’t need to change Node versions for this error.
- If you later encounter Node version issues, see Netlify docs for changing Node: <https://docs.netlify.com/configure-builds/manage-dependencies/#node-js-and-javascript>.
- If you confirm the repo contains submodules or LFS and want help changing them to HTTPS or vendorizing files, paste the output of `git submodule status --recursive` and `git lfs ls-files` and I’ll provide exact commands/patches.
