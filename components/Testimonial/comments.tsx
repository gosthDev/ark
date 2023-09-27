import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import React, { useRef  } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { collection, addDoc } from "firebase/firestore"; 


const firebaseConfig = {
  apiKey: "AIzaSyCRzWd6PLuCw6NZGclDaUpoVB8MiGSs-1g",
  authDomain: "arkplatformsinc.firebaseapp.com",
  databaseURL: "https://arkplatformsinc-default-rtdb.firebaseio.com",
  projectId: "arkplatformsinc",
  storageBucket: "arkplatformsinc.appspot.com",
  messagingSenderId: "397134522497",
  appId: "1:397134522497:web:0385c4891449936d590580"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const Comments = () => {
  /**
   * Source: https://www.joshwcomeau.com/react/the-perils-of-rehydration/
   * Reason: To fix rehydration error
   */
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    const nameInput = document.querySelector('input[name="name"]');
    const nameValue = nameInput.value;

    const emailInput = document.querySelector('input[name="email"]');
    const emailValue = emailInput.value;

    const commentInput = document.querySelector('textarea[name="comment"]');
    const commentValue = commentInput.value;

    const checkedInput = document.querySelector('input[name="checked"]');
    const checkedValue = checkedInput.value;
    
    let value; // Declarar la variable fuera de los bloques if-else

    if (checkedInput.checked) {
      value = 'Accept'; // Asignar valor dentro del bloque if
    } else {
      value = 'No Accept'; // Asignar valor dentro del bloque else
    }
    
    try {
      const docRef = await addDoc(collection(db, "comentsWeb"), {
        name: nameValue,
        email: emailValue,
        comment: commentValue,
        terms: value,
      });
    
      console.log("Document written with ID: ", docRef.id);
      const forms = document.querySelector('form[name="commentForm"]');
      forms.reset();
      console.clear();
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };


  return (
    <>
      {/* <!-- ===== Contact Start ===== --> */}
      <section id="support" className="px-4 md:px-8 2xl:px-0 w-100">
        <div className="mx-auto max-w-c-1080 relative pt-10 lg:pt-15 xl:pt-20 px-7.5 lg:px-15 xl:px-20 overflow-hidden">
          <div className="absolute -z-1 rounded-lg left-0 top-0 w-full h-2/3 bg-gradient-to-t from-[#fff] to-[#dee7ff47] dark:bg-gradient-to-t dark:from-[#1c1f2e] dark:to-[#000]"></div>
          <div className="absolute -z-1 bottom-[-255px] left-0 w-full h-full">
            <Image
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              fill
            />
            <Image
              src="./images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
              fill
            />
          </div>

          <div className="flex flex-wrap md:flex-nowrap flex-col-reverse md:flex-row gap-8 xl:gap-20 md:justify-between">
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
              className="animate_top w-full md:w-3/2 lg:w-3/2 shadow-solid-8 rounded-lg bg-white dark:bg-black dark:border dark:border-strokedark p-7.5 xl:p-15"
            >
              <h2 className="text-black dark:text-white text-3xl xl:text-sectiontitle2 font-semibold mb-15">
                Create Comment
              </h2>

              <form 
                onSubmit={handleSubmit}
                name="commentForm"
              >
                <div className="flex flex-col lg:flex-row lg:justify-between gap-7.5 lg:gap-14 mb-7.5">
                  <input
                    type="text"
                    name="name"
                    autoComplete="off"
                    placeholder="Full name"
                    className="w-full lg:w-1/2 bg-transparent border-b border-stroke dark:border-strokedark focus-visible:outline-none focus:border-waterloo dark:focus:border-manatee focus:placeholder:text-black dark:focus:placeholder:text-white pb-3.5"
                  />

                  <input
                    type="email"
                    name="email"
                    autoComplete="off"
                    placeholder="Email address"
                    className="w-full lg:w-1/2 bg-transparent border-b border-stroke dark:border-strokedark focus-visible:outline-none focus:border-waterloo dark:focus:border-manatee focus:placeholder:text-black dark:focus:placeholder:text-white pb-3.5"
                  />
                </div>

                <div className="flex mb-11.5">
                  <textarea
                    name="comment"
                    placeholder="Comment"
                    autoComplete="off"
                    spellCheck="false"
                    rows={4}
                    className="w-full bg-transparent border-b border-stroke dark:border-strokedark focus-visible:outline-none focus:border-waterloo dark:focus:border-manatee focus:placeholder:text-black dark:focus:placeholder:text-white"
                  ></textarea>
                </div>

                <div className="flex flex-wrap xl:justify-between ">
                  <div className="flex mb-4 md:mb-0">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      name="checked"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mt-2"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="max-w-[425px] flex cursor-pointer select-none pl-5 text-sm"
                    >
                      By clicking comment, you are accepting our Terms & Conditions regarding comments.
                    </label>
                  </div>

                  <button type="submit" aria-label="send message" className="inline-flex items-center gap-2.5 bg-black hover:bg-blackho ease-in-out duration-300 dark:bg-btndark font-medium text-white rounded-full px-6 py-3">
                    Comment
                    <svg
                      className="fill-white"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
                        fill=""
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
      {/* <!-- ===== Contact End ===== --> */}
    </>
  );
};

export default Comments;