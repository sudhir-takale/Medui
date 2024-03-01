import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import "./dashboard.css";
import Footer from "./Footer";


const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
  { name: "Reports", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dashboard() {
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-gray-900 text-white"
                                : "text-gray-300 hover:bg-gray-700 hover:text-white",
                              "rounded-md px-3 py-2 text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <button
                        type="button"
                        className="relative roundme bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="relative flex max-w-xs items-center roundme bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-8 w-8 roundme"
                              src={user.imageUrl}
                              alt=""
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 roundme"
                        src={user.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium leading-none text-gray-400">
                        {user.email}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="relative ml-auto flex-shrink-0 roundme bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <header
          className="bg-white shadow relative"
          style={{
            backgroundImage:
              'url("https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "420px",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div
            className="absolute inset-0 mt-5 items-center justify-center text-white "
            style={{ textAlign: "center" }}
          >
            <h1 className="text-4xl font-bold">Smile Brighter </h1>
            <h1 className="text-4xl font-bold">Live Better </h1>
            <p
              className="ml-2"
              style={{
                marginLeft: "23px",
                fontSize: "16px",
                // width: "123px",
                textAlign: "center",
              }}
            >
              At dentflex, we believe in the transformative power of a healthy
              smile. Nestled in the heart of [Your City], our clinic is
              dedicated to providing exceptional dental care in a warm and
              welcoming environment.
              <br /> We believe in individualized care plans tailored to your
              unique oral health requirements.
              <br /> From routine check-ups to complex procedures, our team
              ensures that each patient receives the attention they deserve.
            </p>
            <br />

            <a
              style={{
                fontSize: "16px",
                textAlign: "center",
                textDecoration: "none",
                fontWeight: "bold",
              }}
              href="/your-link"
              className="bg-blue-500 text-white px-4 py-2 mt-4 inline-block"
            >
              Book Appointment
            </a>
          </div>
        </header>
        <main
          className="cards"
          style={{ position: "relative", zIndex: 1, marginTop: "-66px" }}
        >
          <div className="mx-auto max-w-7xl py-6 sm:px-2 lg:px-3 cards">
            <section className="bg-gray-2 pb-10 pt-0 dark:bg-dark lg:pb-20 lg:pt-[120px]">
              <div className="container">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  <SingleCard
                    image="https://i.ibb.co/r2zns1m/image-01.jpg"
                    // CardTitle="50+ Best creative website themes & templates"
                    titleHref="/dsfd"
                    btnHref="/dslkafd"
                    Button="View Details"
                  />
                  <SingleCard
                    image="https://i.ibb.co/0nbbWM9/image-02-1.jpg"
                    // CardTitle="Creative Card Component designs graphic elements"
                    titleHref="/#"
                    btnHref="/#"
                    Button="View Details"
                  />
                  <SingleCard
                    image="https://i.ibb.co/dL9fH7N/image-03-1.jpg"
                    // CardTitle="The ultimate UX and UI guide to card design"
                    titleHref="/#"
                    btnHref="/#"
                    Button="View Details"
                  />
                </div>
              </div>
            </section>
          </div>
        </main>
        <div
          className="bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=")',
            height: "500px",
          }}
        >
          <div className="flex items-center mx-5 h-full">
            <div className=" p-8 rounded-md ">
              <h2 className="text-3xl font-semibold mb-3 ">
                Book an Appointment
              </h2>
              <form>
                <div className="mb-2">
                  <label className="block text-white-600">Enter you Name</label>

                  <input
                    type="text"
                    placeholder="Enter you Name"
                    className="w-full border-b-2 border-gray-400  roundme focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="flex mb-2">
                  <div className="mr-2">
                    <label className="block text-gray-600">Input 1</label>
                    <input
                      type="text"
                      className="w-full border-b-2 roundme border-gray-400 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div className="ml-2">
                    <label className="block text-gray-600">Input 2</label>
                    <input
                      type="text"
                      className="w-full border-b-2 roundme border-gray-400 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="flex mb-2">
                  <div className="mr-2">
                    <label className="block text-gray-600">Input 3</label>
                    <input
                      type="text"
                      className="w-full border-b-2 roundme border-gray-400 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div className="ml-2">
                    <label className="block text-gray-600">Input 4</label>
                    <input
                      type="text"
                      className="w-full border-b-2 roundme  border-gray-400 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="flex mb-2">
                  <div className="mr-2">
                    <label className="block text-gray-600">Input 5</label>
                    <input
                      type="text"
                      className="w-full border-b-2 roundme border-gray-400 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div className="ml-2">
                    <label className="block text-gray-600">Input 6</label>
                    <input
                      type="text"
                      className="w-full border-b-2 roundme border-gray-400 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="mb-2">
                  <label className="block text-gray-600">Enter Notes</label>
                  <input
                    type="text"
                    placeholder="Enter A Note if Any"
                    className="w-full border-b-2 border-gray-400 roundme focus:outline-none focus:border-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 block mx-auto roundmee text-center hover:bg-primary-700 focus:outline-none focus:shadow-outline-blue"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

// export default Card;
const SingleCard = ({
  image,
  Button,
  CardDescription,
  CardTitle,
  titleHref,
  btnHref,
}) => {
  return (
    <>
      <a
        href={titleHref ? titleHref : "#"}
        className="block mb-10 overflow-hidden rounded-lg bg-white shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3"
      >
        <img src={image} alt="" className="w-full" />
        <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
          {Button && (
            <span className="inline-block roundme border border-gray-3 px-7 py-2 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-dark-6 text-decoration:none    ">
              {Button}
            </span>
          )}
        </div>
      </a>
    </>
  );
};
