import { notFound } from "next/navigation" // 404 page for invalid routes
import { LessonView } from "@/components/lesson-view"
import { getChapter, getLesson, curriculum } from "@/curriculum"
import { getLessonContent } from "@/markdown"

interface PageProps {
  params: Promise<{ chapterSlug: string; lessonSlug: string }>
}

export default async function LessonPage({ params }: PageProps) {
  // Resolve route params
  const { chapterSlug, lessonSlug } = await params

  // Look up chapter and lesson data from curriculum
  const chapter = getChapter(chapterSlug)
  const lesson = getLesson(chapterSlug, lessonSlug)

  // Render 404 for unexpected fields
  if (!chapter || !lesson) {
    notFound()
  }

  // Parse markdown files to HTML for rendering
  const content = await getLessonContent(chapterSlug, lesson.file)

  // Find prev/next lessons for navigation
  const currentIndex = chapter.lessons.findIndex((l) => l.slug === lessonSlug)
  const prevLesson = currentIndex > 0 ? chapter.lessons[currentIndex - 1] : null
  const nextLesson =
    currentIndex < chapter.lessons.length - 1
      ? chapter.lessons[currentIndex + 1]
      : null

  // Render the lesson page
  return (
    <LessonView
      chapter={chapter}
      lesson={lesson}
      content={content}
      prevLesson={prevLesson}
      nextLesson={nextLesson}
    />
  )
}

// Pre-generate all lesson routes at build time
export function generateStaticParams() {
  const params: { chapterSlug: string; lessonSlug: string }[] = []

  curriculum.forEach((chapter) => {
    chapter.lessons.forEach((lesson) => {
      params.push({
        chapterSlug: chapter.slug,
        lessonSlug: lesson.slug,
      })
    })
  })

  return params
}