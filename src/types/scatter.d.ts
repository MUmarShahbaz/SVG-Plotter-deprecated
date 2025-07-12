type scatter_x_type = 'linear' | 'time';
type scatter_y_type = 'linear' | number;
type scatter_marker = string | SVGElement;

interface scatter_CONFIG {
    bg: bg;
    dimensions: dimensions;
    marker: scatter_marker;
    plot: {
        title?: title;
        display?: {
            legend?: boolean;
            titles?: {
                main?: boolean;
                x?: boolean;
                y?: boolean;
            };
        };
        x: {
            title?: title;
            type: scatter_x_type;
            time_format?: time_format;
        };
        y: {
            title?: title;
            type: scatter_y_type;
        };
    }
}