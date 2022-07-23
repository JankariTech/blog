export default function getImageUrl (imagePath) {
  return new URL(imagePath, import.meta.url).href
}
