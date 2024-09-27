import Button from "../buttons/button"

export default function Card({title,balance,butt_text,click,success}){
    return (
        <div className="card">
            <h2 className="subheading">
                {title}: <span className={success?'success':'failer'}>{`₹${balance}`}</span>
            </h2>
            <Button handleclick={click}>{butt_text}</Button>
        </div>
    )
}