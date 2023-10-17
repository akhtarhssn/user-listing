import React from "react";
import { TbTrashOff } from "react-icons/tb";
import { BiSolidEdit } from "react-icons/bi";

const UserRow = ({
  user,
  openModal,
  setOpenModal,
  setOpenAddUser,
  index,
  deleteHandler,
  getUserId,
}) => {
  const { id, name, email, phone, city, employment, age } = user;

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
      <td className="px-6 py-4">{index + 1}</td>
      <th
        scope="row"
        className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <div>
          <div className="text-base font-semibold">{name}</div>
        </div>
      </th>
      <td className="px-6 py-4">{email}</td>
      <td className="px-6 py-4">{age}</td>
      <td className="px-6 py-4">{employment}</td>
      <td className="px-6 py-4">{phone}</td>
      <td className="px-6 py-4">
        <p>{city}</p>
      </td>
      <td
        className="px-6 py-4 text-center text-green-600 hover:text-green-400 cursor-pointer group"
        onClick={(e) => {
          setOpenModal(!openModal);
          setOpenAddUser(false);
          getUserId(id);
        }}
      >
        <BiSolidEdit
          className="group-hover:scale-125 duration-500"
          size={23}
          onClick={() => getUserId(id)}
        />
      </td>
      <td
        className="px-6 py-4 text-center text-red-600 hover:text-red-400 cursor-pointer group"
        onClick={(e) => deleteHandler(id)}
      >
        <TbTrashOff className="group-hover:scale-125 duration-500" size={23} />
      </td>
    </tr>
  );
};

export default UserRow;
