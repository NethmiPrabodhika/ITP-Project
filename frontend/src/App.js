import React, { Component,useState,useEffect } from 'react'
import {BrowserRouter, Route} from 'react-router-dom';
import axios from 'axios';
import Adminhomeheader from './components/Adminhomeheader';
import Adminhomefooter from './components/Adminhomefooter';

import AppliedAll from './components/AppliedAll'
import MainHome from './components/MainHome'
import adminViewProfile from './components/adminViewProfile'
import adminViewApplication from './components/adminViewApplication'
import updateAdmin from './components/updateAdmin'
import Apply from './components/Apply'

import Specialevents from './components/Specialevents';
import Loginpage from './components/Loginpage';
import middle from './components/Middle';
import Aboutus from './components/Aboutus';
import Adminspecialevent from './components/Adminspecialevent';
import Createspecialevent from './components/Createspecialevent';
import Editspecialevent from './components/Editspecialevent';
import Adminttrequest from './components/Adminttrequest';
import Adminalltimetables from './components/Adminalltimetables';
import Adminaddttable from './components/Adminaddttable';
import Admineditttables from './components/Admineditttables';
import Displaytimetables from './components/Displaytimetables';

import AdminHome from './components/AdminHome';
import CreateSub from './components/CreateSub';
import SubHome from './components/SubHome';
import EditSub from './components/EditSub';
import SubDetails from './components/SubDetails';
import SubPdf from './components/SubPdf';
import EnrollmentHome from './components/EnrollmentHome';
import AddEnrollment from './components/AddEnrollment';

import addLecturer from './components/addLecturer';
import EditLecturer from './components/EditLecturer';
import lecturerHome from './components/lecturerHome';
import PostLecturer from './components/PostLecturer';
import timetableUpdate from './components/timetableUpdate';
import leaveReq from './components/leaveReq';
import DownloadPdf from './components/DownloadPdf'


import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';
import Courses from './components/Courses';
import AddCourse from './components/AddCourse';
import Course from './components/Course';
import EditCourse from './components/EditCourse';
import DisplayAll from './components/DisplayAll';
import Login from './components/Login';
import courseInside from './components/courseInside';
import adminCourseDisplay from './components/adminCourseDisplay';
import buyCourse from './components/buyCourse';


import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import Malkimainhome from './components/Malkimainhome';
import PostDetails from './components/PostDetails';
import Home from './components/Home';
import addstudent from './components/addstudent';
import ViewStdDetails from './components/ViewStdDetails';
import Registration from './components/Registration';
import profile from './components/profile';
import StdEdit from './components/StdEdit';
import StdPdf from './components/StdPdf';



  
  function App() {

     

      const[posts , setPosts] = useState([])
    
      useEffect(() => {
    
        axios.get('http://localhost:8000/courses')
        .then(res => setPosts(res.data) )
        .catch(error => console.log(error));
    
    
      })



    return (
    <BrowserRouter>
      <div>

        <Route path=""  component={Adminhomeheader}></Route>
      
        <Route path="/staffhome" component={MainHome}></Route>
        <Route path="/applications"  component={AppliedAll}></Route>
        <Route path="/update/:id"  component={updateAdmin}></Route>
        <Route path="/adminprofile/:id"  component={adminViewProfile}></Route>
        <Route path="/viewapplication/:id"  component={adminViewApplication}></Route> 
        <Route path="/apply"  component={Apply}></Route>   

        <Route path="/middle" component={middle}></Route>
        <Route path="/special" component={Specialevents}></Route>
        <Route path="/adminspecialevent" component={Adminspecialevent}></Route>
        <Route path="/about" component={Aboutus}></Route>
        <Route path="/admin"  component={Loginpage}></Route>
        <Route path= "/addnewspecialevent" component={Createspecialevent}></Route>
        <Route path="/editspecialevent/:id" component={Editspecialevent}></Route> 
        <Route path="/Admintimetable" component={Adminttrequest}></Route>
        <Route path="/Admintimetable" component={Adminalltimetables}></Route>
        <Route path="/addnewtimetable" component={Adminaddttable}></Route>
        <Route path="/admineditttables/:id" component={Adminttrequest}></Route>
        <Route path="/admineditttables/:id" component={Admineditttables}></Route>
        <Route path="/displaytimetables" component={Displaytimetables}></Route>

        <Route path="/" exact component={AdminHome}></Route>
        <Route path="/Adminsubhome" component={SubHome}></Route>
        <Route path="/add" component={CreateSub}></Route>
        <Route path="/edit/:id" component={EditSub}></Route>
        <Route path="/subject/:id" component={SubDetails}></Route>
        <Route path="/downloadsub/:id" component={SubPdf}></Route>
        <Route path="/enrollhome" component={EnrollmentHome}></Route>
        <Route path="/addEnrollment" component={AddEnrollment}></Route>

        <Route path ="/lechome" component ={lecturerHome}></Route>
        <Route path= "/addLec" component={addLecturer}></Route>
        <Route path ="/editLec/:id" component={EditLecturer}></Route>
        <Route path ="/postLec/:id" component={PostLecturer}></Route>
        <Route path ="/timetableReq" component={timetableUpdate}></Route> 
        <Route path ="/leaveReq" component={leaveReq}></Route> 
        <Route path ="/download/:id" component={DownloadPdf}></Route>

       
       
        <Route   exact path="/view"  render={()=> <Courses posts={posts} />} />
        <Route path="/course/:id"    render={(props)=>  <Course {...props} posts={posts} />} />
        <Route path="/Cupdate/:id"    render={(props)=>  <EditCourse {...props} posts={posts} />} />
        <Route  path="/add-course"  component={AddCourse} />
        <Route  path="/allCourse"  component={Login} />
        <Route  path="/Admincoursepage"  render={()=> <DisplayAll posts={posts} />} />
        <Route  path="/inside"  component={buyCourse} />
        <Route path="/course/:id"    render={(props)=>  <adminCourseDisplay {...props} posts={posts} />} />


        <Route path="/AdminStudnethome"  component={Malkimainhome}></Route>
        <Route path="/add" component={CreatePost}></Route>
        <Route path="/stdedit/:id" component={EditPost}></Route>
        <Route path="/post/:id" component={PostDetails}></Route>
        <Route path="/studentapplications" component={Home}></Route>
        <Route path="/addstudent/:id" component={addstudent}></Route>
        <Route path="/view/:id" component={ViewStdDetails}></Route>
        <Route path="/registration" component={Registration}></Route>
        <Route path="/profile/:id" component={profile}></Route>
        <Route path="/stdEdit/:id" component={StdEdit}></Route>
        <Route path="/stdPdf/:id" component={StdPdf}></Route>

        <Route path="" component={Adminhomefooter}></Route>

      </div>
    </BrowserRouter>
    )
  }

  export default App;