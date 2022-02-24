import React from "react";

const Sidebar = () => {
  return (
    <>
      <form className="form">
        <input type="text" placeholder="Search..." />
        <button>
          <i className="fas fa-search"></i>
        </button>
      </form>
      <div className="ads">
        <div className="video">
          <iframe
            src="https://www.youtube.com/embed/zL1gMeoN8bI"
            frameBorder="0"
            allowFullScreen={false}
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
