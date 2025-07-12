// Basic types
type color = `rgba(${number}, ${number}, ${number}, ${number})`;
type bg = color | null;
type title = string | null;
type time_format = "ms" | "s.ms" | "m:s" | "h:m:s" | "d-h:m";

// Dimensions
type dimensions = {
  image: { width: number; height: number };
  plot: { width: number; height: number };
  margins: { left: number; top: number; right: number; bottom: number };
};

// Input Data
type x_data = number;
type y_data = number | null;
type series = { label: string; color: color; data: Array<y_data> };

interface DATA {
    x: Array<x_data>;
    y: Array<series>;
}