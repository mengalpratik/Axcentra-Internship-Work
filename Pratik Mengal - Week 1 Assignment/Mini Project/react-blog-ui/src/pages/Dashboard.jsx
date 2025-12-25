import { useState, useEffect } from "react";

//  Fake data generator
const generateFakePosts = () => {
  const techs = ["React", "CSS", "JavaScript"];
  const levels = ["Beginner", "Intermediate", "Advanced"];
  const data = [];

  for (let i = 1; i <= 50; i++) {
    data.push({
      id: Date.now() + i,
      title: `Sample Post ${i}`,
      category: techs[i % 3],
      level: levels[i % 3]
    });
  }
  return data;
};

const Dashboard = ({ category }) => {

  //  Load from localStorage
  const [posts, setPosts] = useState(() => {
    const saved = localStorage.getItem("posts");
    return saved
      ? JSON.parse(saved)
      : [{ id: 1, title: "React Basics", category: "React", level: "Beginner" }];
  });

  const [title, setTitle] = useState("");
  const [level, setLevel] = useState("Beginner");
  const [newCategory, setNewCategory] = useState("React");

  //  Save to localStorage
  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  const addPost = () => {
    if (!title) return;

    setPosts([
      ...posts,
      {
        id: Date.now(),
        title,
        category: newCategory,
        level
      }
    ]);

    setTitle("");
  };

  const deletePost = (id) => {
    setPosts(posts.filter(p => p.id !== id));
  };

  const flashFakeData = () => {
    setPosts(generateFakePosts());
  };

  const visiblePosts =
    category === "All"
      ? posts
      : posts.filter(p => p.category === category);

  return (
    <div className="main">
      <h2>Dashboard 📊</h2>

      <div className="form">
        <input
          className="title-input"
          placeholder="Post title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <select className="select-input" onChange={e => setNewCategory(e.target.value)}>
          <option>React</option>
          <option>CSS</option>
          <option>JavaScript</option>
        </select>

        <select className="select-input" onChange={e => setLevel(e.target.value)}>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>

        <div className="form-actions">
          <button onClick={addPost} className="add-btn">Add Post</button>
          <button onClick={flashFakeData} className="demo-btn">Load Demo Data (50) 💀</button>
        </div>
      </div>

      {visiblePosts.map(post => (
        <div className="card" key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.category} | {post.level}</p>
          <button className="del" onClick={() => deletePost(post.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
