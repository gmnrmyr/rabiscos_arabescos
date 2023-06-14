console.log(fxhash);
console.log(fxrand());

const sp = new URLSearchParams(window.location.search);
console.log(sp);

$fx.params([
  {
    id: "scribble_variation",
    name: "Scribble Variation",
    type: "number",
//    default: 0,
    options: {
      min: 0,
      max: 7,
      step: 1,
    },
  },
  {
    id: "darkletterbg_variation",
    name: "Dark Letter BG Variation",
    type: "number",
  //  default: 1,
    options: {
      min: 0,
      max: 7,
      step: 1,
    },
  },
  {
    id: "ambient_variation",
    name: "Ambient Variation",
    type: "number",
 //   default: 6,
    options: {
      min: 0,
      max: 7,
      step: 1,
    },
  },
  {
    id: "core_bottom_draw_variation",
    name: "Core Bottom Draw Variation",
    type: "number",
 //   default: 4,
    options: {
      min: 0,
      max: 7,
      step: 1,
    },
  },
  {
    id: "core_top_draw_variation",
    name: "Core Top Draw Variation",
    type: "number",
 //   default: 5,
    options: {
      min: 0,
      max: 7,
      step: 1,
    },
  },
  {
    id: "diamond_draw_variation",
    name: "Diamond Draw Variation",
    type: "number",
 //   default: 5,
    options: {
      min: 0,
      max: 7,
      step: 1,
    },
  },
  {
    id: "wash",
    name: "Wash",
    type: "boolean",
 //   default: true,
    options: {
      showIf: () => {
        const blacknwhite = $fx.rand() < 0.2;
        return blacknwhite;
      },
    },
  },
]);

$fx.features({
  "Scribble Variation": $fx.getParam("scribble_variation"),
  "Dark Letter BG Variation": $fx.getParam("darkletterbg_variation"),
  "Ambient Variation": $fx.getParam("ambient_variation"),
  "Core Bottom Draw Variation": $fx.getParam("core_bottom_draw_variation"),
  "Core Top Draw Variation": $fx.getParam("core_top_draw_variation"),
  "Diamond Draw Variation": $fx.getParam("diamond_draw_variation"),
  "Wash": $fx.getParam("wash"),
});

document.addEventListener("DOMContentLoaded", function () {
  const paramsElement = document.createElement("pre");
  paramsElement.textContent = `Params:\n${JSON.stringify($fx.getRawParams(), null, 2)}`;
  document.body.appendChild(paramsElement);
});
