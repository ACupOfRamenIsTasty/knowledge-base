# Maintaining the Knowledge Base

## How It Works
- Users and Developers collaborate to keep content current
- Users prepare markdown (`.md`) files — one file per lesson
- Devs integrate those files into the app
- Everyone sees the published knowledge

## Best Practices
- Use bullet points and step-by-step instructions
- Connect content to everyday tasks where possible
- Keep writing simple, concise, and adaptable to changing workflows

**If you write for hours about a tool that soon becomes obsolete, you're not getting those hours back.**

## Adding Content via Markdown (Users)
**Assume that users are not tech-savvy.**

### Write content using [Write-Box](https://write-box.appspot.com/)
{knowledge-base/writebox.png}

### Prompt the AI to convert your text to markdown format
{knowledge-base/copy-prompt.png}

**Copy paste this prompt along with your raw text:**
```
Convert the following text into a markdown file. Follow these rules:

- Use one H1 heading (#) for the title at the top of the file. Use ## and ### for all subsequent headings
- Always use bullet points instead of paragraphs to keep content concise
- For any links, use the format [text](url)
- Keep everything brief and scannable — avoid unnecessary words
- Use the following as a format reference:

# Introduction

## What is the Knowledge Base?
- The single source of truth for all knowledge
- Helps manage scattered documents across teams

## Objective
- Have all staff update the app's content periodically and before leaving
- With each iteration, the app covers more material and remains up-to-date
```
{knowledge-base/prompting.png}
{knowledge-base/copy-markdown.png}

### Share the formatted text and any images with Devs
{knowledge-base/send-to-dev.png}

### Devs create files and upload images
{knowledge-base/create-file.png}
{knowledge-base/upload-images.png}

### Everyone sees the lesson
{knowledge-base/public-lesson.png}

## When to Use Markdown
Use markdown when:
- The topic requires quick, basic knowledge for various team members
- The workflow changes frequently and needs regular updates
- The content should be accessible to all staff

Otherwise:
- Don't bother with writebox and AI prompting
- Prepare a Word document and give it to Devs

## Maintaining the Repo (Devs)
- See `README.md` for more info
- Maintain the same folder structure across `content/` and `public/`
- Insert markdown files in `content/`
- Insert images in `public/`
- Merge to `dev` branch and wait for pipeline to finish to see changes
{knowledge-base/content.png}
{knowledge-base/public.png}