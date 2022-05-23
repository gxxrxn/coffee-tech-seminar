import code_circle from "./img/code_circle.png";
import youtube_logo from './img/youtube_logo.png';
import scroll_down from './img/scroll_down.png';
import hatch_circle from './img/hatch_circle.png';

import "./Banner.css";

const Banner = () => {
    return(
        <div className="banner">
            <div className="banner-text">
                <h1>coffee tech<br/> seminar.</h1>
                <div>front-end tech seminar by<br/> team coffee based in cnu econovation</div>
                <h3><img className="youtube-logo-img"alt="youtube link" src={youtube_logo}/> 2022.06.21 pm 7</h3>
            </div>
            <img className="hatch-circle-img" alt="hatch-circle" src={hatch_circle} />
            <img className="code-circle-img" alt="circle" src={code_circle}/>
            <img className="scroll-down-img" alt="scroll-down" src={scroll_down} />        
        </div>
    )
}

export default Banner;