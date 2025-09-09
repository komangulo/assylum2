import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface CastingCardProps {
  image: string;
  name: string;
  type: string;
  featured?: boolean;
}

const CastingCard = ({ image, name, type, featured = false }: CastingCardProps) => {
  return (
    <Link to={`/actress/${name.toLowerCase().replace(/\s+/g, '-')}`}>
      <Card className="group overflow-hidden hover:shadow-card-shadow transition-all duration-300">
      <div className="relative aspect-[3/4] overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
        />
        {featured && (
          <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
            4K
          </Badge>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="text-muted-foreground text-sm uppercase tracking-wide">
          {type}
        </p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CastingCard;