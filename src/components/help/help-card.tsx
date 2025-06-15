import { Link2 } from "lucide-react";

interface HelpCardProps {
  article: Article;
}

const HelpCard = ({ article }: HelpCardProps) => {
  return (
    <div
      key={article.id}
      className="relative col-span-1 flex w-full flex-col items-start justify-start rounded-lg border shadow transition-shadow duration-200 ease-in-out hover:shadow-lg"
    >
      <div className="bg-primary absolute top-2.5 right-2.5 size-8 rounded-full p-2 text-white">
        <Link2 className="size-full" />
      </div>
      <img
        src={article.image}
        alt="article-image"
        className="aspect-video w-full rounded-t-lg object-cover"
      />
      <div className="flex w-full flex-col items-center justify-center gap-2.5 p-5">
        <span className="w-full truncate overflow-hidden text-left text-xl font-bold">
          {article.title}
        </span>
        <span className="text-muted-foreground w-full text-left text-sm">
          {article.description}
        </span>
      </div>
    </div>
  );
};

export default HelpCard;
