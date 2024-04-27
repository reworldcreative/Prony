import React, { FC } from "react";
import "./Users.scss";
import Search from "@/components/UI/forms/Search/Search";
import DropdownSelect from "@/components/UI/forms/DropdownSelect/DropdownSelect";
import Checkbox from "@/components/UI/forms/Checkbox/Checkbox";

interface UsersSelectorsProps {
  setSegments: (value: string[]) => void;
  setEmail: (value: string) => void;
  setFirstName: (value: string) => void;
  setLastName: (value: string) => void;
  setRoles: (value: string[]) => void;
  setIsBanned: (value: boolean) => void;
  segments: string[];
  email: string;
  firstName: string;
  lastName: string;
  roles: string[];
  isBanned: boolean;
}

const UsersSelectors: FC<UsersSelectorsProps> = ({
  setSegments,
  setEmail,
  setFirstName,
  setLastName,
  setRoles,
  setIsBanned,
  segments,
  email,
  firstName,
  lastName,
  roles,
  isBanned,
}) => {
  return (
    <div className="posts__selectors users__selectors">
      <DropdownSelect
        getValue={setSegments}
        defaultValue={segments}
        selectType="checkbox"
        title={"User Segments"}
        marked={true}
        options={[
          {
            name: "Segment1",
            labelText: "Segment 1",
          },
          {
            name: "Segment2",
            labelText: "Segment 2",
          },
        ]}
      />

      <Search value={email} name="email" placeholder="Enter e-mail" getValue={setEmail} />

      <Search value={firstName} name="FirstName" placeholder="First name" getValue={setFirstName} />

      <Search value={lastName} name="LastName" placeholder="Last name" getValue={setLastName} />

      <DropdownSelect
        getValue={setRoles}
        defaultValue={roles}
        selectType="checkbox"
        title={"Role"}
        marked={true}
        options={[
          {
            name: "Role1",
            labelText: "Role 1",
          },
          {
            name: "Role2",
            labelText: "Role 2",
          },
        ]}
      />

      <Checkbox
        size="big"
        type="secondary"
        labelText="Banned"
        name="isBanned"
        value="banned"
        getCheckboxValue={setIsBanned}
        checked={isBanned}
      />
    </div>
  );
};

export default UsersSelectors;
