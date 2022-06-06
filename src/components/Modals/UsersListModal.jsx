import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { XIcon } from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import { setUsersListModal } from "../../features/users/userSlice";
import { Avatar } from "../Avatar/Avatar";

export const UsersListModal = ({ divRef }) => {
  const { usersListModal } = useSelector(state => state.users);
  const dispatch = useDispatch();

  return (
    <Transition.Root show={usersListModal.open} as={Fragment}>
      <Dialog
        as="div"
        initialFocus={divRef}
        className="fixed z-50 inset-0 pt-8"
        onClose={() => dispatch(setUsersListModal({ open: false, data: [] }))}
      >
        <div className="flex items-center justify-center min-h-[800px] sm:min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-[#5b7083] bg-opacity-40 transition-opacity" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-[#151F2B] rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-full sm:max-w-md sm:w-full">
              <div className="flex items-center px-1.5 py-2 border-b border-gray-700">
                <div
                  className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0"
                  onClick={() =>
                    dispatch(setUsersListModal({ open: false, data: [] }))
                  }
                >
                  <XIcon className="h-[22px] text-white" />
                </div>
                <h4 className="font-bold text-colorgray-100 text-lg pl-3">
                  {usersListModal.title}
                </h4>
              </div>
              <div className="py-3">
                {usersListModal.data?.length === 0 ? (
                  <div className="flex items-center justify-center text-gray-400">
                    No User Found.
                  </div>
                ) : (
                  usersListModal.data?.map((users, id) => {
                    return (
                      <div
                        key={id}
                        className="hover:bg-white hover:bg-opacity-[0.02] px-3 py-3 cursor-pointer transition duration-200 ease-out flex items-center"
                      >
                        <Avatar
                          avatarImg={users?.avatar}
                          firstname={users?.firstName}
                          lastname={users?.lastName}
                        />

                        <div className="ml-4 leading-5 group">
                          <h4 className="font-bold hover:underline text-colorgray-100">
                            {users?.firstName} {users?.lastName}
                          </h4>

                          <h5 className="text-gray-500 text-[15px]">
                            @{users?.username}
                          </h5>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
