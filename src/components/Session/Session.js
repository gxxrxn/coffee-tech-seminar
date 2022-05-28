import "./Session.css";
import youtubeLink from "./img/youtube_link.png";

const Session = () => {
  const data = [
    {
      name: "박재현",
      nickname: "Singco",
      title: "리팩터링 2판",
      url: "https://www.youtube.com/watch?v=gGrpQeF3X7s",
    },
    {
      name: "김기표",
      nickname: "kiki",
      title: "시리얼라이저 & 디시리얼라이저",
      url: "https://www.youtube.com/watch?v=gGrpQeF3X7s",
    },
    {
      name: "김양하",
      nickname: "yasmin",
      title: "야스민의 개발일지",
      url: "https://www.youtube.com/watch?v=gGrpQeF3X7s",
    },
    {
      name: "김서영",
      nickname: "milly",
      title: "밀리의 개발일지",
      url: "https://www.youtube.com/watch?v=gGrpQeF3X7s",
    },
  ];

  return (
    <div id="session" className="Session">
      <div className="flex-box">
        <p className="subtitle">session</p>
        <ul className="seminar-list">
          {data.map((session, idx) => (
            <li
              className={
                idx === data.length - 1 ? "seminar no-border" : "seminar"
              }
              key={idx}
            >
              <div className="contents">
                <div className="info">
                  <p>
                    {session.name} | {session.nickname}
                  </p>
                  <p className="title">{session.title}</p>
                </div>
                <div
                  className="youtube"
                  onClick={() => window.open(session.url, "_blank")}
                >
                  <img src={youtubeLink} alt="youtube" />
                  <p>보러가기</p>
                </div>
              </div>
            </li>
          ))}
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Session;
