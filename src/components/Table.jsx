import { useState } from "react";
import EditUser from "./EditUser";

const Table = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg lg:rounded-none max-w-7xl mx-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
                City
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
              <th
                scope="row"
                className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div>
                  <div className="text-base font-semibold">Bonnie Green</div>
                  <div className="font-normal text-gray-500">
                    Graphic Designer
                  </div>
                </div>
              </th>
              <td className="px-6 py-4">bonnie@flowbite.com</td>
              <td className="px-6 py-4">+88 01568713080</td>
              <td className="px-6 py-4">
                <p>New York</p>
              </td>
              <td
                className="px-6 py-4"
                onClick={() => setOpenModal(!openModal)}
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
          </tbody>
        </table>
      </div>
      <EditUser openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
};

export default Table;
