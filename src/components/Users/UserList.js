import "./UserList.css";
import Card from "../UI/Card";

const UserList = (props) => {
  return (
    <Card className="users">
      <ul>
        {props.users.map((user) => {
          return<li key = {user.key}>
            {user.name}({user.age} years old)
          </li>;
        })}
      </ul>
    </Card>
  );
};

export default UserList;
