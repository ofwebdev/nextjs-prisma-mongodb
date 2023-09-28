import Link from "next/link";
import React from "react";
import { sort } from "fast-sort";

interface User {
  id: string;
  name: string;
  email: string;
}

interface Props {
  sortOrder: string;
}

const url = `https://jsonplaceholder.typicode.com/users`;

const UserTable = async ({ sortOrder }: Props) => {
  const res = await fetch(url);
  const users: User[] = await res.json();

  const sortUsers = sort(users).asc(
    sortOrder === "email" ? (user) => user.email : (user) => user.name
  );
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>
            <Link href={`/user?sortOrder=name`}>Name</Link>
          </th>
          <th>
            <Link href={`/user?sortOrder=email`}>Email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortUsers.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
