import fs from "fs" // API to read markdown files
import path from "path" // Utility for building safe filepaths
import { marked } from "marked"// Markdown -> HTML converter

// Path of all markdown files
const contentDirectory = path.join(process.cwd(), "content")

// Override default marked renderer
const renderer = new marked.Renderer()

// Render all links to open in a new tab
renderer.link = function ({ href, title, text }) {
  const titleAttr = title ? ` title="${title}"` : ""

  return `<a href="${href}" target="_blank" rel="noopener noreferrer"${titleAttr} style="color: #2563eb; text-decoration: underline;">${text}</a>`
}

// Convert all curly braces in markdown to images under `public/`
function replaceImagePlaceholders(markdown: string): string {
  return markdown.replace(/\{([^}]+)\}/g, (_, imageName) => {
    return `<img src="/${imageName}" style="margin: 16px 0; border-radius: 8px; border-width: 1px; border-color: black" />`
  })
}

// Load a markdown file and return HTML
export async function getLessonContent(
  chapterSlug: string,
  lessonFile: string
): Promise<string> {
  // Full path to markdown file
  const filePath = path.join(contentDirectory, chapterSlug, `${lessonFile}.md`)

  try {
    // Read markdown from disk
    let fileContent = fs.readFileSync(filePath, "utf-8")

    // Render images
    fileContent = replaceImagePlaceholders(fileContent)

    // Convert markdown to HTML
    const htmlContent = await marked(fileContent, { renderer })
    return htmlContent
  } catch {
    // Fallback for errors and missing files
    return "<p>Lesson content not found.</p>"
  }
}