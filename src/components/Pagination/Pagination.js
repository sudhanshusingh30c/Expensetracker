import styles from './Pagination.module.css'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

export default function Pagination({ updatePage, currentPage, totalpage }) {

    const handlePrev = () => {
        if(currentPage > 1){
            updatePage(prev => prev - 1)
        }
    }

    const handleNext = () => {
        if(totalpage !== currentPage){
            updatePage(prev => prev + 1)
        }
    }

    return (
        <div className={styles.wrapperpagi}>
            <button onClick={handlePrev} disabled={currentPage == 1}>
                <IoIosArrowRoundBack />
            </button>

            <p>{currentPage}</p>

            <button onClick={handleNext} disabled={totalpage === currentPage}>
                <IoIosArrowRoundForward />
            </button>
        </div>
    )
}