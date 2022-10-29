import { ChatEngine } from 'react-chat-engine';

import { ChatFeed } from "./components";

import "./App.css";

function App() {
  return (
    <ChatEngine
      height="100vh"
      userName={process.env.REACT_APP_CHAT_ENGINE_USER_NAME}
      userSecret={process.env.REACT_APP_CHAT_ENGINE_USER_SECRET}
      projectID={process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
