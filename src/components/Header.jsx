import { useState } from "react";
import "../styles/Header.css";
import PropTypes from "prop-types";

const workspaceContent = ()=>{
   return(
    <div id="workspace-internal" className="flex flex-col items-start gap-1 cursor-pointer">
        <p className="ml-2 workspace-content px-2 py-1">🚀 PoC Projects</p>
        <p className="ml-2 workspace-content px-2 py-1">✅ Client Projects</p>
    </div>
   )
};

const Header = (props) => {
  const [workspaceOption, setWorkspaceOptions] = useState("chevron-down-outline");
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeState, setActiveState] = useState(false);

  const expandWorkspace = () => {
    workspaceOption === "chevron-down-outline"
      ? (setWorkspaceOptions("chevron-up-outline"), setIsExpanded(true), setActiveState(true))
      : (setWorkspaceOptions("chevron-down-outline"), setIsExpanded(false), setActiveState(false));
  };

  return (
    <>
      <nav
        id="navigation"
        className="bg-white py-4 flex fixed flex-col items-center h-screen w-60 float-left z-50"
      >
        <div className="flex items-center gap-1">
          <img src="/public/logo.png" alt="Notes Logo" className="w-10" />
          <h1 className="font-staatliches text-4xl">Note Taking</h1>
        </div>
        <div
          id="navigation-content"
          className="flex flex-col gap-2 items-start select-none"
        >
          {/* <h2 className="text-xl mt-16 font-bold self-center">Menu</h2> */}
          <p className="flex gap-1 mt-16  text-lg items-center text-indigo-600 hover:text-indigo-700 cursor-pointer">
            <ion-icon name="home-outline"></ion-icon>Dashboard
          </p>
            <p
                onClick={expandWorkspace}
                className={`flex gap-1 text-lg items-center hover:text-indigo-700 cursor-pointer ${activeState ? "active" : ""}`}
            >
                <ion-icon name="apps-outline"></ion-icon>Workspace
                <ion-icon id="chevron-arrow" name={workspaceOption}></ion-icon>
            </p>

                {isExpanded && workspaceContent()}
            <p className="flex gap-1 text-lg items-center active:text-indigo-600 hover:text-indigo-700 cursor-pointer"><ion-icon name="person-outline"></ion-icon>Contacts</p>
        </div>
      </nav>

      <header
        id="content-header"
        className="bg-white flex items-center w-screen py-4 pl-2 gap-10 justify-evenly fixed z-40 drop-shadow-md"
      >
        <div id="profile-details" className="flex items-center gap-2">
          <div
            id="profile-picture"
            className="rounded-full w-10 h-10 drop-shadow-md"
          >
            {/* Profile picture is added via CSS background-image property */}
          </div>
          <div className="text-data flex flex-col gap-0">
            <h2 className="font-staatliches text-xl">Berwin Singh</h2>
            <p className="text-sm mt-0">Web Developer</p>
          </div>
        </div>
        <div id="search-bar" className="flex items-center gap-2">
          <input
            type="text"
            name="search-bar"
            id="search"
            className="border border-black w-72 h-8 rounded-md px-2 py-1"
            placeholder="Search Notes..."
          />
          <ion-icon name="search-outline" id="search-icon"></ion-icon>
        </div>
        <div id="interactive-btns" className="flex items-center">
          <button
            type="button"
            className="bg-indigo-600 text-white py-1 px-2 rounded-md drop-shadow-md flex items-center gap-1 hover:bg-indigo-700 select-none"
            onClick={props.newNoteHandler}
            id="add-new-note-btn"
          >
            Add New Note <ion-icon name="add-outline"></ion-icon>
          </button>
          <ion-icon name="mail-unread-outline" id="mail"></ion-icon>
          <ion-icon
            name="notifications-outline"
            id="notification-bell"
          ></ion-icon>
        </div>
      </header>
    </>
  );
};

Header.propTypes = {
    newNoteHandler: PropTypes.func,
    btnDisabledHandler: PropTypes.bool,
}

export default Header;