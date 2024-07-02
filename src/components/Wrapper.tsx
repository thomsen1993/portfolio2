import React from "react"

const Wrapper = ({children, id}: {children: React.ReactNode, id?: string}) => {
    return (
        <section id={id} className="max-w-3xl mx-auto bg-white shadow-md rounded-md p-5 my-5">
            {children}
        </section>
    )
}
export default Wrapper;