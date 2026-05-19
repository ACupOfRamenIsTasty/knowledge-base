"use client" // Marks as a Client component in Next.js. Required for interactivity (event handlers, hooks etc.)

import Link from "next/link" // Built in Next.js component for client-side navigation
import { ChevronLeft, ChevronRight } from "lucide-react" // UI Icon library
import type { Chapter, Lesson } from "@/curriculum"

interface LessonViewProps {
  chapter: Chapter
  lesson: Lesson
  content: string // Prerendered .md files for lessons
  prevLesson: Lesson | null // Previous lesson for footer navigation
  nextLesson: Lesson | null // Next lesson for footer navigation
}

export function LessonView({
  chapter,
  lesson,
  content,
  prevLesson,
  nextLesson,
}: LessonViewProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-12">
        {/* Back to Chapter*/}
        {(prevLesson || nextLesson) && (
        <Link
          href={`/${chapter.slug}`}
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ChevronLeft className="h-4 w-4" />
          {chapter.title}
        </Link>
        )}

        {/* Back to Main Menu (if only 1 lesson) */}
        {(!prevLesson && !nextLesson) && (
        <Link
          href={`/`}
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ChevronLeft className="h-4 w-4" />
          Main Menu
        </Link>
        )}

        {/* Header (if only 1 lesson) */}
        {(!prevLesson && !nextLesson) && (
          <div className="mb-12 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              {chapter.title}
            </h1>
            <p className="mt-2 text-muted-foreground">
              Created by: {chapter.author}
            </p>
          </div>
        )}

        {/* Lesson body (.md file) */}
        <article className="prose prose-neutral dark:prose-invert max-w-none">
          <div
            className="lesson-content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </article>

        {/* Navigation Footer */}
        <div className="mt-12 flex items-center justify-between border-t border-border pt-8">
          {prevLesson ? (
            <Link
              href={`/${chapter.slug}/${prevLesson.slug}`}
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ChevronLeft className="h-4 w-4" />
              <div className="text-left">
                <p className="text-xs text-muted-foreground">Previous</p>
                <p className="font-medium text-foreground">{prevLesson.title}</p>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextLesson ? (
            <Link
              href={`/${chapter.slug}/${nextLesson.slug}`}
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <div className="text-right">
                <p className="text-xs text-muted-foreground">Next</p>
                <p className="font-medium text-foreground">{nextLesson.title}</p>
              </div>
              <ChevronRight className="h-4 w-4" />
            </Link>
          ) : (
            <Link
              href={prevLesson ? `/${chapter.slug}` : `/`}
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <div className="text-right">
                <p className="text-xs text-muted-foreground">Finish</p>
                <p className="font-medium text-foreground">{chapter.title}</p>
              </div>
              <ChevronRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}