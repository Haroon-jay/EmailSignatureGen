import React from "react";
// import Right from '../../../Images/Captureone.png'
import { AiFillRightCircle } from "react-icons/ai";
import { CgMoreVerticalAlt } from "react-icons/cg";
import Footer from "../../Footer/Footer";

const User = () => {
  return (
    <main className="">
      <table className="rounded-t-lg  w-5/6 mx-auto bg-gray-200 text-gray-800">
        <tr className="text-left border-b-2 border-gray-300">
          <th className="px-4 py-3  text-gray-400">Username</th>
          <th className="px-4 py-3 text-gray-400">Email</th>
          <th className="px-4 py-3 text-gray-400">First Name</th>
          <th className="px-4 py-3 text-gray-400">Last Name</th>
          <th className="px-4 py-3 text-gray-400">Enabled</th>
        </tr>
        <tr className="bg-gray-100 border-b-2 border-gray-200">
          <td className="px-4 py-6 text-lg font-semibold">Kobalad</td>
          <td className="px-4 py-6 text-lg font-semibold">Kobalad@gmail.com</td>
          <td className="px-4 py-6 text-lg font-semibold">Koba</td>
          <td className="px-4 py-6 text-lg font-semibold">Lad</td>
          <td className="px-4 py-6 text-lg font-semibold">
            <AiFillRightCircle />
          </td>
          <td className="px-4 py-6 text-lg font-semibold">
            <CgMoreVerticalAlt />
          </td>
        </tr>
        <tr className="bg-gray-100 border-b border-gray-200">
          <td className="px-4 py-6 text-lg font-semibold">Kobalad</td>
          <td className="px-4 py-6 text-lg font-semibold">Kobalad@gmail.com</td>
          <td className="px-4 py-6 text-lg font-semibold">Koba</td>
          <td className="px-4 py-6 text-lg font-semibold">Lad</td>
          <td className="px-4 py-6 text-lg font-semibold">
            <AiFillRightCircle />
          </td>
          <td className="px-4 py-6 text-lg font-semibold">
            <CgMoreVerticalAlt />
          </td>
        </tr>
        <tr className="bg-gray-100 border-b border-gray-200">
          <td className="px-4 py-6 text-lg font-semibold">Kobalad</td>
          <td className="px-4 py-6 text-lg font-semibold">Kobalad@gmail.com</td>
          <td className="px-4 py-6 text-lg font-semibold">Koba</td>
          <td className="px-4 py-6 text-lg font-semibold">Lad</td>
          <td className="px-4 py-6 text-lg font-semibold">
            <AiFillRightCircle />
          </td>
          <td className="px-4 py-6 text-lg font-semibold">
            <CgMoreVerticalAlt />
          </td>
        </tr>
        <tr className="bg-gray-100 border-b border-gray-200">
          <td className="px-4 py-6 text-lg font-semibold">Kobalad</td>
          <td className="px-4 py-6 text-lg font-semibold">Kobalad@gmail.com</td>
          <td className="px-4 py-6 text-lg font-semibold">Koba</td>
          <td className="px-4 py-6 text-lg font-semibold">Lad</td>
          <td className="px-4 py-6 text-lg font-semibold">
            <AiFillRightCircle />
          </td>
          <td className="px-4 py-6 text-lg font-semibold">
            <CgMoreVerticalAlt />
          </td>
        </tr>
        <tr className="bg-gray-100 border-b border-gray-200">
          <td className="px-4 py-6 text-lg font-semibold">Kobalad</td>
          <td className="px-4 py-6 text-lg font-semibold">Kobalad@gmail.com</td>
          <td className="px-4 py-6 text-lg font-semibold">Koba</td>
          <td className="px-4 py-6 text-lg font-semibold">Lad</td>
          <td className="px-4 py-6 text-lg font-semibold">
            <AiFillRightCircle />
          </td>
          <td className="px-4 py-6 text-lg font-semibold">
            <CgMoreVerticalAlt />
          </td>
        </tr>
      </table>
      <footer className="mt-56">
        <Footer />
      </footer>
    </main>
  );
};

export default User;
