import * as react from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/counter/counterSlice";

const Logout = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogout = (ee: react.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    ee.preventDefault();
    dispatch(logout());
  };

  return (
    <div className="">
      <section className="text-gray-600 body-font overflow-hidden">
        <div className=" ">
          <div className="flex flex-wrap justify-center items-center h-screen -m-12">
            <div className="p-12 md:w-1/2 flex flex-col items-center">
              <span className="inline-block py-1 px-2 rounded bg-gray-200 text-gray-600 text-xs font-medium tracking-widest">
                {user.email}
              </span>
              <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                Welome {""} <span className=" text-indigo-500">{user.name}</span>
              </h2>
              <p className="leading-relaxed mb-8">
                Live-edge letterpress cliche, fanny pack humblebrag
                narwhal portland. VHS man braid palo santo hoodie brunch trust
                fund. Bitters hashtag waistcoat fashion axe chia unicorn. Plaid
                fixie chambray 90's, slow-carb etsy tumeric. Cray pug you
                probably haven't heard of them hexagon kickstarter craft beer
                pork chic.
              </p>
              <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                <a
                  onClick={(ee) => handleLogout(ee)}
                  className="text-gray-900 inline-flex items-center cursor-pointer hover:text-indigo-700 ease-linear "
                > 
                  Logout
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Logout;
