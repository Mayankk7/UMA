import React, { useState } from 'react';
import { FaUserEdit, FaUserMinus } from 'react-icons/fa';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import {FcCancel} from 'react-icons/fc';
import { v4 as uuidv4 } from 'uuid';


const AdderCard = ({handleAddUser,setAddNew}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = {};

    if (name.trim() === '') {
      formErrors.name = 'Name is required';
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      formErrors.email = 'Invalid email format';
    }

    if (!/^\d{10}$/.test(phone)) {
      formErrors.phone = 'Phone number must be 10 digits';
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    const newContact = {
      name,
      email,
      phone,
      id: uuidv4()
    };

    handleAddUser(newContact);

    setName('');
    setEmail('');
    setPhone('');
    setErrors({});
  };

  return (
    <div className="bg-card mb-4 md:mb-8 text-center block cursor-pointer rounded-lg h-fit md:w-[20vw] w-[80vw] justify-evenly bg-white p-6 transform scale-100 hover:scale-105 transition duration-300">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-b text-sm md:text-md  border-gray-300 rounded-md p-1 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex flex-row justify-center mb-4">
          <AiOutlineMail className="mt-1 mr-2" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-b border-gray-300 rounded-md text-sm md:text-md p-1 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex flex-row justify-center mb-4">
          <AiOutlinePhone className="mt-1 mr-2" />
          <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border-b border-gray-300 text-sm md:text-md rounded-md p-1 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className='flex flex-row m-auto justify-evenly'>
        <button
        type="submit"
        className="font-medium bg-teal-500 hover:bg-teal-600 font-roboto text-white py-2 px-4 rounded"
      >
        Add User
      </button>
      <button className="font-medium border-2 hover:bg-[#FF6A7D] font-roboto text-white py-2 px-4 rounded"
        onClick={()=>{setAddNew(false)}}
      >
         <FcCancel size={20}/>
      </button>
        </div>
      </form>
    </div>
  );
};

export default AdderCard;
