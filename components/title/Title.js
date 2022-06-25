import MainButton from "../mainButton/MainButton"
import Image from 'next/image'
import Link from 'next/link'
import {TitlesStyles,TitlesStyles__btn, TitlesStyles__logo} from './css/Titlte.styles'

const Title = ({logo,main}) => {


    return (
        <TitlesStyles>

                <div>
                    {main &&  
                    <Link href={'/'}>
                      <TitlesStyles__logo logo={logo}>
                        {!logo && <Image src="/logo.svg" alt="logo-normal.svg" layout="fill" objectFit="contain"/>}
                        {logo && <Image src="/logo-bonus.svg" alt="logo-lizard.svg"  layout="fill" objectFit="contain"/> }
                      </TitlesStyles__logo>
                    </Link>
                    }

                    {!main &&
                      <Link href={'/'}>
                            <h1>Records</h1>
                      </Link>
                    }
                    
                </div>
                <TitlesStyles__btn>
                    <MainButton/>
                </TitlesStyles__btn>

        </TitlesStyles>
    )
}

export default Title