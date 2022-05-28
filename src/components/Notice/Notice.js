import arrow from "./img/arrow.png";
import econo_logo from "./img/econo_logo.png";
import github_logo from "./img/github_logo.png";
import background from "./img/background.png";

import "./Notice.css";

const Notice = () => {
  return (
    <div className='notice'>
      <h1>Notice.</h1>
      <span>team coffee의 소식이 궁금하다면?</span>
      <div className='notice-links-box'>
        <a className='link-item' href='https://github.com/JNU-econovation'>
          <img className='link-item-img' src={github_logo} alt='github_logo' />
          <span className='link-text'>github</span>
          <img className='link-item-img' src={arrow} alt={arrow} />
        </a>
        <a className='link-item' href='https://medium.com/econovation/'>
          <img className='link-item-img' src={econo_logo} alt='medium_logo' />
          <span className='link-text'>medium</span>
          <img className='link-item-img' src={arrow} alt='arrow' />
        </a>
        <a className='link-item' href='http://econovation.kr'>
          <img className='link-item-img' src={econo_logo} alt='econo_logo' />
          <span className='link-text'>econo</span>
          <img className='link-item-img' src={arrow} alt='arrow' />
        </a>
      </div>
    </div>
  );
};

export default Notice;
