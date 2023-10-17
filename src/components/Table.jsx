import { useEffect, useState } from "react";
import AddUser from "./AddUser";
import EditUser from "./EditUser";
import { AiOutlinePlusCircle } from "react-icons/ai";
import CrudOperation from "../services/CrudOperation";
import UserRow from "./UserRow";
import toast from "react-hot-toast";

const Table = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openAddUser, setOpenAddUser] = useState(false);
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const data = await CrudOperation.getAllUsers();
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler = async (id) => {
    await CrudOperation.deleteUser(id);
    toast.success("User Deleted Successfully");
    getUsers();
  };

  const userIdHandler = (id) => {
    setUserId(id);
  };

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
            className="bg-white py-3 px-8 rounded flex items-center gap-2 font-bold group"
            onClick={() => {
              setOpenAddUser(!openAddUser);
              setOpenModal(false);
            }}
          >
            {" "}
            Add New User{" "}
            <AiOutlinePlusCircle
              size={20}
              className="group-hover:scale-125 duration-500 group-hover:text-green-700"
            />
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
                Edit User
              </th>
              <th scope="col" className="px-6 py-3">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <UserRow
                key={user.id}
                setOpenModal={setOpenModal}
                setOpenAddUser={setOpenAddUser}
                user={user}
                index={index}
                deleteHandler={deleteHandler}
                getUserId={userIdHandler}
              />
            ))}
          </tbody>
        </table>
      </div>
      <EditUser
        openModal={openModal}
        setOpenModal={setOpenModal}
        id={userId}
        setUserId={setUserId}
        getUsers={getUsers}
      />
      <AddUser
        openAddUser={openAddUser}
        setOpenAddUser={setOpenAddUser}
        getUsers={getUsers}
      />
    </>
  );
};

export default Table;
