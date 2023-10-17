import { useEffect, useState } from "react";
import AddUser from "./AddUser";
import EditUser from "./EditUser";
import { AiOutlinePlusCircle } from "react-icons/ai";
import CrudOperation from "../services/CrudOperation";
import UserRow from "./UserRow";
import { TbTrashOff } from "react-icons/tb";

const Table = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openAddUser, setOpenAddUser] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const data = await CrudOperation.getAllUsers();
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  console.log(users);

  return (
    <>
      <div className="relative overflow-x-auto sm:rounded-lg lg:rounded-none max-w-7xl mx-auto h-screen z-20">
        <div className="dark:bg-blue-400 p-5 flex justify-between items-center mt-10 bg-gray-700">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-white">
            User{" "}
            <span className="text-2xl md:text-3xl lg:text-4xl font-bold ">
              Management
            </span>
          </h1>
          <button
            className="bg-white py-3 px-8 rounded flex items-center gap-2"
            onClick={() => {
              setOpenAddUser(!openAddUser);
              setOpenModal(false);
            }}
          >
            {" "}
            <AiOutlinePlusCircle size={20} /> Add New User
          </button>
        </div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                SL
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Employment
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
                City
              </th>
              <th scope="col" className="px-6 py-3">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <UserRow
                key={user.id}
                setOpenModal={setOpenModal}
                setOpenAddUser={setOpenAddUser}
                user={user}
              />
            ))}
          </tbody>
        </table>
      </div>
      <EditUser openModal={openModal} setOpenModal={setOpenModal} />
      <AddUser openAddUser={openAddUser} setOpenAddUser={setOpenAddUser} />
    </>
  );
};

export default Table;
