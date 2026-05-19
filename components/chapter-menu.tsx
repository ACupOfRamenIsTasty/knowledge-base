"use client" // Marks as a Client component in Next.js. Required for interactivity (event handlers, hooks etc.)

import Link from "next/link" // Built in Next.js component for client-side navigation
import { ChevronRight, ChevronLeft, FileText } from "lucide-react" // UI Icon library
import type { Chapter } from "@/curriculum"

interface ChapterMenuProps {
  chapter: Chapter
}

export function ChapterMenu({ chapter }: ChapterMenuProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-12">
        {/* Back to Main Menu */}
        <Link
          href={`/`}
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ChevronLeft className="h-4 w-4" />
          Main Menu
        </Link>

        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            {chapter.title}
          </h1>
          <p className="mt-2 text-muted-foreground">
            Created by: {chapter.author}
          </p>
        </div>

        {/* Lesson List */}
        <nav className="grid grid-cols-2 gap-4">
          {chapter.lessons.map((lesson, index) => (
            <Link
              key={lesson.slug}
              href={`/${chapter.slug}/${lesson.slug}`}
              className="group flex items-center justify-between rounded-lg border border-border bg-card p-4 transition-all hover:bg-accent hover:border-[#114488]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-colors group-hover:bg-[#114488]">
                  <span className="text-sm font-medium transition-colors group-hover:text-white">{index + 1}</span>
                </div>
                
                {/* Lesson title */}
                <div>
                  <h2 className="font-medium text-foreground">
                    {lesson.title}
                  </h2>
                </div>
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}