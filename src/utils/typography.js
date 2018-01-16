import Typography from "typography";

const typography = new Typography({
  baseFontSize: "12px",
  googleFonts: [{
    name: "Roboto Mono",
    styles: ['400']
  }],
  bodyFontFamily: ["Roboto Mono", "monospace"],
  headerFontFamily: ["Roboto Mono", "monospace"]
});

export default typography;
