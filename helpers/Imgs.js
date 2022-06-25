const Imgs = () => {
    const imgNormal = ['/icon-paper.svg','/icon-scissors.svg','/icon-rock.svg'];
    const imgLizard = ['/icon-spock.svg',...imgNormal,'/icon-lizard.svg'];


    return {
        imgNormal,
        imgLizard
    }
}

export default Imgs