import React from "react";
import { Link, NavLink } from "react-router-dom";

const ForYou = (props) => {
  const timeSince = (dates) => {
    // console.log(Date.parse(date));
    const date = Date.parse(dates);
    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
      return interval + " years ago";
    }

    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + " months ago";
    }
    interval = Math.floor(seconds / 604800);
    if (interval > 1) {
      return interval + " weeks ago";
    }

    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + " days ago";
    }

    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + " hours ago";
    }

    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
  };

  const { datas } = props;
  // console.log(props.location.pathname);

  const goArtikel = (id) => {
    props.history.pathname(`artikel/${id}`);
    console.log(id);
  };

  return (
    <div className="card-foryu mb-3">
      <Link to={"/artikel/" + datas.id}>
        <span className="title-foryu">{datas.title}</span>
      </Link>

      <div className="text-foryu py-2">
        <p>
          {datas.caption_img.length > 100
            ? datas.caption_img.substr(0, 100) + "..."
            : datas.caption_img}
        </p>
      </div>
      <span className="date-foryu">{timeSince(datas.createdAt)}</span>
    </div>
  );
};

export default ForYou;
