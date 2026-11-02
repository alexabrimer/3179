var flowmap = "charts/flowmap.vg.json";
var violin = "charts/violin.vg.json";
var bump = "charts/bump.vg.json";
var heatmap = "charts/heatmap.vg.json";
var radar = "charts/radar.vg.json";
var butterfly = "charts/butterfly.vg.json";
var choropleth = "charts/choroplethmap.vg.json";
var proportionalsymbol = "charts/proportionalsymbolmap.vg.json";
var parallelcoord = "charts/parallelcoord.vg.json";
var boxplot = "charts/boxplot.vg.json";
var unit = "charts/unit.vg.json";
var lollipop = "charts/lollipop.vg.json";
vegaEmbed("#flowmap", flowmap).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
vegaEmbed("#violin", violin).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
vegaEmbed("#bump", bump).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
vegaEmbed("#heatmap", heatmap).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
vegaEmbed("#choropleth", choropleth).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
vegaEmbed("#proportionalsymbol", proportionalsymbol).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
vegaEmbed("#parallelcoord", parallelcoord).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
vegaEmbed("#boxplot", boxplot).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
vegaEmbed("#heatmap2", heatmap2).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
vegaEmbed("#unit", unit).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
vegaEmbed("#lollipop", lollipop).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
const compareViews = {};
vegaEmbed("#radar", radar).then(r => { compareViews.radar = r.view; }).catch(console.error);
vegaEmbed("#butterfly", butterfly).then(r => { compareViews.butterfly = r.view; }).catch(console.error);

const selA = document.getElementById("playerA");
const selB = document.getElementById("playerB");

function updateCompare(changed) {
  // if the same player is picked twice, move the other dropdown to the next player
  if (selA.value === selB.value) {
    const other = changed === selA ? selB : selA;
    other.selectedIndex = (other.selectedIndex + 1) % other.options.length;
  }
  Object.values(compareViews).forEach(v =>
    v.signal("playerA", selA.value).signal("playerB", selB.value).run());
}
selA.addEventListener("change", () => updateCompare(selA));
selB.addEventListener("change", () => updateCompare(selB));