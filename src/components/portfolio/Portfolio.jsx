import "./Portfolio.scss";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate vitae nisi qui voluptatem expedita adipisci, odio, veniam cumque aliquam libero minima, assumenda commodi",
  },
  {
    id: 2,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/19664416/pexels-photo-19664416/free-photo-of-stranddosen.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate vitae nisi qui voluptatem expedita adipisci, odio, veniam cumque aliquam libero minima, assumenda commodi",
  },
  {
    id: 3,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/19652073/pexels-photo-19652073/free-photo-of-a-tree-is-standing-in-the-snow-near-a-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate vitae nisi qui voluptatem expedita adipisci, odio, veniam cumque aliquam libero minima, assumenda commodi",
  },
  {
    id: 4,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/3444345/pexels-photo-3444345.png?auto=compress&cs=tinysrgb&w=600k",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate vitae nisi qui voluptatem expedita adipisci, odio, veniam cumque aliquam libero minima, assumenda commodi",
  },
];
const Single = (item) => {
  return <section>{item.title}</section>;
};
const Portfolio = () => {
  return (
    <div className="portfolio">
      {items.map((item) => {
        <Single item={item} key={item.id} />;
      })}{" "}
    </div>
  );
};

export default Portfolio;
