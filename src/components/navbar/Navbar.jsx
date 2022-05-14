import "./navbar.scss";
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';


const Navbar = () => {
  return (
      <div className="navbar">
              <div className="wrapper">
                  <div className="dash">
                      <h1>Dashboard</h1>
                      <br />
                      <p className="n1">Welcome back, Andrew</p>
                      
                  </div>
                  <div className="items">
                      <div className="item">
                          <LanguageOutlinedIcon className="icon"/>
                          English
                      </div>
                      <div className="item">
                          <DarkModeOutlinedIcon className="icon"/>
                      </div>

                      <div className="item">
                          <FullscreenExitOutlinedIcon className="icon"/>
                      </div>

                      <div className="item">
                          <NotificationsNoneOutlinedIcon className="icon" />
                          <div className="counter">
                              1
                          </div>
                      </div>

                      <div className="item">
                          <ChatBubbleOutlineOutlinedIcon className="icon"/>
                          <div className="counter">
                              2
                          </div>
                      </div>
                      
                      <div className="item">
                          <img
                          src="https://cdn.pixabay.com/photo/2016/11/29/04/54/photographer-1867417_960_720.jpg"
                          alt=""
                          className="avatar"
                          />
                          <p>Andrew Johnstons</p>
                      </div>
                  </div>
              </div>
    </div>
  );
}

export default Navbar;