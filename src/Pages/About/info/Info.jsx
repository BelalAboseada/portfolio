import InfoImg from "../../../assets/About Me2.svg";
function Info() {
  return (
    <>
      <div className="info">
        <div className="InfoContent">
          <h6 className="Sec_Title">ـــــ Personal Info</h6>
          <h2>Need a Creative Product? I can Help You!</h2>
          <p>
            Hi! I’m Belal Hesham, and I’m a frontend developer specializing in
            crafting user interfaces and experiences for web applications. I
            focus on creating visually appealing and interactive designs that
            enhance the user's browsing experience.{" "}
          </p>
        </div>
        <div className="info__image">
          <img src={InfoImg} alt="InfoImg" />
        </div>
      </div>
    </>
  );
}

export default Info;
