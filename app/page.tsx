import { MainMenu } from "@/components/main-menu"

interface PageProps {
  searchParams: Promise<{ topicName?: string }>
}

export default async function HomePage({ searchParams }: PageProps) {
  const params = await searchParams
  return <MainMenu topicName={params.topicName} />
}