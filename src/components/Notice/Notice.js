import './Notice.css';

const Notice = () => {
    return (
        <div className="notice">
                <h1>Notice.</h1>
                <div>team coffee의 소식이 궁금하다면?</div>
            <div className="notice-links-box">
                <a className="link-item" href="https://www.github.com/">github</a>
                <a className="link-item" href="https://www.medium.com/">medium</a>
                <a className="link-item" href="http://econovation.kr">econo</a>
            </div>
        </div>
    )
}

export default Notice;