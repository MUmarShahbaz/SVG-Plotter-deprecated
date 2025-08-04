# SVG Plotter

A lightweight, TypeScript-based library for generating dynamic SVG charts and plots with customizable styling and data visualization capabilities.

## Features

- **Pure SVG Generation**: Creates scalable vector graphics without external dependencies
- **TypeScript Support**: Fully typed interfaces for better development experience
- **Multiple Chart Types**: Support for line charts with optional fill areas and data points
- **Flexible Scaling**: Linear and logarithmic (base 2/10) y-axis scaling
- **Time Series Support**: Built-in time formatting for time-based data
- **Customizable Styling**: Full control over colors, dimensions, grid lines, and visual elements
- **Dynamic Updates**: Real-time data and grid updates without recreating the entire chart
- **Responsive Design**: Configurable dimensions and margins for different layouts

## See Demo - [HERE](https://mumarshahbaz.github.io/SVG-Plotter-deprecated/demo.html)

## Installation

Include the minified JavaScript file directly from jsDelivr CDN:

```html
<script src="https://cdn.jsdelivr.net/gh/MUmarShahbaz/SVG-Plotter-deprecated@dist/svg_plotter.min.js"></script>
```

Or via ES6 import in your JavaScript/TypeScript project:

```javascript
import { SVG_GENERATOR } from 'https://cdn.jsdelivr.net/gh/MUmarShahbaz/SVG-Plotter-deprecated@dist/svg_plotter.min.js';
```

## Usage

### Basic Example

```html
<!DOCTYPE html>
<html>
<head>
    <title>SVG Plotter Example</title>
</head>
<body>
    <div id="chart-container"></div>

    <script src="https://cdn.jsdelivr.net/gh/MUmarShahbaz/SVG-Plotter-deprecated@dist/svg_plotter.min.js"></script>
    <script>
        // Define your data
        const data = {
            title: "Sample Chart",
            grid: {
                x: {
                    title: "Time",
                    type: "linear",
                    ticks: {
                        raw: [0, 1, 2, 3, 4, 5],
                        formatted: ["0", "1", "2", "3", "4", "5"],
                        min: 0,
                        max: 5,
                        range: 5
                    },
                    time_format: null
                },
                y: {
                    title: "Value",
                    type: "linear",
                    ticks: {
                        min: 0,
                        max: 100,
                        range: 100
                    },
                    base: null
                }
            },
            series: [
                {
                    label: "Dataset 1",
                    color: "#3498db",
                    data: [10, 25, 45, 30, 60, 80]
                }
            ]
        };

        // Configure the chart appearance
        const config = {
            bg: "#ffffff",
            dimensions: {
                width: { image: 800, plot: 600 },
                height: { image: 600, plot: 400 },
                margins: { left: 80, right: 50, top: 50, bottom: 80 }
            },
            grid: {
                gaps: {
                    x: { gap_by: "val", val: 1 },
                    y: { gap_by: "val", val: 20 }
                },
                lines: {
                    axes: { color: "#2c3e50", width: 2 },
                    main: { color: "#bdc3c7", width: 1 },
                    font: { color: "#2c3e50", size: 12 }
                }
            },
            series: {
                width: 2,
                alpha: 1,
                point: { radius: 4, alpha: 1 },
                fill: { alpha: 0.3 }
            }
        };

        // Create the chart
        const chart = SVG_GENERATOR(config, data, "my-chart");

        // Initialize and append to DOM
        const container = document.getElementById('chart-container');
        const svgElement = chart.init(container);
        chart.updateGrid();
        chart.updateData();
    </script>
</body>
</html>
```

### ES6 Module Example

