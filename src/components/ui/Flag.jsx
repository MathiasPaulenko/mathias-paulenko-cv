export const Flag = ({ code, alt, size = '20x15' }) => {
  const [width, height] = size.split('x')
  const retinaSize = `${width * 2}x${height * 2}`

  return (
    <img
      loading="lazy"
      src={`https://flagcdn.com/${size}/${code}.png`}
      srcSet={`https://flagcdn.com/${retinaSize}/${code}.png 2x`}
      width={width}
      height={height}
      alt={alt}
      className="inline-block align-middle mx-1"
      style={{ verticalAlign: 'middle' }}
    />
  )
}
