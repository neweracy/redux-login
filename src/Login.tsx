import * as react from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/counter/counterSlice";

const Login = () => {
  const [name, setName] = react.useState("");
  const [password, setPassword] = react.useState("");
  const [email, setEmail] = react.useState("");

  const dispatch = useDispatch();
  const handleSubmit = (ee: react.FormEvent<HTMLFormElement>) => {
    ee.preventDefault();

    dispatch(
      login({
        name: name,
        email: email,
        password: password,
        loggedIn: true,
      })
    );
  };

  return (
    <div className="">
      <div id="Nav" className=""></div>
      <div
        id="App"
        className="flex flex-col items-center justify-center h-screen "
      >
        <div
          id="Body"
          className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-xl dark:bg-gray-800"
        >
          <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
            Account settings
          </h2>

          <form onSubmit={(ee) => handleSubmit(ee)} action="">
            <div className=" grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  type="text"
                  placeholder="Username.."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="emailAddress"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder=" Email Address.. "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className=" block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>
            <div className="mt-2">
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                placeholder=" Password.."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className=" block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div className="flex justify-end mt-6">
              <button
                type="submit"
                className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              >
                {" "}
                Submit
                {""}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
