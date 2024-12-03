import React, { useState } from "react";

const Users = () => {
  const [filterEmail, setFilterEmail] = useState("");
  const [filterNumber, setFilterNumber] = useState("");
  const [filterGroup, setFilterGroup] = useState("");

  const handleFilterEmail = (e) => {
    setFilterEmail(e.target.value);
  };
  const handleFilterNumber = (e) => {
    setFilterNumber(e.target.value);
  };
  const handleFilterGroup = (e) => {
    setFilterGroup(e.target.value);
  };

  // clear btn
  const handleClearFilter = (e) => {
    setFilterEmail("");
    setFilterNumber("");
    setFilterGroup("");
  };
  return (
    <section className="mx-6">
      {/* filter system */}
      <section className="mb-12 ">
        <h2 className="text-3xl capitalize font-medium py-3 text-primary  ">
          filter
        </h2>
        <div className="flex items-center justify-between ">
          <input
            className="border px-2 py-2 rounded-md w-[20rem] "
            type="email"
            placeholder="email"
            value={filterEmail}
            onChange={handleFilterEmail}
          />
          <input
            className="border px-2 py-2 rounded-md w-[20rem] "
            type="number"
            placeholder="mobile"
            value={filterNumber}
            onChange={handleFilterNumber}
          />
          <select
            className="border px-2 py-2 rounded-md"
            value={filterGroup}
            onChange={handleFilterGroup}
          >
            <option value="">select group</option>
            <option value="manager">manager</option>
            <option value="modarator">modarator</option>
            <option value="admin">admins</option>
          </select>
          <div className="flex items-center gap-3">
            <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Filter
            </button>
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded"
              onClick={handleClearFilter}
            >
              Clear
            </button>
          </div>
        </div>
      </section>
      {/* user List */}
      <section>
        <div className="border-b-2 outline-offset-8 py-3 flex justify-between items-center ">
          <h2 className="text-3xl capitalize font-medium py-3 text-primary  ">
            Users
          </h2>
          <div className="flex items-center gap-3">
            <button>delete</button>
            <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              add user
            </button>
            <button>update</button>
          </div>
        </div>
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th>Name</th>
                  <th>Job</th>
                  <th>Favorite Color</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Hart Hagerty</div>
                        <div className="text-sm opacity-50">United States</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Zemlak, Daniel and Leannon
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      Desktop Support Technician
                    </span>
                  </td>
                  <td>Purple</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
                {/* row 2 */}
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Brice Swyre</div>
                        <div className="text-sm opacity-50">China</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Carroll Group
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      Tax Accountant
                    </span>
                  </td>
                  <td>Red</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
                {/* row 3 */}
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src="https://img.daisyui.com/images/profile/demo/4@94.webp"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Marjy Ferencz</div>
                        <div className="text-sm opacity-50">Russia</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Rowe-Schoen
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      Office Assistant I
                    </span>
                  </td>
                  <td>Crimson</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
                {/* row 4 */}
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src="https://img.daisyui.com/images/profile/demo/5@94.webp"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Yancy Tear</div>
                        <div className="text-sm opacity-50">Brazil</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Wyman-Ledner
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      Community Outreach Specialist
                    </span>
                  </td>
                  <td>Indigo</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
              </tbody>
              {/* foot */}
              <tfoot>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Job</th>
                  <th>Favorite Color</th>
                  <th></th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Users;
