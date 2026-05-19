"use client" // Marks as a Client component in Next.js. Required for interactivity (event handlers, hooks etc.)

import Link from "next/link" // Built in Next.js component for client-side navigation
import { curriculum } from "@/curriculum"

interface MainMenuProps {
  topicName?: string // Passed from Chapter Menu for breadcrumb/context
}

export function MainMenu({ topicName }: MainMenuProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Knowledge Base
          </h1>
          <p className="mt-2 text-muted-foreground">
            Edit this web app to your organization's needs.
          </p>
        </div>

        {/* Chapter List */}
        <nav className="flex flex-wrap justify-center gap-4">
          {curriculum.map((chapter, index) => (
            <Link
              key={chapter.slug}
              href={chapter.lessons.length === 1 ? `/${chapter.slug}/${chapter.lessons[0].slug}` : `/${chapter.slug}`}
              className="group flex items-center justify-between rounded-lg border border-border bg-card p-4 transition-all hover:bg-accent hover:border-[#114488] h-20"
            >
              <div className="flex items-center gap-4">
                {/* Left icon for each chapter*/}
                <img src={chapter.image ? chapter.image : "default.png"} className="max-h-8 max-w-8 object-contain" />

                {/* Chapter title + lesson count */}
                <div>
                  <h2 className="font-medium text-foreground">
                    {chapter.title}
                  </h2>
                  {chapter.lessons.length > 1 && (
                    <p className="text-sm text-muted-foreground">
                      {chapter.lessons.length} lessons
                    </p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}