import {useState} from "react";

const users = [
    {name: 'sarah', age:20},
    {name: 'gaga', age:20},
    {name: 'Mara', age:20},
];

const UserSerch: React.FC = () => {
    const [name, setName] = useState('');
    const [user,setUser] = useState <{name: string, age:number}| undefined>();

    const onClick = () => {
        const foundUser = users.find((user) =>{
            return user.name==name;
        });
        setUser(foundUser);

        console.log(foundUser);

    };

    return(
        <div>UserSerch
        <input value ={name} onChange={(e) => setName(e.target.value)} />

        <button onClick={onClick}>Find User</button>

        <div>
            {user && user.name}
            {user && user.age}
        </div>
        </div>
);
};

export default UserSerch;