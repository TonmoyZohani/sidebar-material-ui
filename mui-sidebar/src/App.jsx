import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./assets/components/Sidebar";
import Drafts from "./assets/components/Drafts";
import Inbox from "./assets/components/Inbox";
import Emails from "./assets/components/Emails";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sidebar" element={<Sidebar />}>
          <Route path="/sidebar/inbox" element={<Inbox />} />
          <Route path="/sidebar/drafts" element={<Drafts />} />
          <Route path="/sidebar/emails" element={<Emails/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
