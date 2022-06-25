import Image from 'next/image'
import { CircleStyled, CircleStyled__img } from './css/Circle.styles';
import { useState } from 'react';

const Circle = ({img, handleSelected, shadow, lizard}) => {

  const [color, setColor] = useState(img ? img.slice(6, -4) :'');

    return (
          <CircleStyled color={color} shadow={shadow} lizard={lizard ? lizard:''} onClick={() => {
             if(!handleSelected) return
             handleSelected(img)
            }}>
        
          {img && 
            <CircleStyled__img lizard={lizard ? '50px':'70px'}>
                <Image src={img} alt={img}  layout="fill" objectFit="contain"/>
            </CircleStyled__img>
          }
        </CircleStyled>
    )
}

export default Circle