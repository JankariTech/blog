export default function getImageUrl (name) {
  return new URL(`../imgs/${name}.png`, import.meta.url).href
}
