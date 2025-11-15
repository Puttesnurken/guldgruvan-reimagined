import { Card, CardContent } from "@/components/ui/card";

interface ComedianCardProps {
  name: string;
  description: string;
  image: string;
}

const ComedianCard = ({ name, description, image }: ComedianCardProps) => {
  return (
    <Card className="group overflow-hidden bg-card border-border hover:border-primary transition-all duration-500 hover:shadow-elevation-high hover:-translate-y-3 h-full flex flex-col">
      <CardContent className="p-0 flex flex-col h-full">
        <div className="relative aspect-square overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-2 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-500"></div>
          <div className="absolute inset-0 bg-bw-gradient opacity-0 group-hover:opacity-10 transition-opacity duration-500 mix-blend-overlay"></div>
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-foreground transition-colors duration-300">{name}</h3>
          <p className="text-muted-foreground leading-relaxed text-sm line-clamp-4">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ComedianCard;
