import "./rightMenu.scss";

const RightMenu = () => {
  return (
    <div className="right-menu">
      <div className="container">
        <div className="item">
          <span>Suggested for you</span>
          <div className="user">
            <div className="user-info">
              <img src="https://images.pexels.com/photos/3491688/pexels-photo-3491688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
              <span>Jake Zaruba</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest activity</span>
          <div className="user">
            <div className="user-info">
              <img src="https://images.pexels.com/photos/3491688/pexels-photo-3491688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
              <p>
                <span>Jake Zaruba</span>
                Changed their profile picture
              </p>
            </div>
            <span>1 min ago </span>
          </div>
        </div>
        <div className="item">
          <span>Online</span>
          <div className="user">
            <div className="user-info">
              <img src="https://images.pexels.com/photos/3491688/pexels-photo-3491688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
              <div className="online-status"></div>
              <span>Jake Zaruba</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightMenu;
