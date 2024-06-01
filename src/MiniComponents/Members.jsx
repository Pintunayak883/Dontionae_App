import React from "react";

const Members = () => {
  const members = [
    {
      id: 1,
      image: "/m1.jpg",
      title: "Alexa",
    },
    {
      id: 2,
      image: "/m2.jpg",
      title: "Jhone",
    },
    {
      id: 3,
      image: "/m3.jpg",
      title: "Michael",
    },
    {
      id: 4,
      image: "/m5.jpg",
      title: "Robet",
    },
    {
      id: 5,
      image: "/m5.jpg",
      title: "Siri",
    },
    {
      id: 6,
      image: "/m6.jpg",
      title: "Tobey",
    },
    {
      id: 7,
      image: "/m7.jpg",
      title: "Jhon Wick",
    },
  ];
  return (
    <>
      <section className="members">
        <div className="container">
          <div className="heading_section">
            <h2 className="heading">MEMBERS</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
              repudiandae beatae quibusdam tenetur quia iure consectetur
              voluptate, iste quae exercitationem.
            </p>
          </div>
          <div className="members_container">
            {members.map((member) => (
              <div className="card" key={member.id}>
                <img src={member.image} alt={member.title} />
                <h3>{member.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Members;
