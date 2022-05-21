import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import TextareaAutosize from "react-textarea-autosize";
import { useDispatch, useSelector } from "react-redux";
import { Fragment } from "react";
import { CameraIcon, XIcon } from "@heroicons/react/outline";
import { editUserProfile } from "../../features/users/userSlice";

export const EditProfileModal = ({
  isEditModalOpen,
  setIsEditModalOpen,
  profileData,
}) => {
  const [editProfileData, setEditProfileData] = useState({
    bio: profileData?.bio,
    portfolio: profileData?.portfolio,
  });

  const [uploadImgFile, setUploadImgFile] = useState("");
  const dispatch = useDispatch();
  const { token } = useSelector(state => state.auth);

  const saveProfileDataHandler = () => {
    if (uploadImgFile) {
      const file = uploadImgFile;
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (reader.readyState === 2) {
          dispatch(
            editUserProfile({
              userData: {
                bio: editProfileData.bio,
                portfolio: editProfileData.portfolio,
                avatar: reader.result,
              },
              token,
            })
          );
        }
      };
    } else {
      dispatch(
        editUserProfile({
          userData: {
            bio: editProfileData.bio,
            portfolio: editProfileData.portfolio,
          },
          token,
        })
      );
    }

    setIsEditModalOpen(false);
  };

  return (
    <Transition.Root show={isEditModalOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-50 inset-0 pt-8"
        onClose={setIsEditModalOpen}
      >
        <div className="flex items-start justify-center min-h-[800px] sm:min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
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
            <div className="inline-block align-bottom bg-[#151F2B] rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="flex items-center justify-between px-1.5 py-3 border-b border-gray-700">
                <div className="flex items-center">
                  <div
                    className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0"
                    onClick={() => setIsEditModalOpen(false)}
                  >
                    <XIcon className="h-[22px] text-white" />
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-[#d9d9d9] pl-4">
                    Edit Profile
                  </h2>
                </div>
                <button
                  className="mr-2 bg-[#EFF3F4] hover:bg-[#e0e0e0] text-black rounded-full text-sm font-bold py-1.5 px-3.5"
                  onClick={saveProfileDataHandler}
                >
                  Save
                </button>
              </div>
              {/* form */}
              <div className="px-4 pt-5 pb-6 sm:px-4">
                <div className="relative max-w-fit">
                  {profileData?.avatar !== "" || uploadImgFile !== "" ? (
                    <img
                      src={
                        uploadImgFile
                          ? URL.createObjectURL(uploadImgFile)
                          : profileData.avatar
                      }
                      alt="avatar"
                      className="h-[120px] w-[120px] bg-gray-700 rounded-full opacity-70 border-4 border-[#151F2B]"
                    />
                  ) : (
                    <div className="h-[120px] w-[120px] bg-gray-700 rounded-full border-4 border-[#151F2B]">
                      <h4 className="w-full h-full flex items-center justify-center text-3xl text-white font-bold">
                        AK
                      </h4>
                    </div>
                  )}
                  <label htmlFor="file-input">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 sm:h-10 sm:w-10 rounded-full bg-gray-800 opacity-60 shadow-lg flex items-center justify-center cursor-pointer hover:opacity-50">
                      <CameraIcon className="w-6 h-6 text-white" />

                      <input
                        type="file"
                        id="file-input"
                        hidden
                        placeholder="Update Bio"
                        onChange={e => setUploadImgFile(e.target.files[0])}
                      />
                    </div>
                  </label>
                </div>
                <div className="pt-4">
                  <TextareaAutosize
                    minRows="1"
                    value={editProfileData.bio}
                    onChange={e =>
                      setEditProfileData({
                        ...editProfileData,
                        bio: e.target.value,
                      })
                    }
                    placeholder="Bio"
                    className="p-2 bg-transparent h-auto outline-none border-b border-gray-700 text-white placeholder-gray-500 tracking-wide w-full rounded"
                  />
                  <input
                    type="text"
                    value={editProfileData.portfolio}
                    onChange={e =>
                      setEditProfileData({
                        ...editProfileData,
                        portfolio: e.target.value,
                      })
                    }
                    placeholder="Website"
                    className="p-2 bg-transparent h-auto outline-none border border-gray-700 text-white placeholder-gray-500 tracking-wide w-full rounded"
                  />
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
