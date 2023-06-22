import React, { useEffect, useState } from 'react';
import { FaUserPlus } from 'react-icons/fa';
import Card from './Card';
import AdderCard from './AdderCard';

const HomeScreen = () => {
  const [addNew, setAddNew] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log('Retrieving users from local storage...');
    const storedUsers = localStorage.getItem('users');
    console.log('Stored users:', storedUsers);
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  useEffect(() => {
    console.log('Storing users in local storage...');
    if (users !== null) {
      localStorage.setItem('users', JSON.stringify(users));
    }
  }, [users]);

  const handleAddUser = (newUser) => {
    setUsers(prevUsers => {
      const updatedUsers = [...prevUsers, newUser];
      console.log('Updated users:', updatedUsers);
      return updatedUsers;
    });
  };

  const handleSaveUser = (updatedUser) => {
    
  };

  const handleDeleteUser = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);

    setUsers(updatedUsers);
  };

  return (
    <div className=" bg-[#edeaea] mb-4  rounded-xl w-[90vw] min-h-[85vh] m-auto ">
      <div className="mt-[2vh] mr-[8vw] float-right">
        <button
          className="w-fit px-5 py-2 hover:bg-teal-500 bg-teal-400 font-roboto text-white rounded-lg flex items-center justify-center transition-colors duration-300"
          onClick={() => {
            setAddNew(true);
          }}
        >
          <div className="flex flex-row">
            <FaUserPlus size={20} className="" color="" />
            <p className="text-white pl-2 font-medium">ADD USER</p>
          </div>
        </button>
      </div>
      <div className="flex m-auto w-[80vw] flex-wrap p-6 flex-row justify-evenly mt-[10vh]">
        {addNew && <AdderCard handleAddUser={handleAddUser} setAddNew={setAddNew}/>}
        { users.length === 0 && !addNew ? <>
            <p className='text-xl uppercase underline mt-5 text-black font-roboto font-bold overflow-hidden'>No User Information Present</p>
          </>:
        <>
        </>}
        {users !== null &&
          users.map((user, id) => (
            <Card
            users={users}
            setUsers = {setUsers}
            name={user.name}
            email={user.email}
            id={user.id}
            phone={user.phone}
            handleDeleteUser={handleDeleteUser}
            handleSaveUser={handleSaveUser}
            />
          ))}
      </div>
    </div>
  );
};

export default HomeScreen;
