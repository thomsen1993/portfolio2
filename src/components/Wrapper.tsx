import React from "react"

const Wrapper = ({children, id}: {children: React.ReactNode, id?: string}) => {
      
    return (
        <section id={id} className="max-w-3xl mx-auto bg-cardsBg shadow-md rounded-md px-5 py-10 my-10 last-of-type:mb-0">
            {children}
        </section>
    )
}
export default Wrapper;