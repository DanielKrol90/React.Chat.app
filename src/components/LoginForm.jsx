import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const projectID = process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      "Project-ID": projectID,
      "User-Name": username,
      "User-Secret": password,
    };

    try {
      await axios.get("https://api.chatengine.io/chats/", {
        headers: authObject,
      });

      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      window.location.reload();
      setError("");
    } catch (error) {
      setError("Wrong username or password");
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Aplication </h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Password"
            required
          />
          <div className="center">
            <button type="submit" className="button">
              <span>Start Chatting</span>
            </button>
          </div>
          <h1 className="error">{error}</h1>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
