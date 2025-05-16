import React, { useEffect, useRef, useState } from 'react'
import { cn } from "@/utils/utils";
import { useTheme } from "@/context/ThemeContext";

interface GridBackgroundProps {
  className?: string;
}

const GridBackgroud: React.FC<GridBackgroundProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rows, setRows] = useState(0);
  const [cols, setCols] = useState(0);
  const { theme } = useTheme();

  useEffect(() => {
    const updateGridSize = () => {
      const el = containerRef.current;
      if (el) {
        const { width, height } = el.getBoundingClientRect();
        setCols(Math.ceil(width / 40));
        setRows(Math.ceil(height / 40));
      }
    };

    updateGridSize();
    window.addEventListener('resize', updateGridSize);
    return () => window.removeEventListener('resize', updateGridSize);
  }, []);

  const gridItems = Array.from({ length: rows * cols }, (_, i) => {
    const bgColor = (Math.random() < 0.1)
      ? theme === 'dark'
        ? '#181818' // Dark fill
        : '#f3f4f6' // Light fill
      : 'transparent';

    return <div
      key={i}
      className={`w-10 h-10 border-[0.54px] border-solid border-[#ebebeb] dark:border-[#181818]`}
      style={{ backgroundColor: bgColor }}
    />
  });

  return (
    <div
      ref={containerRef}
      className={cn("relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black", className)}
    >
      <div
        className="absolute inset-0 grid"
        style={{
          gridTemplateRows: `repeat(${rows}, 40px)`,
          gridTemplateColumns: `repeat(${cols}, 40px)`,
        }}
      >
        {gridItems}
      </div>
    </div>
  )
}



export default GridBackgroud