# Knowledge Base

The single source of truth for all knowledge for your organization. Please add what you learned before you leave.

> **Note:** Ensure all employees update their respective content to keep the material up-to-date.

## Requirements

- [Node.js (LTS version recommended)](https://nodejs.org/en/download)

> npm is bundled with Node.js and does not need to be installed separately.

## Setup

```bash
# Confirm Node.js and npm are installed
node -v
npm -v

# Install project dependencies
npm install

# Run the app locally
npm run dev
```

## Modifying Material

- Modify .md files in `content/` to edit existing content.
- Structure site navigation using `curriculum.ts`.

### Add a new chapter
1) Add an entry to `curriculum.ts`
2) Create `content/<chapter-slug>/`
3) Add lesson markdown files in that folder

### Add graphics to a lesson
1) Add images to `public/<chapter-slug>/`
2) In any markdown file, wrap image filepath from `public/` in curly braces (Ex. `{welcome/headquarters.png}`)

## Code Development Workflow (For Contributors)

To keep the project history clean and avoid conflicts, **always use this workflow for new features and bugfixes**:

1. **Branch from `dev`**  
   - Before editing the codebase, create a *new branch* off the latest `dev`:
     ```bash
     git checkout dev
     git pull
     git checkout -b ta-123-my-feature
     ```

2. **Work and Push**  
   - Commit changes locally before pushing:
     ```bash
     git add file1 file2
     git commit -m "TA-123: Descriptive message"
     git push -u origin ta-123-my-feature
     ```

3. **Sync `dev` if it changed** 
   - If `dev` has been merged to while you were away, **always rebase** to keep your changes:
     ```bash
     git checkout dev
     git pull
     git checkout ta-123-my-feature
     git rebase dev
     git push --force-with-lease
     ```
   - This ensures your merge request retains all commits that were merged to dev after your branch was created.
   - If you’re unsure, ask before pushing!

4. **Create Merge Request**  
   - Go to GitLab and open a merge request from your branch to `dev`.
   - Fill in a description of what your change does, including the Jira ticket number for future reference.
   - **Never push directly** to `dev`.

5. **Code Review & Adjust**
   - Teammates will review your code and may request changes before approving your merge request.
   - Make changes on your branch, then:
     ```bash
     git add file1 file2
     git commit -m "TA-123: Descriptive message"
     git push --force-with-lease
     ```
   - Don't open a second merge request. Reviewers will see updates automatically.

6. **Squash and Merge**  
   - Once approved, the maintainer will squash all commits and merge your branch into `dev`.
   - A pipeline will trigger, updating the web app with the newest commit.

7. **Cleanup**  
   - Delete your local branch after merging.

8. **Merge to `main` (Maintainers Only)**
   - For every official release, merge `dev` to `main`:
      ```bash
      git checkout main
      git merge dev
      git push
      ```

### Why Be This Careful?

- Rebasing keeps history linear and readable.
- `--force-with-lease` is safer than `--force`.
- Code review ensures bugs and style issues are caught by your peers.

---

> **If you are unsure about any step, ask! It’s easier to help early than fix a messy Git history later.**