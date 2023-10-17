import React from "react";

const UserRow = ({ user, openModal, setOpenModal, setOpenAddUser }) => {
  const { name, email, phone, city, employment, department } = user;

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
      <td className="px-6 py-4">1</td>
      <th
        scope="row"
        className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <div>
          <div className="text-base font-semibold">{name}</div>
          <div className="font-normal text-gray-500">{department}r</div>
        </div>
      </th>
      <td className="px-6 py-4">{email}m</td>
      <td className="px-6 py-4">{employment}</td>
      <td className="px-6 py-4">{phone}0</td>
      <td className="px-6 py-4">
        <p>{city}rk</p>
      </td>
      <td
        className="px-6 py-4"
        onClick={() => {
          setOpenModal(!openModal);
          setOpenAddUser(false);
        }}
      >
        {/*  Modal toggle  */}
        <a
          href="#"
          type="button"
          data-modal-show="editUserModal"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Edit user
        </a>
      </td>
    </tr>
  );
};

export default UserRow;
