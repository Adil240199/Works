import React from "react";
import users from "./users.module.scss";
import { NavLink } from "react-router-dom";

let Users = (props) => {

    let pagesCount = Math.ceil (props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

  return (
    <div style={{ paddingTop: "70px", paddingLeft: "5%" }}>
      <div>
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p && users.textBold}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>

      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={'/profile/' + u.id}>
              <img src={u.photos.small != null ? u.photos.small : "user.svg.png"} alt="user"/>
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button onClick={() => props.unfollow(u.id)}>
                  UnFollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.county"}</div>
              <div>{"u.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
