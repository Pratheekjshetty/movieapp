import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const Head = 'text-xs text-left text-main font-semibold px-6 py-2 uppercase';
const Text = 'text-sm text-left leading-6 whitespace-nowrap px-5 py-3';

// Function to render rows for each cast member
const Rows = (castMember, i, users) => (
    <tr key={i}>
        {users ? (
            <>
                <td className={`${Text}`}>
                    <div className='w-12 p-1 bg-dry border border-border h-12 rounded overflow-hidden'>
                        <img className='h-full w-full object-cover' src={castMember.image ? castMember.image : "user.png"} alt={castMember.fullname} />
                    </div>
                </td>
                <td className={`${Text} font-bold`}>{"2R75T8"}</td>
                <td className={`${Text}`}>{castMember.createAt ? castMember.createAt : "12, Jan 2024"}</td>
                <td className={`${Text} truncate`}>{castMember.name}</td>
                <td className={`${Text}`}>{castMember.email}</td>
                <td className={`${Text} float-right flex-rows gap-2`}>
                    <button className='bg-red-600 text-white rounded flex-colo w-6 h-6'>
                        <MdDelete />
                    </button>
                </td>
            </>
        ) : (
            <>
                <td className={`${Text} font-bold`}>{"2R75T8"}</td>
                <td className={`${Text}`}>{castMember.createAt ? castMember.createAt : "12, Jan 2024"}</td>
                <td className={`${Text}`}>{castMember.title}</td>
                <td className={`${Text} float-right flex-rows gap-2`}>
                    <button className='border border-border bg-dry flex-rows gap-2 text-border rounded py-1 px-2'>
                        Edit <FaEdit className='text-subMain' />
                    </button>
                    <button className='bg-red-600 text-white rounded flex-colo w-6 h-6'>
                        <MdDelete />
                    </button>
                </td>
            </>
        )}
    </tr>
);

// Main Table component
const Table3 = ({ data, users }) => {
    return (
        <div className='overflow-x-scroll overflow-hidden relative w-full'>
            <table className='w-full table-auto border border-border divide-y divide-border'>
                <thead>
                    <tr className='bg-dryGray'>
                        {users ? (
                            <>
                                <th scope='col' className={`${Head}`}>Image</th>
                                <th scope='col' className={`${Head}`}>Id</th>
                                <th scope='col' className={`${Head}`}>Date</th>
                                <th scope='col' className={`${Head}`}>Name</th>
                                <th scope='col' className={`${Head}`}>Email</th>
                            </>
                        ) : (
                            <>
                                <th scope='col' className={`${Head}`}>Id</th>
                                <th scope='col' className={`${Head}`}>Date</th>
                                <th scope='col' className={`${Head}`}>Title</th>
                            </>
                        )}
                        <th scope='col' className={`${Head} text-end`}>Actions</th>
                    </tr>
                </thead>
                <tbody className='bg-main divide-y divide-gray-800'>
                    {data.map((movie, i) =>
                        movie.cast.map((castMember, j) => Rows(castMember, `${i}-${j}`, users))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Table3;