import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DropdownUser from "../dropdown_user/dropdown.user";
import { Button } from "bootstrap";
import useObservable from "../../../core/hooks/useObservable.hooks";
import { getCategory } from "../../../services/public/category.service";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [flyer, setFlyer] = useState(false);
  const [flyerTwo, setFlyerTwo] = useState(false);
  const [listCate, setListCate] = useState([]);
  let user = localStorage.getItem("user");
  const { subscribeOnce } = useObservable();
  const navigate = useNavigate();
  useEffect(() => {
    getAllCategory();
  }, []);

  const getAllCategory = () => {
    subscribeOnce(getCategory(), (res) => {
      if (!res) return;
      setListCate(res.data);
    });
  };
  const navigateToStore = (id) => {
    console.log("run");
    localStorage.setItem("categoryId", id);
    navigate("/post");
  };

  if (user)
    try {
      user = JSON.parse(user);
    } catch (error) {
      console.error("Error parsing user:", error);
    }
  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/">
              <span className="sr-only"></span>
              <p className="text-3xl sm:text-4xl font-semibold">Bae Shoezy</p>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setOpen(!open)}
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            <Link
              to="/post"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Post
            </Link>
            <div className="relative">
              <button
                type="button"
                className="
                     group bg-white rounded-mdT text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 pb-8'
                    "
                onClick={() => {
                  setFlyer(!flyer);
                  setFlyerTwo(false);
                }}
              >
                <span>Categories</span>
                <svg
                  className={
                    flyer === true
                      ? "transform rotate-180 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 transition ease-out duration-200"
                      : "hidden transform rotate-0 transition ease-out duration-200 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                  }
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div
                onMouseLeave={() => setFlyer(false)}
                className={
                  flyer
                    ? " opacity-100 translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                    : " hidden translate-y-1 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                }
              >
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    {listCate.map((cate, index) => (
                      <div
                        onClick={() => navigateToStore(cate._id)}
                        key={index}
                        className="cursor-pointer -m-3 p-3 flex items-start rounded-lg hover:bg-gray-400"
                      >
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            {cate.name}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link
              to="/About"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              About Us
            </Link>
            <Link
              to="/Contact"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Contact me
            </Link>
            <div className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
              <Link
                to="/admin"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Dashboard
              </Link>
            </div>
            {user ? (
              <>
                <div className="whitespace-nowrap text-base font-medium hover:text-gray-900">
                  <button className="w-full px-4 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4">
                    <Link
                      to="/posts/create"
                      className="text-base font-medium text-white hover:text-gray-900"
                    >
                      Create Post
                    </Link>
                  </button>
                </div>
                <div className="whitespace-nowrap text-base font-medium hover:text-gray-900">
                  <button className="w-full px-4 text-lg font-semibold text-white transition-colors duration-300 bg-yellow-500 rounded-md shadow hover:bg-yellow-600 focus:outline-none focus:ring-blue-200 focus:ring-4">
                    <Link
                      to="/admin/post-review"
                      className="text-base font-medium text-white hover:text-gray-900"
                    >
                      Review posts
                    </Link>
                  </button>
                </div>
              </>
            ) : (
              <></>
            )}
            {/* <div className="relative">
              <button
                onMouseEnter={() => setShowCart(true)}
                type="button"
                className="group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span>
                  <Link
                    to="/shopping-cart"
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                  ></Link>
                </span>
              </button>
              <div
                onMouseLeave={() => setShowCart(false)}
                className={
                  showCart
                    ? " opacity-100 translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                    : " hidden translate-y-1 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                }
              >
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    {cart?.cartItems && cart?.cartItems.length > 0 ? (
                      cart?.cartItems.map((item, index) => (
                        <span
                          key={index}
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                        >
                          <CartShopping item={item} isHover={true} />
                        </span>
                      ))
                    ) : (
                      <span className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"></span>
                    )}
                  </div>
                </div>
              </div>
            </div> */}
          </nav>

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            {user ? (
              <>
                <DropdownUser user={user} />
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
      <div
        className={
          open
            ? "opacity-100 scale-100 ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        }
      >
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt="Workflow"
                />
              </div>
              <div className="-mr-2">
                <button
                  type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  onClick={() => setOpen(!open)}
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-8">
                <Link
                  to="/"
                  className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  <span className="ml-3 text-base font-medium text-gray-900">
                    Analytics
                  </span>
                </Link>
                <Link
                  to="/"
                  className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                    />
                  </svg>
                  <span className="ml-3 text-base font-medium text-gray-900">
                    Engagement
                  </span>
                </Link>
                <Link
                  to="/"
                  className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <span className="ml-3 text-base font-medium text-gray-900">
                    Security
                  </span>
                </Link>
                <Link
                  to="/"
                  className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                  <span className="ml-3 text-base font-medium text-gray-900">
                    Integrations
                  </span>
                </Link>
                <Link
                  to="/"
                  className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                  <span className="ml-3 text-base font-medium text-gray-900">
                    Automations
                  </span>
                </Link>
              </nav>
            </div>
          </div>
          <div className="py-6 px-5 space-y-6">
            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
              <Link
                to="/"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Pricing
              </Link>
              <Link
                to="/"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Docs
              </Link>
              <Link
                to="/"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Enterprise
              </Link>
              <Link
                to="/"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Blog
              </Link>
              <Link
                to="/"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Help Center
              </Link>
              <Link
                to="/"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Guides
              </Link>
              <Link
                to="/"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Security
              </Link>
              <Link
                to="/"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Events
              </Link>
            </div>
            <div>
              <Link
                to="/"
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Sign up
              </Link>
              <p className="mt-6 text-center text-base font-medium text-gray-500">
                Existing customer?
                <Link to="/" className="text-indigo-600 hover:text-indigo-500">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
