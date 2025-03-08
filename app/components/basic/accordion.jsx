// Accordion.js 
import { BsList } from "react-icons/bs";

export default function Accordion(props) {
    return (
        <div className="lg:hidden">
            <div
                className="w-full p-4 flex gap-2 bg-gray-200 
						 transition duration-300"
            >
                <div className="flex items-center justify-center">
                    <BsList onClick={props.toggleAccordion} className="cursor-pointer text-black dark:text-black" size={24} />
                </div>
                <div className="ml-auto w-full">
                    {props.title}
                </div>
            </div>
            {props.isOpen && (
                <div className="p-2 bg-white">
                    {props.children}
                </div>
            )}
        </div>
    );
}; 
