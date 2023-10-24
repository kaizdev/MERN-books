import { AiOutlineEdit } from "react-icons/ai";
import {
    BsBook,
    BsEyeglasses,
    BsFillPauseCircleFill,
    BsInfoCircle,
} from "react-icons/bs";
import { MdOutlineDelete, MdShowChart } from "react-icons/md";
import { Link } from "react-router-dom";
import BookModal from "./BookModal";
import { useState } from "react";

const BooksSingleCard = ({ books }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div
            key={books._id}
            className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl"
        >
            <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg">
                {books.publishYear}
            </h2>
            <h4 className="my-2 text-gray-500">{books._id}</h4>
            <div className="flex justify-start items-center gap-x-2">
                <BsBook className="text-red-300 text-2xl" />
                <h2 className="my-1">{books.title}</h2>
            </div>

            <div className="flex justify-start items-center gap-x-2">
                <BsFillPauseCircleFill className="text-red-300 text-2xl" />
                <h2 className="my-1">{books.author}</h2>
            </div>

            <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
                <BsEyeglasses
                    className="text-3xl text-blue-800 hover:text-black cursor-pointer"
                    onClick={() => setShowModal(true)}
                />
                <Link to={`/books/details/${books._id}`}>
                    <BsInfoCircle className="text-2xl text-green-800 hover:text-black" />
                </Link>

                <Link to={`/books/edit/${books._id}`}>
                    <AiOutlineEdit className="text-2xl text-yellow-800 hover:text-black" />
                </Link>

                <Link to={`/books/delete/${books._id}`}>
                    <MdOutlineDelete className="text-2xl text-red-800 hover:text-black" />
                </Link>
            </div>
            {showModal && (
                <BookModal book={books} onClose={() => setShowModal(false)} />
            )}
        </div>
    );
};
export default BooksSingleCard;
