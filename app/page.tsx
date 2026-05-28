import { MainMenu } from "@/components/main-menu"

interface PageProps {
  searchParams: { topicName?: string }
}

export default function HomePage({ searchParams }: PageProps) {
  return <MainMenu topicName={searchParams.topicName} />
}