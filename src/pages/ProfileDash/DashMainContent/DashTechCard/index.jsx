const DashTechCard = ({ status, title, onSelect }) => {

    return (
        <button onClick={onSelect}>
            <li>
                <h3>{title}</h3>
                <p>{status}</p>
            </li>
        </button>
    )
}

export default DashTechCard;