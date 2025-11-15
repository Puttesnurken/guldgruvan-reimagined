import { Card, CardContent } from "@/components/ui/card";

interface ComedianCardProps {
  name: string;
  description: string;
  image: string;
}

const ComedianCard = ({ name, description, image }: ComedianCardProps) => {
  return (
    <Card className="group overflow-hidden bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-card hover:-translate-y-2">
      <CardContent className="p-0">
        <div className="relative aspect-square overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60"></div>
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold text-primary mb-3">{name}</h3>
          <p className="text-foreground leading-relaxed">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ComedianCard;
