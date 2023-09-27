"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <>
      <footer className="bg-white dark:bg-black border-t border-stroke dark:border-strokedark mt-20">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* <!-- Footer Top --> */}
          <div className="py-20 lg:py-25">
            <div className="flex flex-wrap lg:justify-between gap-8 lg:gap-0">
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },

                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="animate_top w-1/2 lg:w-1/4"
              >
                <a href="index.html" className="relative">
                  <Image
                    width={110}
                    height={80}
                    src="/images/logo/logo-light.svg"
                    alt="Logo"
                    className="dark:hidden"
                    style={{width: "50px"}}
                  />
                  <Image
                    width={110}
                    height={80}
                    src="/images/logo/logo-dark.svg"
                    alt="Logo"
                    className="hidden dark:block"
                    style={{width: "50px"}}
                  />
                </a>

                <p className="mt-5 mb-10">
                Technological innovation at your fingertips.
                </p>

                <p className="uppercase tracking-[5px] text-sectiontitle mb-1.5">
                  contact
                </p>
                <a
                  href="mailto:info@arkcorporation.es"
                  className="text-black dark:text-white font-medium text-itemtitle"
                >
                  info@arkcorporation.es
                </a>
              </motion.div>

              <div className="w-full lg:w-2/3 xl:w-7/12 flex flex-col md:flex-row md:justify-between gap-8 md:gap-0">
                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },

                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  <h4 className="font-medium text-black dark:text-white text-itemtitle2 mb-9">
                    Quick Links
                  </h4>

                  <ul>
                    <li>
                      <a
                        href="#"
                        className="inline-block hover:text-primary mb-3"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://quotes.arkcorporation.es/apps"
                        className="inline-block hover:text-primary mb-3"
                      >
                        Quotes
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://app.arkcorporation.es/apps"
                        className="inline-block hover:text-primary mb-3"
                      >
                        Our Apps
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://app.arkcorporation.es/software"
                        className="inline-block hover:text-primary mb-3"
                      >
                        Our Software
                      </a>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },

                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  <h4 className="font-medium text-black dark:text-white text-itemtitle2 mb-9">
                    Support
                  </h4>

                  <ul>
                    <li>
                      <a
                        href="https://licenses.arkcorporation.es/"
                        className="inline-block hover:text-primary mb-3"
                      >
                        Licenses
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://refunds.arkcorporation.es/"
                        className="inline-block hover:text-primary mb-3"
                      >
                        Refunds
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://student.arkcorporation.es/"
                        className="inline-block hover:text-primary mb-3"
                      >
                        Students
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://enterprise.arkcorporation.es/"
                        className="inline-block hover:text-primary mb-3"
                      >
                        Enterprise
                      </a>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },

                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  <h4 className="font-medium text-black dark:text-white text-itemtitle2 mb-9">
                    Newsletter
                  </h4>
                  <p className="mb-4 w-[90%]">
                    Subscribe to receive future updates
                  </p>

                  <form action="#">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Email address"
                        className="w-full dark:bg-black border border-stroke dark:border-strokedark shadow-solid-11 dark:shadow-none rounded-full focus:outline-none focus:border-primary dark:focus:border-primary py-3 px-6"
                      />

                      <button aria-label="signup to newsletter" className="absolute right-0 p-4">
                        <svg
                          className="fill-[#757693] dark:fill-white hover:fill-primary"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_48_1487)">
                            <path
                              d="M3.1175 1.17318L18.5025 9.63484C18.5678 9.67081 18.6223 9.72365 18.6602 9.78786C18.6982 9.85206 18.7182 9.92527 18.7182 9.99984C18.7182 10.0744 18.6982 10.1476 18.6602 10.2118C18.6223 10.276 18.5678 10.3289 18.5025 10.3648L3.1175 18.8265C3.05406 18.8614 2.98262 18.8792 2.91023 18.8781C2.83783 18.8769 2.76698 18.857 2.70465 18.8201C2.64232 18.7833 2.59066 18.7308 2.55478 18.6679C2.51889 18.6051 2.50001 18.5339 2.5 18.4615V1.53818C2.50001 1.46577 2.51889 1.39462 2.55478 1.33174C2.59066 1.26885 2.64232 1.2164 2.70465 1.17956C2.76698 1.14272 2.83783 1.12275 2.91023 1.12163C2.98262 1.12051 3.05406 1.13828 3.1175 1.17318ZM4.16667 10.8332V16.3473L15.7083 9.99984L4.16667 3.65234V9.16651H8.33333V10.8332H4.16667Z"
                              fill=""
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_48_1487">
                              <rect width="20" height="20" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </button>
                    </div>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
          {/* <!-- Footer Top --> */}

          {/* <!-- Footer Bottom --> */}
          <div className="border-t border-stroke dark:border-strokedark flex flex-wrap flex-col lg:flex-row items-center justify-center lg:justify-between gap-5 lg:gap-0 py-7">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <ul className="flex items-center gap-8">
                <li>
                  <a href="https://arkcorporation.es/terms" className="hover:text-primary">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="https://arkcorporation.es/privacy" className="hover:text-primary">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="https://arkcorporation.es/refunds" className="hover:text-primary">
                    Refunds Policy
                  </a>
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              
              <p>&copy; 2022 - <span id="year">{year}</span> Ark Platforms, Inc. All rights reserved</p>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <ul className="flex items-center gap-5">
                <li>
                  <a href="https://www.facebook.com/arkplaformsinc">
                    <svg
                      className="fill-[#D1D8E0] hover:fill-primary transition-all duration-300"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_48_1499)">
                        <path
                          d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z"
                          fill=""
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_48_1499">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
          {/* <!-- Footer Bottom --> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
