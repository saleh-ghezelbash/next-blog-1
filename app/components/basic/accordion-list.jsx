// Accordion.js 
import { BsArrowDownShort } from "react-icons/bs";

export default function AccordionList(props) {
    return (
        <div>
            <button
                className="w-full flex gap-2 
						 transition duration-300"
                onClick={props.toggleAccordion}
            >
                <div className="flex items-center justify-center">
                    <BsArrowDownShort
                        className={`cursor-pointer text-black dark:text-black transform ${props.isOpen ? 'rotate-180' : 'rotate-0'} transition-transform duration-300`}
                        size={24}
                    />

                </div>
                <div className="ml-auto w-full text-right">
                    {props.title}
                </div>
            </button>
            {props.isOpen && (
                <div className="px-2 py-1 text-right">
                    {props.children}
                </div>
            )}
        </div>
    );
}; 
