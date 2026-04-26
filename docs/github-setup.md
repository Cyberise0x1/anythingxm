# Push the repo to GitHub

This project lives on Replit and currently has no GitHub remote. Pushing
to GitHub is the prerequisite for connecting the repo to Vercel for
continuous deployment.

There are two paths. **Pick one.** If in doubt, use Path A — it is the
recommended Replit flow and does not require you to handle credentials.

---

## Optional pre-push cleanup

There is one tracked file in the repo that is harmless locally but bloats
the GitHub repository: `zipFile.zip` at the repo root, ~10 MB. It looks
like a one-off scratch archive. If you don't need it on GitHub, untrack
it before the first push:

```bash
git rm --cached zipFile.zip
git commit -m "chore: untrack scratch zipFile.zip"
```

The local file stays on disk. The new root `.gitignore` already lists
`zipFile.zip`, so once untracked it stays out of future commits.

If you do want it on GitHub, just skip this step.

---

## Path A — One-click connect from Replit (recommended)

Use this if you do **not** already have a GitHub repository for XM Real
Estate, or if you would like Replit to create one for you.

1. In the Replit workspace, open the **Tools** panel on the left sidebar
   and click **Git**.
2. Click **Connect to GitHub**. A GitHub OAuth window opens — sign in
   and authorise the Replit GitHub App when prompted.
3. Replit asks where to create the new GitHub repository:
   - **Owner**: pick your personal account or an organisation you own.
   - **Repository name**: e.g. `xm-real-estate`.
   - **Visibility**: choose **Private** unless you intentionally want
     the code public. Vercel can import private repos.
4. Click **Create & push**. Replit will:
   - create the repository on GitHub,
   - add it as the `origin` remote in this Repl,
   - push the current `main` branch.
5. Verify in your browser at
   `https://github.com/<your-account>/<repo-name>` that the files are
   there. You should see this `README.md` on the repo's landing page.

That's it. From now on the Git pane in Replit shows a **Push** /
**Pull** button you can use after every change.

---

## Path B — Push to an existing GitHub repository (manual)

Use this if you have already created an empty repository on GitHub and
want to push this Repl into it without going through Replit's
connector.

You will need a **GitHub Personal Access Token (PAT)** with `repo`
scope. Generate one here:

1. Visit <https://github.com/settings/personal-access-tokens/new> (or
   *Settings → Developer settings → Personal access tokens →
   Fine-grained tokens → Generate new token*).
2. Give it a name like `replit-xm-real-estate`, an expiry, and access
   to the single repository you will push to.
3. Under **Repository permissions** grant **Contents: Read and write**.
4. Click **Generate token** and copy the token. **You will only see it
   once.**

Then in the Replit shell of this Repl, run (replacing the placeholders):

```bash
# 1. Add your GitHub repo as the `origin` remote
git remote add origin https://github.com/<your-account>/<repo-name>.git

# 2. Push the main branch.
#    When prompted for a username, enter your GitHub username.
#    When prompted for a password, paste the PAT (NOT your GitHub password).
git push -u origin main
```

If you prefer to bake the PAT into the remote URL instead of being
prompted (less secure but convenient for one-off use), do:

```bash
git remote add origin https://<github-username>:<PAT>@github.com/<your-account>/<repo-name>.git
git push -u origin main
# Immediately rotate the PAT or re-set the remote without it once the
# initial push succeeds:
git remote set-url origin https://github.com/<your-account>/<repo-name>.git
```

> ⚠️ **Never commit the PAT into the repo, paste it into a code file,
> or share it in chat.** The token grants write access to your
> repository.

After the push, confirm:

```bash
git remote -v
# Should show:
# origin  https://github.com/<your-account>/<repo-name>.git (fetch)
# origin  https://github.com/<your-account>/<repo-name>.git (push)
```

---

## After pushing

Once the repository is on GitHub, the next step is the deployment task
that adapts the codebase for Vercel and walks through the first deploy.
Until that work merges, you can already:

- Browse the code on GitHub.
- Open issues / PRs against the repo.
- Add collaborators in the repo's GitHub *Settings → Collaborators*
  pane.

Do **not** create a Vercel project yet — the codebase still needs the
Vercel-specific build configuration that the follow-up task adds.
Importing it now would result in a failed first deploy.

---

## Troubleshooting

- **`fatal: refusing to merge unrelated histories`** when pushing to a
  pre-existing repo: the GitHub repo has commits that do not exist
  here. The safest fix is to create a fresh empty GitHub repo and
  push to that instead, rather than trying to merge histories.
- **`remote: Permission to … denied`**: your PAT does not have
  `Contents: Read and write` on the target repository, or it has
  expired. Generate a new fine-grained PAT scoped to the repo.
- **The Replit "Connect to GitHub" button is missing or greyed out**:
  open the Replit account settings and confirm a GitHub account is
  linked under *Account → Connected services*. Re-link if needed,
  then return to the Git pane.
- **`error: src refspec main does not match any`**: this Repl's
  default branch may be named `master`. Check with
  `git branch --show-current`. If it is `master`, run
  `git push -u origin master` instead, or rename it first with
  `git branch -m master main`.
