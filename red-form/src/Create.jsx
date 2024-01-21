import { addUser } from "./UserReducer";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

function Create() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const dispatch = useDispatch();
    const users = useSelector(state => state.users);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addUser({id: users[users.length - 1].id, name, email}));
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Create