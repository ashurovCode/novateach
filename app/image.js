export default function myImageLoader({ src, width, quality }) {
  const prefix = process.env.NODE_ENV === 'production' ? '/novateach' : ''
  return `${prefix}${src}?w=${width}&q=${quality || 75}`
}
