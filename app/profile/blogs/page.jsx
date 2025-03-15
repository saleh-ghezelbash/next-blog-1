import Link from "next/link";
import { BsFillPlusCircleFill, BsPencilSquare, BsEye, BsTrash } from "react-icons/bs";

const TABLE_HEAD = ["Name", "Job", "Employed", "عملیات"];

const TABLE_ROWS = [
    {
        name: "John Michael",
        job: "Manager",
        date: "23/04/18",
    },
    {
        name: "Alexa Liras",
        job: "Developer",
        date: "23/04/18",
    },
    {
        name: "Laurent Perrier",
        job: "Executive",
        date: "19/09/17",
    },
    {
        name: "Michael Levi",
        job: "Developer",
        date: "24/12/08",
    },
    {
        name: "Richard Gran",
        job: "Manager",
        date: "04/10/21",
    },
];

export default function Blogs() {
    return (
        <div>
            <div className="my-2 p-4 text-right">مدیریت پست ها</div>
            <div className="my-2 p-4 flex justify-end">
                <button className="flex gap-2 items-center border rounded-lg px-2 py-1 hover:bg-gray-800">
                    <BsFillPlusCircleFill />
                    پست جدید
                </button>
            </div>
            <div>
                <div className="h-full w-full overflow-auto">
                    <table className="w-full min-w-max table-auto text-right" dir="rtl">
                        <thead>
                            <tr>
                                {TABLE_HEAD.map((head) => (
                                    <th key={head} className="border-b border-blue-gray-100 bg-blue-400 p-4">
                                        <p
                                            className="font-normal leading-none opacity-70"
                                        >
                                            {head}
                                        </p>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {TABLE_ROWS.map(({ name, job, date }, index) => (
                                <tr key={name} className="even:bg-blue-gray-50/50">
                                    <td className="p-4">
                                        <p className="font-normal">
                                            {name}
                                        </p>
                                    </td>
                                    <td className="p-4">
                                        <p className="font-normal">
                                            {job}
                                        </p>
                                    </td>
                                    <td className="p-4">
                                        <p className="font-normal">
                                            {date}
                                        </p>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex gap-3">
                                            <BsPencilSquare size={24} className="hover:text-green-500 hover:cursor-pointer" />
                                            <Link href={`/blog/${2}`} target="_blank">
                                                <BsEye size={24} className="hover:text-blue-500" />
                                            </Link>
                                            <BsTrash size={24} className="hover:text-red-500 hover:cursor-pointer" />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}