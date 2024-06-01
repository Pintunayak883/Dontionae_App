import React from "react";

const Qualities = () => {
  const qualities = [
    {
      id: 1,
      image: "/community.jpg",
      title: "COMMUNITY DEVELOPMENT",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis eligendi, libero ut minus mollitia nam, asperiores pariatur perspiciatis ad quo accusamus eum delectus nihil deleniti molestias molestiae eveniet magnam sint officia facilis repellendus facere similique. Omnis sapiente dolores temporibus fugit!",
    },
    {
      id: 2,
      image: "/transparency.jpg",
      title: "TRANSPARENCY",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis eligendi, libero ut minus mollitia nam, asperiores pariatur perspiciatis ad quo accusamus eum delectus nihil deleniti molestias molestiae eveniet magnam sint officia facilis repellendus facere similique. Omnis sapiente dolores temporibus fugit!",
    },
    {
      id: 3,
      image: "/impact.jpg",
      title: "IMPACT MEASUREMENT",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis eligendi, libero ut minus mollitia nam, asperiores pariatur perspiciatis ad quo accusamus eum delectus nihil deleniti molestias molestiae eveniet magnam sint officia facilis repellendus facere similique. Omnis sapiente dolores temporibus fugit!",
    },
  ];
  return (
    <>
      <div className="qualities">
        <h2>OUR QUALITIES</h2>
        <div className="container">
          {qualities.map((el) => (
            <div className="card" key={el.id}>
              <div className="img-wrapper">
                <img src={el.image} alt={el.title} />
              </div>
              <div className="content">
                <p className="title">{el.title}</p>
                <p className="description">{el.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Qualities;
