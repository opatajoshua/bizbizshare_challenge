import React, { useState } from "react";

export function Tab({ label, className, children, ...props }: {label: string} & React.HTMLProps<HTMLDivElement>) {
  return (
    <div className={` ${className}`} {...props}>
      {children}
    </div>
  );
}


interface TabsProps{
  children: React.ReactNode
}

function Tabs(props: React.PropsWithChildren<TabsProps>) {
  const [activeTab, setActiveTab] = useState(0)
  const children = Array.isArray(props.children)? props.children as any[]: [props.children];

  return (
    <div className="tabs">
      <div className="tab-list">
        {children.map((child: any, index: number) => <button  key={index}
              className={``} 
              onClick={()=>setActiveTab(index)}
            >
            {child.props.label}
          </button>
        )}
      </div>
      <div className="tab-content">
        {children.map((child: any, index: number) => {
          if (index !== activeTab) return undefined;
          return child.props.children;
        })}
      </div>
    </div>
  );
}

export default Tabs;
