const Colors = ( ) => {
  const Primary = {
    scissors: ['hsl(39, 89%, 49%)', "hsl(40, 75%, 35%)"],
    paper: [' hsl(230, 89%, 62%)','hsl(215, 75%, 35%)'],
    rock: ['hsl(349, 71%, 52%)', 'hsl(0, 75%, 35%)'],
    lizard:['hsl(261, 73%, 60%)',' hsl(261, 75%, 35%)'],
     spock: ['hsl(189, 59%, 53%) ', 'hsl(189, 50%, 35%)']
}

 const Neutral = {
  Dark: 'hsl(229, 25%, 31%)',
  Score: 'hsl(229, 64%, 46%)',
  Header: 'hsl(217, 16%, 45%)',
}
  return {
    Primary, 
    Neutral
  }
}

export default Colors;




