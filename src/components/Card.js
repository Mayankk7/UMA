import React, { useEffect, useState } from 'react';
import { FaUserEdit, FaUserMinus } from 'react-icons/fa';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';


const Card = ({ users,setUsers,name,id, email, phone, handleDeleteUser, handleSaveUser }) => {
  const [editedName, setEditedName] = useState(name);
  const [editedEmail, setEditedEmail] = useState(email);
  const [editedPhone, setEditedPhone] = useState(phone);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    const updated = {
      id:id,
      name:editedName,
      email:editedEmail,
      phone:editedPhone
    }
    //handleSaveUser(updated)
    console.log(updated)
    const updatedUsers = users.map((user) =>
      user.id === updated.id ? updated : user
    );
    console.log("user saved")
    setUsers(updatedUsers);
    setEditedName(name);
    setEditedEmail(email);
    setEditedPhone(phone);
    setIsEditing(false);
  };

  const handleCancel = () => {

    setEditedName(name);
    setEditedEmail(email);
    setEditedPhone(phone);

    setIsEditing(false);
  };

  useEffect(()=>{},[name,email,phone])

  return (
    <div className="bg-card font-roboto mb-4 md:mb-8 text-center block cursor-pointer rounded-lg h-fit md:w-[20vw] w-[80vw] justify-evenly bg-white p-6 transform scale-100 hover:scale-105 transition duration-300">
      {isEditing ? 
        <>
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            className="mb-2 border-b-2 focus:outline-none focus:border-black uppercase text-md md:text-xl font-medium overflow-hidden leading-tight text-neutral-800"
          />
          <div className="flex flex-row justify-center">
            <AiOutlineMail className="mt-1 mr-2" />
            <input
              type="email"
              value={editedEmail}
              onChange={(e) => setEditedEmail(e.target.value)}
              className="mb-4 border-b-2 focus:outline-none focus:border-black text-sm md:text-md text-neutral-600"
            />
          </div>
          <div className="flex flex-row justify-center">
            <AiOutlinePhone className="mt-1 mr-2" />
            <input
              type="text"
              value={editedPhone}
              onChange={(e) => setEditedPhone(e.target.value)}
              className="mb-4 text-base border-b-2 focus:outline-none focus:border-black text-neutral-600"
            />
          </div>
          <div className="flex flex-row m-auto justify-evenly">
            <button
              type="button"
              onClick={()=>handleSave()}
              className="inline-block text-black hover:text-white border-2 rounded bg-1 bg-white px-4 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800"
            >
              Save
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="inline-block border-2 text-black hover:text-white rounded bg-1 bg-white px-4 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-[#FF6A7D] focus:outline-red-600 focus:outline-none focus:ring-0 active:outline-red-700"
            >
              Cancel
            </button>
          </div>
        </>
       : 
        <>
          <h5 className="mb-2 capitalize text-md md:text-2xl font-bold overflow-hidden leading-tight text-neutral-800">
            {name}
          </h5>
          <div className="flex flex-row justify-center">
            <AiOutlineMail className="mt-1 mr-2" color="#007bff"/>
            <p className="mb-4 text-sm md:text-md text-[#007bff]">{email}</p>
          </div>
          <div className="flex flex-row justify-center">
            <AiOutlinePhone className="mt-1 mr-2" color="#ff9800" />
            <p className="mb-4 text-base text-[#ff9800]">{phone}</p>
          </div>
          <div className="flex flex-row m-auto justify-evenly">
            <button
              type="button"
              onClick={handleEdit}
              className="inline-block border-2 rounded bg-1 bg-white px-4 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800"
            >
              <FaUserEdit size={22} color="#1E90FF" />
            </button>
            <button
              type="button"
              onClick={() => handleDeleteUser(id)} 
              className="inline-block border-2 rounded bg-1 bg-white px-4 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-[#FF6A7D] hover:text-white focus:outline-red-600 focus:outline-none focus:ring-0 active:outline-red-700"
            >
              <FaUserMinus size={22} color="#DC143C" className="" />
            </button>
          </div>
        </>
      }
    </div>
  );
};

export default Card;
