import { Fragment,useEffect,useState } from "react";


import axios from "axios";
import { ToastContainer, toast, Bounce } from "react-toastify";

import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import "../dashboard/dashboard.css";
import "./appointmentstats.css";
import Footer from "../../patient/Home/Footer";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Doctor_Dashboard", href: "/doctor", current: false },
  { name: "Manage Appointment", href: "/doctor/appointment-mgmt", current: false},
  { name: "Patient List", href: "/doctor/patient-list", current: false },
  { name: "Patient History", href: "/doctor/patient-history", current: false },
  { name: "Update PHR", href: "/doctor/update-phr", current: false },
  // { name: "Reports", href: "/patient/health-record", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AppointmentStats() {

  const [appointmentRequests, setAppointmentRequests] = useState(0);
  const [approvedAppointments, setApprovedAppointments] = useState(0);
  
  const [canceledAppointments, setCanceledAppointments] = useState(0);
  const [completedAppointments, setCompletedAppointments] = useState(0);
  
  const [pendingAppointments, setPendingAppointments] = useState(0);

  const [appointmentData, setAppointmentData] = useState([]);

  useEffect(() => {
    var username = localStorage.getItem("username");
  
    // Fetch data from the API endpoint when the component mounts
    axios.get(`http://localhost:8080/getAllAppointments?doctorUsername=${username}`)
      .then((response) => {
        if (response.status === 200) {
          // Set the appointment data
          setAppointmentData(response.data);
  
          // Initialize counts for different appointment statuses
          let pendingCount = 0;
          let approvedCount = 0;
          let canceledCount = 0;
          let completedCount = 0;
  
          // Iterate over the appointment data and count occurrences of each status
          response.data.forEach((appointment) => {
            switch (appointment.status) {
              case 'pending':
                pendingCount++;
                break;
              case 'Approved':
                approvedCount++;
                break;
              case 'Canceled':
                canceledCount++;
                break;
              case 'Completed':
                completedCount++;
                break;
              default:
                break;
            }
          });
  
          // Set the counts for each specific state
          setPendingAppointments(pendingCount);
          setApprovedAppointments(approvedCount);
          setCanceledAppointments(canceledCount);
          setCompletedAppointments(completedCount);
        } else if (response.status === 404) {
          console.log("No appointments found");
          setAppointmentData([]);
        } else {
          console.error("Error fetching appointments:", response.status);
        }
      })
      .catch((error) => {
        console.error("Error fetching appointments:", error);
      });
  }, []);
  


  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="hidden md:block" >
                      <div className="ml-10 flex items-baseline space-x-4 ">
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

        <div id="topnavbar">
         <div style={{ textAlign: 'center', margin: '20px 0' }}>
              <h3 style={{ fontSize: '2rem', color: '#333' }}>Appointment Stats</h3>
          </div>
         
            <div class="table-responsive px-2">
                <table class="table table-borderless">
                    <thead>
                        <tr>
                            {/* <th scope="col">Appointment<span class="ps-1">Requests</span></th> */}
                            <th scope="col">Approved<span class="ps-1">Appointments</span></th>
                            <th scope="col">Canceled<span class="ps-1">Appointments</span></th>
                            {/* <th scope="col">Completed<span class="ps-1">Appointments</span></th> */}
                            <th scope="col">Pending<span class="ps-1">Appointments</span></th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {/* <td><span class="bg-blight">{appointmentRequests}</span></td> */}
                            <td><span class="bg-blight">{approvedAppointments}</span></td>
                            <td><span class="bg-blight">{canceledAppointments}</span></td>
                            {/* <td><span class="bg-blight"></span></td> */}
                            <td><span class="bg-blight">{pendingAppointments}</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </div>
        
        
        {/* <div
          className="bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=")',
            height: "auto",
          }}
        >
        </div> */}
        
        <Footer />
      </div>
    </>
  );
}

// export default Card;
const SingleCard = ({ image, Button, titleHref }) => {
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
