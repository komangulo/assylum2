import { Badge } from "@/components/ui/badge";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-secondary/30 p-6 space-y-6">
      <div>
        <h3 className="text-primary font-semibold mb-4 text-lg">LATEST UPDATES</h3>
        <div className="space-y-3">
          <div className="text-sm">
            <Badge variant="secondary" className="mb-2">NEW</Badge>
            <p className="text-muted-foreground">Videos On Site</p>
          </div>
          <div className="text-sm">
            <Badge variant="outline" className="mb-2">UPDATED</Badge>
            <p className="text-muted-foreground">Will Be Updated</p>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-primary font-semibold mb-4 text-lg">CASTING CATEGORIES</h3>
        <div className="space-y-2">
          <div className="text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
            <span className="text-primary">2000+</span> Castings
          </div>
          <div className="text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
            <span className="text-primary">2000+</span> Castings Soft
          </div>
          <div className="text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
            <span className="text-primary">667</span> Castings Hard
          </div>
          <div className="text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
            <span className="text-primary">3</span> Sthuf
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-primary font-semibold mb-4 text-lg">FORUM</h3>
        <p className="text-sm text-muted-foreground">
          Join our community discussions about the entertainment industry
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;