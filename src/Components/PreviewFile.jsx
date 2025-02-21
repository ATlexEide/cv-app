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
  const skillsIsEmpty = skills.length === 1 && skills[0] === "" ? true : false;
  const languagesIsEmpty =
    languages.length === 1 && languages[0] === "" ? true : false;
  const handleEditCard = (card) => {
    console.log(card);
    setCurrentCard(card);
    setIsEditing(true);
  };

  const handleDelete = (cardId, type) => {
    type === "education"
      ? setEducation(education.filter((card) => card.id !== cardId))
      : setPractical(practical.filter((card) => card.id !== cardId));
  };

  return (
    <article id="file">
      <header id="file-header">
        <div id="pfp">
          <img
            src={
              person.image
                ? person.image
                : "https://avatars.githubusercontent.com/u/117330370?v=4"
            }
            alt="picture taken from linkedin"
          />
        </div>
        <div id="main-heading">
          <h1 id="name">
            {person.firstname ? person.firstname + " " : "{ Firstname } "}
            <span id="lastname">
              {person.lastname ? person.lastname : "{ Lastname }"}
            </span>
          </h1>
          {person.designation && <p id="designation">{person.designation}</p>}
        </div>
      </header>

      <section id="info">
        {/* <!-- Contact --> */}
        <article className="category">
          <div className="heading">
            <i className="fa fa-address-book" aria-hidden="true"></i>
            <h2>Contact</h2>
            {/* <div style="align-self: start; padding: 0 1mm"></div> */}
          </div>
          <ul className="info-list">
            {person.street && (
              <div id="location" className="info">
                <i className="fa-solid fa-location-dot"></i>|{" "}
                {person.street && person.street}
              </div>
            )}
            {person.city && person.country && (
              <div id="city-country" className="info">
                <i className="fa-solid fa-globe"></i>| {person.city},{" "}
                {person.country}
              </div>
            )}
            {person.city && !person.country && (
              <div id="city-country" className="info">
                <i className="fa-solid fa-globe"></i>| {person.city}
              </div>
            )}
            {!person.city && person.country && (
              <div id="city-country" className="info">
                <i className="fa-solid fa-globe"></i>| {person.country}
              </div>
            )}
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
          </ul>
        </article>
        {/* <!-- Contact End --> */}
        {/* <!-- Skill --> */}
        {!skillsIsEmpty && (
          <>
            <hr className="file-hr" />
            <article className="category">
              <div className="heading">
                <i className="fa fa-cogs" aria-hidden="true"></i>
                <h2>Skills</h2>
              </div>
              <ul className="info-list">
                {skills.map((skillName, index) => (
                  <li key={index}>
                    <Card skill={true} skillName={skillName} />
                  </li>
                ))}
              </ul>
            </article>
          </>
        )}
        {/* <!-- Skills End --> */}
        {/* <!-- Languages --> */}

        {!languagesIsEmpty && (
          <>
            <hr className="file-hr" />
            <article className="category">
              <div className="heading">
                <i className="fa-solid fa-code"></i>
                <h2>Languages</h2>
              </div>
              {/* <!--  --> */}
              <section id="languages">
                <ul className="info-list">
                  {languages.map((languageName, index) => (
                    <li key={index}>
                      <Card language={true} languageName={languageName} />
                    </li>
                  ))}
                </ul>
              </section>
            </article>
          </>
        )}
        {/* <!-- Languages End --> */}
        <hr className="file-hr" />
        {/* <!-- Education --> */}
        <article className="category">
          <div className="heading">
            <i className="fa-solid fa-graduation-cap"></i>
            <h2>Education</h2>
          </div>
          <ul className="info-list">
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

      <section id="col2">
        {person.bio && (
          <>
            <header>
              <h2 className="section-title">Profile</h2>
            </header>
            <hr className="file-hr" />
            <article>
              <p>{person.bio}</p>
            </article>
            <br />
          </>
        )}
        <header>
          <h2 className="section-title">Work experience</h2>
        </header>
        <hr className="file-hr" />

        <article>
          <ul className="info-list">
            {practical.map((work, index) => (
              <li key={index}>
                <Card
                  key={index}
                  data={work}
                  handleEdit={handleEditCard}
                  handleDelete={handleDelete}
                />
              </li>
            ))}
          </ul>
        </article>
      </section>
    </article>
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
