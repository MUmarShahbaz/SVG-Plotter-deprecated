---
sidebar_position: 3
---

# Outputs

## Line Chart Object

```js title="Line Chart Object"
type data_func = (
  append?: boolean,
  new_data?: DATA,
  refresh_grid?: boolean
) => SVGElement;
type init_func = (parent?: HTMLElement) => SVGElement;
type grid_func = (append?: boolean) => SVGElement;


type SVG_OBJECT = {
  id: string;
  data: DATA;
  config: SVG_CONFIG;
  init: init_func;
  updateGrid: grid_func;
  updateData: data_func;
};
```