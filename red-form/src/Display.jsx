import { useSelector } from "react-redux";

function Display() {
    const users = useSelector(state => state.users);
  return (
    <div>
        {users.map((user) => (
            <div key={user.id}>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            </div>
        ))  }
    </div>
  )
}

export default Display