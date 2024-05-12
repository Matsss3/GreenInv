import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";

interface InvitationCardProps {
  key: number,
  content: string
};

export const InvitationCard = ({
  key,
  content
}: InvitationCardProps) => {
  const jsonContent = JSON.parse(content);

  return (
    <Link href="#">
      <Card key={key} className="h-full w-[400px]">
        <CardHeader className="text-2xl font-semibold text-center">Test</CardHeader>
        <CardContent>
          {Object.keys(jsonContent).map((field, index) => (
            <p key={index}>{field}: {jsonContent[field]}</p>
          ))}
        </CardContent>
      </Card>
    </Link>
  );
};