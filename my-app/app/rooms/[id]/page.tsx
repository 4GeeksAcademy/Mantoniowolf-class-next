import RoomShell from "@/components/rooms/RoomShell";

export default async function RoomPage({ params }: PageProps<"/rooms/[id]">) {
  const { id } = await params;
  return <RoomShell id={id} />;
}