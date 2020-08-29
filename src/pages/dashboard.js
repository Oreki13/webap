import React, { Fragment, useState } from "react";
import { Switch, Route } from "react-router-dom";

// Componnent
import Sidebar from "../componnets/dashboard/lite/sidebar";
import MySidebar from "../componnets/dashboard/lite/mysidebar";
import Header from "../componnets/dashboard/lite/header";
import Breadcom from "../componnets/dashboard/lite/breadcomp";
import ListPost from "../componnets/dashboard/listPost";
import UpPost from "../componnets/dashboard/upPost";
import CreatePost from "../componnets/dashboard/createPost";
import EditPost from "../componnets/dashboard/editPost";
import Setting from "../componnets/dashboard/upPost";

const Dashboard = (props) => {
  const [toggle, setToggle] = useState(false);
  const [page, setPage] = useState("");
  const [slide, setSlide] = useState(false);

  const path = props.location.pathname;

  const onToggled = (tog) => {
    setToggle(tog);
  };

  const navWidthCollapsed = 64;
  const navWidthExpanded = 280;

  return (
    <Fragment>
      <MySidebar statusPage={path} slide={slide} />
      {/* <Sidebar fun={onToggled} {...props} page={setPage}/> */}
      {/* <main style={{ marginLeft: toggle ? 240 : 64, padding: 0 }}> */}
      <main style={{ padding: 0 }}>
        <Header slide={setSlide} status={slide} {...props} />
        {/* <Breadcom {...props} /> */}
        <Switch>
          <Route
            path="/ksrt"
            exact
            render={(props) => <ListPost {...props} />}
          />
          {/* <Route path='/1' render={()=> <SettingPost/>}  /> */}
          <Route path="/ksrt/post" render={() => <UpPost />} />
          <Route
            path="/ksrt/create"
            render={(props) => <CreatePost {...props} />}
          />
          <Route
            path="/ksrt/edit/:id"
            render={(props) => <EditPost {...props} />}
          />
          <Route path="/setting" render={(props) => <Setting {...props} />} />
        </Switch>
      </main>
    </Fragment>
  );
};

export default Dashboard;
