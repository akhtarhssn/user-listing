import { useEffect, useState } from "react";
import CrudOperation from "../services/CrudOperation";
import toast from "react-hot-toast";

const EditUser = ({ openModal, setOpenModal, id, setUserId, getUsers }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    city: "",
    employment: "",
  });

  useEffect(() => {
    if (id !== undefined && id !== "") {
      const handleUserData = async () => {
        try {
          const userData = await CrudOperation.getUserById(id);
          setUser(userData.data());
        } catch (err) {
          toast.error(err.message);
        }
      };
      handleUserData();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const department = form.department.value;
    const city = form.city.value;
    const employment = form.employment.value;

    const formData = {
      name,
      email,
      phone,
      department,
      city,
      employment,
    };

    if (id !== undefined && id !== "") {
      try {
        await CrudOperation.updateUser(id, formData);
        toast.success("User Updated Successfully");
        form.reset();
        setOpenModal(false);
        setUserId("");

        getUsers();
      } catch (err) {
        toast.error(err.message);
      }
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 w-screen bg-opacity-50 bg-gray-700 ${
        openModal
          ? "fade-in-top-slow active z-50"
          : "fade-out-top-slow active -z-20"
      }`}
    >
      <div className="relative max-w-2xl mx-auto h-screen flex items-center justify-center">
        {/* Modal content  */}
        <form
          onSubmit={handleSubmit}
          className="relative bg-white rounded-lg shadow dark:bg-gray-700"
        >
          {/* Modal header  */}
          <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Update a User
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="editUserModal"
              onClick={() => setOpenModal(false)}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* Modal body  */}
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Bonnie"
                  required={true}
                  defaultValue={user.name}
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="example@company.com"
                  required={true}
                  defaultValue={user.email}
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone Number
                </label>
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="e.g. +(12)3456 789"
                  required={true}
                  defaultValue={user.phone}
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="department"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Department
                </label>
                <input
                  type="text"
                  name="department"
                  id="department"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Development"
                  required={true}
                  defaultValue={user.department}
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="city"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="123456"
                  required={true}
                  defaultValue={user.city}
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="employment"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Employment Status
                </label>
                <select
                  id="employment"
                  name="employment"
                  required={true}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => {
                    setUser({ ...user, employment: e.target.value });
                  }}
                  value={user.employment}
                >
                  <option disabled>Choose an option</option>
                  <option value="Employed">Employed</option>
                  <option value="Unemployed">Unemployed</option>
                  <option value="Freelancer">Freelancer</option>
                </select>
              </div>
            </div>
          </div>
          {/* Modal footer */}
          <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Update Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
