import Post from './components/navbar/Post'
import Home from "./components/navbar/Home";
import Navbar from "./components/navbar/Navbar";
import Inbox from "./components/Inbox"
import AddMember from './components/AddMember';
import Bgv from "./sharing/bgv"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Events from './users/components/Events';
import Members from './admin/pages/GetMembers';
import Footer from './sharing/footer';
import Login from './sharing/Login';
import Authen from './sharing/Authen';
import Submit from './admin/components/Submit';

import Mainboard from './admin/pages/GetMainboard';
import LogIn from './sharing/Ketan_Login';
import SignInn from './sharing/SignIn';
import Gallery from './components/Gallery';
import Fform from './sharing/Fform';
import Logininfo from './sharing/Logininfo';
import About from './sharing/About';

function App() {

  return (
    <>
      <Router>
        {/* <Navbar title="Navbar" aboutNavText="About"></Navbar> */}
        <div className="container">
          <Bgv></Bgv>


          <Navbar></Navbar>

          <Routes>
            <Route path="/" element={<Home />} >Home</Route>
            <Route path="/post" element={<Post />}>Post</Route>
            <Route path="/post/inbox" element={<Inbox />}>Inbox</Route>
            <Route path="/members" element={<Members />}>Members</Route>
            <Route path="/events" element={<Events />}>Events</Route>
            <Route path="/test2aa" element={<Events />}>Test2aa</Route>
            <Route path="/addMember" element={<AddMember />}>AddMember</Route>
            <Route path="/authen" element={<Authen />}>Signup</Route>
            <Route path="/submit" element={<Submit />}>Submit</Route>
            <Route path="/mainMember" element={< Mainboard />}>Submit</Route>
            <Route path="/gallery" element={< Gallery />}>Gallery</Route>
            <Route path="/feedback" element={< Fform />}>Feedback</Route>
            <Route path="/loginInfo" element={< Logininfo />}>Logininfo</Route>
            <Route path="/aboutus" element={< About />}>About</Route>
            <Route path="/authen/login" element={<Login/>}>SignIN</Route>
            <Route path="/authen/signin" element={<SignInn/>}>SignIN</Route>
            {/* <Route path="/signup" element={<Signup />}>Signup</Route>
            <Route path="/login" element={<Login/>}>Signup</Route> */}

            <Route path="*" element={<Navigate to="/" />}></Route>
          </Routes>
        </div>


      </Router >
      <Footer></Footer>

    </>
  );
}

export default App;

