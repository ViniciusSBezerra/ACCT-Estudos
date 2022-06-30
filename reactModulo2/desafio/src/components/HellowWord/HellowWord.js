
export function HellowWord({fontStyle, fontWeight, fontVariant, textDecoration, textTransform, letterSpacing, text}){

  return(
    <p style={{  fontSize: "2rem", fontStyle, fontWeight: fontWeight, fontVariant: fontVariant, textDecoration: textDecoration, textTransform: textTransform, letterSpacing: letterSpacing }}>{text}</p>
  )
}