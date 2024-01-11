import CoursePublish from "./CoursePublish";
import Security from "./Security";

const Publish = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "0px 20px",
      }}
    >
      <CoursePublish />
      <Security />
      <div style={{ backgroundColor: "white", padding: "20px" }}>
        <b style={{ padding: "10px 0px" }}>
          Anticipating a large number of sign-ups at launch?
        </b>
        <p style={{ color: "gray", padding: "10px 0px" }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus aperiam inventore eius? Dolorem nostrum enim ipsam
          natus sapiente laboriosam possimus non, alias nulla excepturi optio
          libero nesciunt reprehenderit cupiditate tenetur id deserunt
          temporibus dolor itaque sint distinctio officia, veritatis, labore
          quas. Nostrum, excepturi. Corrupti sint quos eum omnis quis autem,
          tenetur enim corporis aliquam culpa id veritatis qui repudiandae
          provident voluptatem dolores quisquam nisi ullam impedit iste laborum
          nemo quod minima! Ipsum cum, eveniet ex laboriosam minus enim maiores
          laudantium quo iste modi magni repellat, illo nisi quidem esse
          reiciendis blanditiis? Dolorem, ea quam pariatur magni voluptate quis
          et repellendus.
        </p>
      </div>
    </div>
  );
};

export default Publish;
