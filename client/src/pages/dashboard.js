import { useParams } from "react-router-dom";

const Dashborad = () => {
const { id } = useParams();

    return (
        <div>{ id }</div>
    );
}

export default Dashborad;