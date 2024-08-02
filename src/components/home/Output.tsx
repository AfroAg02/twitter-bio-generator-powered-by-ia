import React from "react";
import { Badge } from "../ui/badge";
import { BorderBeam } from "../magicui/border-beam";

export default function Output() {
  return (
    <div className="relative flex min-h-[50vh] mt-2 flex-col rounded-xl bg-muted/50 backdrop-blur-sm overflow-hidden border border-primary/5">
      <BorderBeam size={1200} borderWidth={1.5} duration={4}/>
      <Badge variant="outline" className="absolute top-3 right-3 z-50">
        Output
      </Badge>
    </div>
  );
}
