import "./leftMenu.scss";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import StorefrontIcon from "@mui/icons-material/Storefront";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import MessageIcon from "@mui/icons-material/Message";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import ImageIcon from "@mui/icons-material/Image";
import WatchLaterIcon from "@mui/icons-material/WatchLater";

const LeftMenu = () => {
  return (
    <div className="left-menu">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src="https://images.pexels.com/photos/3491688/pexels-photo-3491688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <span>Jake Zaruba</span>
          </div>
          <div className="item">
            <PeopleAltIcon className="icon" />
            <span>Friends</span>
          </div>
          <div className="item">
            <Diversity3Icon className="icon" />
            <span>Groups</span>
          </div>
          <div className="item">
            <MessageIcon className="icon" />
            <span>Messages</span>
          </div>
          <div className="item">
            <StorefrontIcon className="icon" />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <EventAvailableIcon className="icon" />
            <span>Events</span>
          </div>
          <div className="item">
            <OndemandVideoIcon className="icon" />
            <span>Videos</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Shortcuts</span>
          <div className="item">
            <VideogameAssetIcon className="icon" />
            <span>Games</span>
          </div>
          <div className="item">
            <ImageIcon className="icon" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <WatchLaterIcon className="icon" />
            <span>Memories</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftMenu;
