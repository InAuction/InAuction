import React from "react";
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { signInWithGooglePopup } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const logGoogleUser = async () => {
    try {
      const response = await signInWithGooglePopup();
      // console.log(response.user.displayName);
      const { uid, displayName, email } = response.user;

      const user = await setDoc(
        doc(db, "users", uid),
        {
          uid,
          displayName,
          email,
        },
        { merge: true },
      );

      await setDoc(doc(db, "usersChats", uid), {}, { merge: true });

      navigate("/bidding");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex h-screen flex-col lg:flex-row">
        {/* <!-- Left half: Image --> */}
        <div className="flex bg-[url('https://images.pexels.com/photos/1585325/pexels-photo-1585325.jpeg')] bg-cover opacity-40 sm:flex-[.7] lg:flex-1"></div>

        {/* <!-- Right half: Content --> */}
        <div className="flex items-center justify-center p-6 sm:flex-1 lg:flex-1">
          <div className="card w-full max-w-sm shrink-0 bg-cyan-200 bg-opacity-10 shadow-2xl">
            <form className="card-body">
              <div className="text-center">
                <h1 className="text-5xl font-bold">Login</h1>
              </div>
              <div className="text-center">
                <h1 className="text-5xl font-bold">Please Sign-in to your account</h1>
              </div>
              
              {/* <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div> */}
            </form>
            <div className="flex justify-center">
              <button
                className="btn -mt-5 mb-5 bg-cyan-400 text-neutral"
                onClick={logGoogleUser}
              >
                Login with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
