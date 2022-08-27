import Logo from "../images/logo.svg"
import MenuIco from "../images/icon-menu.svg"
import CloseIco from "../images/icon-close-menu.svg"
import DownArrow from "../images/icon-arrow-down.svg"
import UpArrow from "../images/icon-arrow-up.svg"
import Todo from "../images/icon-todo.svg"
import Calendar from "../images/icon-calendar.svg"
import Reminders from "../images/icon-reminders.svg"
import Planning from "../images/icon-planning.svg"


export default function Header(props){
    const click = props.click;
    const {activeFt, activeCo, popState} = props.state
    return(
        <header>
            <img src={Logo} alt="Span Logo"  className="header-logo"/>
            <nav className="main-nav-desk">
                <ul className="menu-items-desk">
                    <li className="menu-item" onClick={click} >
                        <div className="menu-toggle" id="Features">
                            Features
                            <img src={activeFt ? UpArrow: DownArrow} alt=""/>
                        </div>
                        <ul className={activeFt ?  "dropdown active" : "dropdown"}>
                            <li className="dropwdown-item">
                                <img src={Todo} alt="" />
                                <span>Todo List</span>
                            </li>
                            <li className="dropwdown-item">
                                <img src={Calendar} alt="" />
                                <span>Calendar</span>
                            </li>
                            <li className="dropwdown-item">
                                <img src={Reminders} alt="" />
                                <span>Reminders</span>
                            </li>
                            <li className="dropwdown-item">
                                <img src={Planning} alt="" />
                                <span>Planning</span>
                            </li>
                        </ul>
                    </li>
                    <li className="menu-item" onClick={click}>
                        <div className="menu-toggle" id="Company">
                            Company
                            <img src={activeCo ? UpArrow: DownArrow} alt=""/>
                        </div>
                        <ul className={activeCo ?  "dropdown active" : "dropdown"}>
                            <li className="dropwdown-item">
                                <span>History</span>
                            </li>
                            <li className="dropwdown-item">
                                <span>Our Team</span>
                            </li>
                            <li className="dropwdown-item">
                                <span>Blog</span>
                            </li>
                        </ul>
                    </li>
                    <li className="menu-item">
                        <span>Careers</span> 
                    </li>
                    <li className="menu-item">
                        <span>About</span>
                    </li>
                </ul>
                <div className="login-container">
                    <a href="#" className="login-btn"> Login</a>
                    <a href="#" className="login-btn register-btn"> Register</a>
                </div>
                </nav>
                <img src={MenuIco} alt="Menu icon"  className="menu-ico" onClick={click} id="Menu-ico"/>
            {popState && <div className="menu-pop">
                <nav className="main-nav">
                    <img src={CloseIco} alt="Close icon"  className="menu-ico close-ico" onClick={click} id="Close-ico"/>
                <ul className="menu-items">
                    <li className="menu-item" onClick={click} >
                        <div className="menu-toggle" id="Features">
                            Features
                            <img src={activeFt ? UpArrow: DownArrow} alt=""/>
                        </div>
                        <ul className={activeFt ?  "dropdown active" : "dropdown"}>
                            <li className="dropwdown-item">
                                <img src={Todo} alt="" />
                                <span>Todo List</span>
                            </li>
                            <li className="dropwdown-item">
                                <img src={Calendar} alt="" />
                                <span>Calendar</span>
                            </li>
                            <li className="dropwdown-item">
                                <img src={Reminders} alt="" />
                                <span>Reminders</span>
                            </li>
                            <li className="dropwdown-item">
                                <img src={Planning} alt="" />
                                <span>Planning</span>
                            </li>
                        </ul>
                    </li>
                    <li className="menu-item" onClick={click}>
                        <div className="menu-toggle" id="Company">
                            Company
                            <img src={activeCo ? UpArrow: DownArrow} alt=""/>
                        </div>
                        <ul className={activeCo ?  "dropdown active" : "dropdown"}>
                            <li className="dropwdown-item">
                                <span>History</span>
                            </li>
                            <li className="dropwdown-item">
                                <span>Our Team</span>
                            </li>
                            <li className="dropwdown-item">
                                <span>Blog</span>
                            </li>
                        </ul>
                    </li>
                    <li className="menu-item">
                        <span>Careers</span> 
                    </li>
                    <li className="menu-item">
                        <span>About</span>
                    </li>
                </ul>
                <div className="login-container">
                    <a href="#" className="login-btn"> Login</a>
                    <a href="#" className="login-btn register-btn"> Register</a>
                </div>
                </nav>
                
            </div>}
        </header>
    )
}