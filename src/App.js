import React, { useState } from "react";
import "./App.css";
import Fader from "./components/Fader";
import { onMessageListener } from "./firebase/firebaseInit";
import Notifications from "./components/Notification/Notification";
import ReactNotification from "./components/Notification/ReactNotification";

function App() {
  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState({ title: "", body: "" });

  console.log(show, notification);

  onMessageListener()
    .then((payload) => {
      setShow(true);
      setNotification({
        title: payload.notification.title,
        body: payload.notification.body,
      });
      console.log(payload);
    })
    .catch((err) => console.log("failed: ", err));

  return (
    <div className="App">
      {show ? (
        <ReactNotification
          title={notification.title}
          body={notification.body}
        />
      ) : (
        <></>
      )}
      <Notifications />
      <Fader text="Hello React"></Fader>
    </div>
  );
}

export default App;
