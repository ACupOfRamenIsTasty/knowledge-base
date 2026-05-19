import { notFound } from "next/navigation" // 404 page for invalid routes
import { ChapterMenu } from "@/components/chapter-menu"
import { getChapter, curriculum } from "@/curriculum"

interface PageProps {
  params: Promise<{ chapterSlug: string }>
}

export default async function ChapterPage({ params }: PageProps) {
  // Resolve route params
  const { chapterSlug } = await params

  // Look up chapter data from curriculum
  const chapter = getChapter(chapterSlug)

  // Render 404 for unexpected fields
  if (!chapter) {
    notFound()
  }

  // Render chapter menu
  return <ChapterMenu chapter={chapter} />
}

// Pre-generate all chapter routes at build time
export function generateStaticParams() {
  return curriculum.map((chapter) => ({
    chapterSlug: chapter.slug,
  }))
}