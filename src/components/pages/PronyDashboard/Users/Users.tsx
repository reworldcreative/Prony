import React, { FC, useState } from "react";
import "../Posts/Posts.scss";
import "./Users.scss";
import Breadcrumbs from "@/components/widgets/Breadcrumbs/Breadcrumbs";
import UsersSelectors from "./UsersSelectors";
import Marker from "../Posts/Marker/Marker";
import Dropdown from "@/components/UI/forms/Dropdown/Dropdown";
import PerPage from "../Posts/PerPage";
import Pagination from "@/components/UI/Pagination/Pagination";
import UsersItem, { userItemData } from "./UsersItem/UsersItem";
import usersListData from "@/data/Users.json";

const Users: FC = () => {
  const [usersList, setUsersList] = useState<userItemData[]>([...usersListData]);

  const [segments, setSegments] = useState<string[]>([]);
  const [email, setEmail] = useState<string>("");
  const [roles, setRoles] = useState<string[]>([]);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [isBanned, setIsBanned] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>("");
  const [perPage, setPerPage] = useState<string>("10");

  const usersPerPage: number = parseInt(perPage);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const indexOfLastUser: number = currentPage * usersPerPage;
  const indexOfFirstUser: number = indexOfLastUser - usersPerPage;
  const currentUsers = usersList.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber: number) => {
    pageNumber > 0 && pageNumber <= Math.ceil(usersList.length / usersPerPage) && setCurrentPage(pageNumber);
  };

  const deleteUser = (id: number) => {
    setUsersList(usersList.filter((user) => user.id !== id));
  };

  return (
    <section className="pageContainer-MainSection">
      <Breadcrumbs currentTitle={["Users"]} currentLink={["/users"]} />

      <div className="pageContainer-MainSection__top  pageContainerPosts-MainSection__top pageContainerUsers-MainSection__top">
        <h1 className="title users-MainSection__title">Users</h1>
      </div>

      <section className="posts users pageContainer-section">
        <div className="posts__top users__top">
          <UsersSelectors
            setSegments={setSegments}
            setEmail={setEmail}
            setFirstName={setFirstName}
            setLastName={setLastName}
            setRoles={setRoles}
            segments={segments}
            email={email}
            firstName={firstName}
            lastName={lastName}
            roles={roles}
            isBanned={isBanned}
            setIsBanned={setIsBanned}
          />

          <div className="posts__markersContainer users__markersContainer">
            {segments.map((segment, index) => (
              <Marker
                name={`Segment: ${segment}`}
                key={index}
                color="info"
                type="remove"
                removeItem={() => {
                  setSegments(segments.filter((_, currentIndex) => currentIndex !== index));
                }}
              />
            ))}

            {email !== "" && (
              <Marker
                name={`Email: ${email}`}
                color="info"
                type="remove"
                removeItem={() => {
                  setEmail("");
                }}
              />
            )}

            {firstName !== "" && (
              <Marker
                name={`First Name: ${firstName}`}
                color="info"
                type="remove"
                removeItem={() => {
                  setFirstName("");
                }}
              />
            )}

            {lastName !== "" && (
              <Marker
                name={`Last Name: ${lastName}`}
                color="info"
                type="remove"
                removeItem={() => {
                  setLastName("");
                }}
              />
            )}

            {roles.map((role, index) => (
              <Marker
                name={`Role: ${role}`}
                key={index}
                color="info"
                type="remove"
                removeItem={() => {
                  setRoles(roles.filter((_, currentIndex) => currentIndex !== index));
                }}
              />
            ))}

            {isBanned && (
              <Marker
                name="banned"
                color="info"
                type="remove"
                removeItem={() => {
                  setIsBanned(false);
                }}
              />
            )}
          </div>

          <section className="posts__sort users__sort">
            <div className="container">
              <p className="text-second">Sort by:</p>
              <Dropdown
                addClass="posts__sort-time users__sort-time"
                type="bordered"
                current="Last activity"
                options={["Newest", "Last activity"]}
                onSelect={setSortBy}
              />
            </div>

            <PerPage current={perPage} onSelect={setPerPage} />
          </section>
        </div>

        <section className="posts__list users__list">
          {currentUsers.map((user) => (
            <UsersItem itemData={user} key={user.id} deleteUser={deleteUser} />
          ))}
        </section>

        <div className="posts__sort posts__sort_bottom users__sort users__sort_bottom">
          <Pagination
            paginate={paginate}
            currentPage={currentPage}
            totalPages={Math.ceil(usersList.length / usersPerPage)}
          />

          <PerPage current={perPage} onSelect={setPerPage} />
        </div>
      </section>
    </section>
  );
};

export default Users;
