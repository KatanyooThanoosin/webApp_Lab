import './App.css';
import Food from './component/food'

function App() {
  return (
    <>
      <h1 className="topic">โหวตอาหาร</h1>
      <Food header='อาหารคาว' subHeader='ข้าวผัด' imgSrc='https://sgp1.vultrobjects.com/img-in-th/UmqZzX.jpeg' infoBody='Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sint eveniet maxime perspiciatis voluptatum eos esse! Possimus voluptatibus itaque consequatur impedit eos corporis, beatae laboriosam temporibus enim, voluptates ratione autem? Numquam commodi, eum officia voluptatibus omnis quisquam explicabo itaque dicta unde eaque tempora.'/>
      <Food header='อาหารหวาน' subHeader='บัวลอย' imgSrc='https://sgp1.vultrobjects.com/img-in-th/UmqT6r.jpeg' infoBody='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, impedit quos quas placeat dolorum fuga distinctio voluptates similique culpa iusto saepe asperiores rerum et inventore voluptatem nisi nulla voluptate, magni optio commodi ut, voluptas odio! Temporibus!'/>
    </>
  );
}

export default App;
