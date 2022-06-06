import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import socialMediaAnimation from "../../assets/social-media-network.json";
import { signupUser } from "../../features/auth/authSlice";

export const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [formError, setFormError] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordMatched, setIsPasswordMatched] = useState(true);
  const { firstName, lastName, email, password } = formData;

  const dispatch = useDispatch();

  const { token, isLoggedIn, authError } = useSelector(state => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (token !== "" && isLoggedIn) {
      navigate("/");
    }
  });

  const submitSignupFormData = () => {
    if (
      firstName.trim() !== "" &&
      lastName.trim() !== "" &&
      email.trim() !== "" &&
      password.trim() !== "" &&
      isPasswordMatched
    ) {
      let username = email.split("@")[0];
      dispatch(signupUser({ ...formData, username: username }));
    } else {
      setFormError("Spaces are not valid input.");
    }
  };

  return (
    <main className="min-h-screen bg-white sm:bg-gray-100 max-w-full flex flex-col lg:flex-row">
      <div className="lg:w-2/5 bg-white flex items-center justify-center md:py-6 lg:py-0">
        <Lottie
          animationData={socialMediaAnimation}
          loop={true}
          autoPlay={true}
          className="h-[280px] md:h-[380px] lg:h-[430px]"
        />
      </div>
      <div className="flex items-center justify-center w-full lg:w-3/5 sm:py-12 lg:py-0">
        <div className="bg-white w-[350px] sm:w-[450px] h-auto px-6 py-16 pt-8 sm:pt-16 rounded-xl">
          <div className="sm:w-10/12 mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center pb-8 sm:pb-12">
              Join Circle today
            </h2>
            <form
              className="flex flex-col space-y-5"
              onSubmit={e => e.preventDefault()}
            >
              {authError && <div className="text-red-500">{authError}</div>}
              {formError && <div className="text-red-500">{formError}</div>}
              <input
                type="text"
                placeholder="First name"
                required
                value={formData.firstName}
                onChange={e => {
                  setFormData({ ...formData, firstName: e.target.value });
                }}
                className="border border-gray-300 w-full p-2 rounded-[4px]"
              />
              <input
                type="text"
                placeholder="Last name"
                required
                value={formData.lastName}
                onChange={e =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                className="border border-gray-300 w-full p-2 rounded-[4px]"
              />
              <input
                type="email"
                placeholder="Email address"
                required
                value={formData.email}
                onChange={e =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="border border-gray-300 w-full p-2 rounded-[4px]"
              />
              <input
                type="password"
                placeholder="Password"
                required
                value={formData.password}
                onChange={e =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="border border-gray-300 w-full p-2 rounded-[4px]"
              />
              <label>
                <input
                  type="password"
                  placeholder="Confirm password"
                  required
                  value={confirmPassword}
                  onChange={e => {
                    setConfirmPassword(e.target.value);
                    setIsPasswordMatched(password === e.target.value);
                  }}
                  className={`border ${
                    !isPasswordMatched
                      ? "border-red-500 focus:outline-red-500"
                      : "border-gray-300"
                  } w-full p-2 rounded-[4px]`}
                />
                {!isPasswordMatched && (
                  <div className="text-red-500">Password doesn't match.</div>
                )}
              </label>
              <button
                type="submit"
                className="w-full bg-colorgray-800 hover:bg-opacity-95 text-white rounded-full py-2"
                onClick={submitSignupFormData}
              >
                Sign up
              </button>
            </form>
            <h4 className="text-center pt-8 text-gray-500">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-colorblue-100 hover:underline cursor-pointer"
              >
                Sign in
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </main>
  );
};
