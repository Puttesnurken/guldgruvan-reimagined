import { Card, CardContent } from "@/components/ui/card";
interface ComedianCardProps {
  name: string;
  description: string;
  image: string;
}
const ComedianCard = ({
  name,
  description,
  image
}: ComedianCardProps) => {
  return <Card className="group overflow-hidden bg-card border-2 border-primary rounded-none hover:-translate-y-2 transition-all duration-300 h-full flex flex-col" style={{ boxShadow: 'none' }} onMouseEnter={e => e.currentTarget.style.boxShadow = '8px 8px 0px 0px hsl(var(--primary))'} onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}>
      <CardContent className="p-0 flex flex-col h-full">
        <div className="relative aspect-square overflow-hidden">
          <img src={image} alt={`${name} - Standupkomiker på Guldgruvan Stockholm`} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-500"></div>
        </div>
        <div className="p-6 flex-1 flex flex-col border-t border-border/50">
          <h3 className="text-2xl text-primary mb-3 group-hover:text-foreground transition-colors duration-300 text-center font-pixel uppercase">{name}</h3>
          <p className="text-muted-foreground leading-relaxed text-sm line-clamp-4">{description}</p>
        </div>
      </CardContent>
    </Card>;
};
export default ComedianCard;