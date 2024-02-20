import React from "react";

export default function Login() {
  return (
    <>
      <div class="flex h-screen flex-col lg:flex-row">
        {/* <!-- Left half: Image --> */}
        <div class="flex bg-[url('https://images.pexels.com/photos/1585325/pexels-photo-1585325.jpeg')] bg-cover opacity-30 sm:flex-[.7] lg:flex-1"></div>

        {/* <!-- Right half: Content --> */}
        <div class="flex items-center justify-center p-6 sm:flex-1 lg:flex-1">
          <div className="card w-full max-w-sm shrink-0 bg-cyan-200 bg-opacity-10 shadow-2xl">
            <form className="card-body">
            <div className="text-center">
              <h1 className="text-5xl font-bold">Login</h1>
            </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="link-hover link label-text-alt">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
