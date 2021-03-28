import {useState} from 'react';


const GuestList: React.FC =() => {
    const [Name,setName] = useState('');
    const [guests,setGuests] = useState<string [] >([]);

    const onClick = () => {
        setName (``);
        setGuests([...guests,Name]);
    };

    return(
    <div>
        <h3>GuestList</h3>
        <ul>
            {guests.map((guest) => (
                <li key={guest}>{guest}</li>
            ))}
        </ul>
        <input value = { Name } onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setName (e.target.value)} />
        <button onClick={onClick}>Add Guest</button>

    </div>
    );
};
export { GuestList as default};
