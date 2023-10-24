import { AiOutlineEdit } from "react-icons/ai";
import { BsBook, BsFillPauseCircleFill, BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import BooksSingleCard from "./BooksSingleCard";

const BooksCard = ({ books }) => {
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {books.map((item) => (
                <BooksSingleCard key={item._id} books={item} />
            ))}
        </div>
    );
};
export default BooksCard;
