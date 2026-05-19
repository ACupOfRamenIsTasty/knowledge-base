export interface Lesson {
  slug: string
  title: string
  file: string // Markdown filename (without .md extension)
  isSingleLesson?: boolean
}

export interface Chapter {
  slug: string
  title: string
  image?: string
  author: string
  lessons: Lesson[]
}

export const curriculum: Chapter[] = [
  {
    slug: "welcome",
    title: "Welcome",
    image: "welcome.png",
    author: "Daniel Kim",
    lessons: [
      { slug: "introduction", title: "Introduction", file: "introduction" },
      { slug: "tips", title: "Tips", file: "tips" },
      { slug: "resources", title: "Resources", file: "resources" },
    ],
    
  },
  {
  slug: "knowledge-base",
    title: "Knowledge Base",
    image: "knowledge-base.png",
    author: "Daniel Kim",
    lessons: [
      { slug: "introduction", title: "Introduction", file: "introduction" },
      { slug: "maintaining", title: "Maintaining", file: "maintaining" },
    ],
  },
]

// Find a chapter by slug
export function getChapter(slug: string): Chapter | undefined {
  return curriculum.find((chapter) => chapter.slug === slug)
}

// Find a lesson by chapter + lesson slug
export function getLesson(chapterSlug: string, lessonSlug: string): Lesson | undefined {
  const chapter = getChapter(chapterSlug)
  return chapter?.lessons.find((lesson) => lesson.slug === lessonSlug)
}