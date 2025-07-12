type line_x_type = 'linear' | 'time';
type line_y_type = 'linear' | number;

interface line_CONFIG {
    bg: bg;
    dimensions: dimensions;
    plot: {
        title?: title;
        display?: {
            points?: boolean;
            fill?: boolean;
            legend?: boolean;
            titles?: {
                main?: boolean;
                x?: boolean;
                y?: boolean;
            };
        };
        x: {
            title?: title;
            type: line_x_type;
            time_format?: time_format;
        };
        y: {
            title?: title;
            type: line_y_type;
        };
    }
}