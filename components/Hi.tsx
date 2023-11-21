import React from 'react'

import { FaPaperPlane } from "react-icons/fa"
import toast from 'react-hot-toast'

export default function Hi() {
  // const { pending } = useFormStatus()
    
  return(
    <>  
    <form
        className="mt-10 flex flex-col dark:text-black ml-24"
        // action={async (formData) => {
        //   const { data, error } = await sendEmail(formData);

        //   if (error) {
        //     toast.error(error);
        //     return;
        //   }

        //   toast.success("Email sent successfully!");
        // }}
      >
        <input
          className="h-14 px-4 rounded-lg bg-white bg-opacity-80 focus:bg-opacity-100 transition-all outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-69 my-3 rounded-lg p-4 bg-white bg-opacity-80 focus:bg-opacity-100 transition-all outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />

        <button
          type="submit"
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65">
            Submit          
        </button>
        
      </form>    


    </>
  )
}
// export default Hi