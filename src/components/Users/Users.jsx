import React from "react";
import users from "./users.module.scss";
import { NavLink } from "react-router-dom";
import axios from "axios";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <section className={users.usersPage}>
      <div className={users.pageHeader}>
        <div>
          <p>Student directory</p>
          <h1>Students</h1>
        </div>
        <span>{props.totalUsersCount} profiles</span>
      </div>

      <div className={users.pages}>
        {pages.map((p) => {
          return (
            <button
              type="button"
              key={p}
              className={props.currentPage === p ? users.textBold : undefined}
              onClick={() => props.onPageChanged(p)}
            >
              {p}
            </button>
          );
        })}
      </div>

      <div className={users.userGrid}>
      {props.users.map((u) => (
        <article className={users.userCard} key={u.id}>
          <div className={users.avatarColumn}>
              <NavLink to={"/profile/" + u.id}>
                {u.photos?.small ? (
                  <img src={u.photos.small} alt={u.name} />
                ) : (
                  <div className={users.noPhoto}>{u.name?.slice(0, 1) || "S"}</div>
                )}
              </NavLink>
              <div>
              {u.followed ? (
                <button
                  className={`${users.actionButton} ${users.secondaryButton}`}
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.toggleFollowingProgress(true, u.id);
                    axios
                      .delete(
                        `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                        {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "22f5a0a1-b93e-48af-a71d-d65c5c5dbbc8",
                          },
                        }
                      )
                      .then((response) => {
                        if (response.data.resultCode === 0) {
                          props.unfollow(u.id);
                        }
                        props.toggleFollowingProgress(false, u.id);
                      });
                  }}
                >
                  Following
                </button>
              ) : (
                <button
                  className={users.actionButton}
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.toggleFollowingProgress(true, u.id);
                    axios
                      .post(
                        `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                        {},
                        {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "22f5a0a1-b93e-48af-a71d-d65c5c5dbbc8",
                          },
                        }
                      )
                      .then((response) => {
                        if (response.data.resultCode === 0) {
                          props.follow(u.id);
                        }
                        props.toggleFollowingProgress(false, u.id);
                      });
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </div>

          <div className={users.userMeta}>
            <div>
              <h2>{u.name}</h2>
              <p>{u.status || "No status yet"}</p>
            </div>
            <div className={users.location}>
              <span>{u.location?.country || "Unknown country"}</span>
              <span>{u.location?.city || "Unknown city"}</span>
            </div>
          </div>
        </article>
      ))}
      </div>
    </section>
  );
};

export default Users;
