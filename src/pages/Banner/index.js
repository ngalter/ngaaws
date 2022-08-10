import BannerText from '../BannerText';
import LogoImage from '../LogoImage';
import '../../styles/banner.css';

const Banner = () => {
    return (
        <div>    
                <img className={'bannerwrap'}
                src="./run.jpg"
                alt="running"
                width="100%"
                height="auto"
                z-index="-100">
            </img>
            <BannerText />
            <LogoImage />
            </div>
    )
}

export default Banner
