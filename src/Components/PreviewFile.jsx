// import "../styles/PreviewFile.css";
import "../styles/File.css";
import Card from "./Cards/Card";
// import Border from "./Border";

function PreviewFile({
  languages,
  skills,
  practical,
  setPractical,
  education,
  setEducation,
  person,
  setCurrentCard,
  setIsEditing,
}) {
  const handleEditCard = (card) => {
    setCurrentCard(card);
    setIsEditing(true);
  };

  const handleDelete = (cardId, type) => {
    type === "education"
      ? setEducation(education.filter((card) => card.id !== cardId))
      : setPractical(practical.filter((card) => card.id !== cardId));
  };

  return (
    <>
      <article id="file">
        <header id="file-header">
          <div id="pfp">
            <img
              src="https://avatars.githubusercontent.com/u/117330370?v=4"
              alt="picture taken from linkedin"
            />
          </div>
          <div id="main-heading">
            <h1 id="name">
              {person.firstname ? person.firstname : "{ Firstname } "}
              <span id="lastname">
                {person.lastname ? person.lastname : "{ Lastname }"}
              </span>
            </h1>
            <p id="designation">
              Frontend / Fullstack <span id="dev">Developer</span>
            </p>
          </div>
        </header>

        <section id="info">
          {/* <!-- Contact --> */}
          <article className="sub-cat">
            <div>
              <div className="heading">
                <i className="fa fa-address-book" aria-hidden="true"></i>
                <h2>Contact</h2>
              </div>
              {/* <div style="align-self: start; padding: 0 1mm"></div> */}
              {person.street && (
                <div id="location" className="info">
                  <i className="fa-solid fa-location-dot"></i>| {person.street}
                </div>
              )}
            </div>
            {/* PHONE NUMBER */}
            {person.phone && (
              <div id="phone" className="info">
                <i className="fa fa-phone" aria-hidden="true"></i>|{" "}
                {person.phone}
              </div>
            )}
            {person.email && (
              <div id="email" className="info">
                <i className="fa fa-envelope" aria-hidden="true"></i>|{" "}
                {person.email}
              </div>
            )}
            {person.linkedin && (
              <div id="linkedin" className="info">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
                <a href="https://www.linkedin.com/in/alexander-eide/">
                  | /in/{person.linkedin}/
                </a>
              </div>
            )}
            {person.github && (
              <div id="github" className="info">
                <i className="fa-brands fa-github"></i>|
                <a href="https://github.com/ATlexEide">
                  github.com/{person.github}
                </a>
              </div>
            )}
          </article>
          {/* <!-- Contact End --> */}
          <hr className="file-hr" />
          {/* <!-- Skill --> */}
          <article className="sub-cat">
            <div className="heading">
              <i className="fa fa-cogs" aria-hidden="true"></i>
              <h2>Skills</h2>
            </div>
            <ul>
              {skills.map((skillName, index) => (
                <li key={index}>
                  <Card skill={true} skillName={skillName} />
                </li>
              ))}
            </ul>
          </article>
          {/* <!-- Skills End --> */}
          <hr className="file-hr" />
          {/* <!-- Languages --> */}
          <article className="sub-cat">
            <div className="heading">
              <i className="fa-solid fa-code"></i>
              <h2>Languages</h2>
            </div>
            {/* <!--  --> */}
            <section id="languages">
              <ul>
                {languages.map((language, index) => (
                  <li key={index}>
                    <h3 className="info">
                      <i className={`fa-brands fa-${language}`}></i>
                      {language}
                    </h3>
                  </li>
                ))}
              </ul>
            </section>
          </article>
          {/* <!-- Languages End --> */}
          <hr className="file-hr" />
          {/* <!-- Education --> */}
          <article className="sub-cat">
            <div className="heading">
              <i className="fa-solid fa-graduation-cap"></i>
              <h2>Education</h2>
            </div>
            <ul>
              {education.map((school, index) => {
                return (
                  <li key={index}>
                    <Card
                      key={index}
                      data={school}
                      handleEdit={handleEditCard}
                      handleDelete={handleDelete}
                    />
                  </li>
                );
              })}
            </ul>
          </article>
        </section>
      </article>
    </>
  );
}

export default PreviewFile;

{
  /* <!-- Education End --> */
}

{
  /* OLD */
}

{
  /* //   return (
        //     <Card
        //       key={index}
        //       data={company}
        //       handleEdit={handleEditCard}
        //       handleDelete={handleDelete}
        //     />
        //   );
        // })} */
}
