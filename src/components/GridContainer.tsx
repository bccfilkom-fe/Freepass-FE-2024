import { ReactNode } from "react";

const GridContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 items-start">
      {children}
    </div>
  );
};

export default GridContainer;
