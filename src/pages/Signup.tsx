import React, { useState } from "react";

const Signup: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signing up user with email:", email);
    setEmail("");
  };

  return (
    <div className="h-screen w-screen flex flex-col md:flex-row">
      {/* Left: Signup Form (with Background Image in Mobile) */}
      <div
        className="relative w-full md:w-1/2 flex justify-center items-center p-6 bg-cover bg-center md:bg-none h-full"
        style={{ backgroundImage: "url('/background-pattern.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50 md:hidden"></div>{" "}
        {/* Dark overlay for readability on mobile */}
        <div className="relative z-10 max-w-md w-full bg-white/80 md:bg-white p-6 rounded-md shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            Create an Account
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Input */}
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Sign Up
            </button>

            {/* Social Media Signup Buttons */}
            <div className="flex gap-4 justify-center">
              <button className="flex-1 bg-blue-700 text-white py-3 px-4 rounded-md hover:bg-blue-800 transition duration-300">
                Sign Up with Facebook
              </button>
              <button className="flex-1 bg-red-600 text-white py-3 px-4 rounded-md hover:bg-red-700 transition duration-300">
                Sign Up with Google
              </button>
            </div>

            {/* Forgot Password Link */}
            <div className="text-center mt-2">
              <a href="#" className="text-blue-600 hover:underline">
                Forgot Password?
              </a>
            </div>

            {/* Terms and Conditions */}
            <p className="text-xs text-gray-500 text-center mt-4">
              By signing up, you agree to our{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Terms & Conditions
              </a>
              .
            </p>
          </form>
        </div>
      </div>

      {/* Right: Background Image (Hidden on Mobile) */}
      <div className="hidden md:block w-1/2 h-full bg-black">
        <img
          src="/background-pattern.png"
          alt="Company Background"
          className="object-cover w-full h-full opacity-80"
        />
      </div>
    </div>
  );
};

export default Signup;
