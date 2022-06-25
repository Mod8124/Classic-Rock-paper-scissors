import Circle from "../circle/Circle";
import Imgs from "../../helpers/Imgs";
import Image from 'next/image';
import { OptionsStyled, Options__normal, Options__lizard, Options__pentagon, Options__triangle, Options__position, Options__OptionsLizard } from "./css/Options.styles";

const Options = ({normal, handleSelected}) => {

   const {imgNormal,imgLizard} = Imgs()
   
    return (
        <OptionsStyled>

                {normal && 
                <Options__normal>
                        {imgNormal && imgNormal.map((img,index)=> (
                                      <Options__position colum={index === 2 ? '1 / span 2' :''} key={img}>
                                              <Circle img={img} handleSelected={handleSelected} color={img} shadow={false}/>  
                                      </Options__position>
                        ))}
                        <Options__triangle>
                            <Image src="/bg-triangle.svg" alt="bg-triangle" width="100%" height="100%" layout="responsive" priority="low"/>
                        </Options__triangle>
                </Options__normal> 
                }

                {!normal && 
                <Options__lizard>
                    {imgLizard && imgLizard.map((img,index)=> (
                                    <Options__OptionsLizard key={img} colum={img.includes('scissors') ? '1 / span 2':''} order={
                                            img.includes('scissors')? '1':
                                            img.includes('spock')?'2':
                                            img.includes('paper') ? '3':
                                            img.includes('lizard') ? '4':
                                            img.includes('rock') ? '5':''
                                        }
                                        justify={
                                            img.includes('spock') ? 'flex-start':
                                            img.includes('paper') ? 'flex-end' :
                                            img.includes('lizard')? "flex-end":
                                            img.includes('rock') ? 'flex-start':null
                                        }
                                        >
                                                   <Circle img={img} handleSelected={handleSelected} color={img} lizard={true} shadow={false}  priority="low"/>  
                                    </Options__OptionsLizard>
                    ))}
                    <Options__pentagon>
                        <Image src="/bg-pentagon.svg" alt="bg-pentagon" width="100%" height="100%" layout="responsive"/>
                    </Options__pentagon>
                </Options__lizard> 
                }

        </OptionsStyled>
    )
}

export default Options