```javascript
import { SVG_GENERATOR } from 'https://cdn.jsdelivr.net/gh/MUmarShahbaz/SVG-Plotter-deprecated@dist/svg_plotter.min.js';

// Define your data
const data: DATA = {
  title: "Sample Chart",
  grid: {
    x: {
      title: "Time",
      type: "linear",
      ticks: {
        raw: [0, 1, 2, 3, 4, 5],
        formatted: ["0", "1", "2", "3", "4", "5"],
        min: 0,
        max: 5,
        range: 5
      },
      time_format: null
    },
    y: {
      title: "Value",
      type: "linear",
      ticks: {
        min: 0,
        max: 100,
        range: 100
      },
      base: null
    }
  },
  series: [
    {
      label: "Dataset 1",
      color: "#3498db",
      data: [10, 25, 45, 30, 60, 80]
    }
  ]
};

// Configure the chart appearance
const config: SVG_CONFIG = {
  bg: "#ffffff",
  dimensions: {
    width: { image: 800, plot: 600 },
    height: { image: 600, plot: 400 },
    margins: { left: 80, right: 50, top: 50, bottom: 80 }
  },
  grid: {
    gaps: {
      x: { gap_by: "val", val: 1 },
      y: { gap_by: "val", val: 20 }
    },
    lines: {
      axes: { color: "#2c3e50", width: 2 },
      main: { color: "#bdc3c7", width: 1 },
      font: { color: "#2c3e50", size: 12 }
    }
  },
  series: {
    width: 2,
    alpha: 1,
    point: { radius: 4, alpha: 1 },
    fill: { alpha: 0.3 }
  }
};

// Create the chart
const chart = SVG_GENERATOR(config, data, "my-chart");

// Initialize and append to DOM
const svgElement = chart.init(document.body);
chart.updateGrid();
chart.updateData();
```

### Time Series Example

```javascript
const timeData = {
    title: "Performance Over Time",
    grid: {
        x: {
            title: "Time",
            type: "time",
            ticks: {
                raw: [0, 60000, 120000, 180000], // milliseconds
                formatted: ["0", "1m", "2m", "3m"],
                min: 0,
                max: 180000,
                range: 180000
            },
            time_format: "m:s"
        },
        // ... rest of configuration
    }
    // ... rest of data
};
```

### Logarithmic Scale Example

```javascript
const logData = {
    // ... other properties
    grid: {
        // ... x configuration
        y: {
            title: "Log Scale",
            type: "log",
            ticks: {
                min: 1,
                max: 1000,
                range: 999
            },
            base: 10
        }
    }
    // ... rest of data
};
```

## API Reference

### SVG_GENERATOR(config, data, id)

Creates a new SVG chart object.

**Parameters:**
- `config` (Object): Chart configuration object
- `data` (Object): Chart data object  
- `id` (string): Unique identifier for the SVG element

**Returns:** Chart object with the following methods:

#### Methods

- **`init(parent?: HTMLElement)`**: Initialize the SVG element and optionally append to parent
- **`updateGrid(append?: boolean)`**: Update or redraw the grid
- **`updateData(append?: boolean, new_data?: Object, refresh_grid?: boolean)`**: Update chart data

### Data Types

#### Time Formats
- `"ms"`: Milliseconds (e.g., "1500ms")
- `"s.ms"`: Seconds with milliseconds (e.g., "1.500s") 
- `"m:s"`: Minutes and seconds (e.g., "1:30")
- `"h:m:s"`: Hours, minutes, seconds (e.g., "1:30:45")
- `"d-h:m"`: Days, hours, minutes (e.g., "2-14:30")

#### Grid Gap Modes
- `"val"`: Gap by data value
- `"px"`: Gap by pixel distance

#### Scale Types
- `"linear"`: Linear scaling
- `"log"`: Logarithmic scaling (base 2 or 10)
- `"time"`: Time-based x-axis

## Configuration Options

### Dimensions
```javascript
dimensions: {
  width: { image: number, plot: number },
  height: { image: number, plot: number },
  margins: { left: number, right: number, top: number, bottom: number }
}
```

### Grid Configuration
```javascript
grid: {
  gaps: {
    x: { gap_by: "val" | "px", val: number },
    y: { gap_by: "val" | "px", val: number } | null
  },
  lines: {
    axes: { color: string, width: number },
    main: { color: string, width: number },
    font: { color: string, size: number }
  }
}
```

### Series Styling
```javascript
series: {
  width: number,                              // Line width
  alpha: number,                              // Line opacity (0-1)
  point: { radius: number, alpha: number } | null,  // Data points
  fill: { alpha: number } | null              // Fill area under line
}
```

## Browser Support

This library uses standard DOM APIs and SVG elements, making it compatible with all modern browsers that support:
- SVG 1.1
- ES2017 features
- DOM manipulation

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the terms found in the [LICENSE.md](LICENSE.md) file.

## Examples

Check out the `examples/` directory for more detailed usage examples and demos.

---

Built with TypeScript and ❤️ for data visualization.
