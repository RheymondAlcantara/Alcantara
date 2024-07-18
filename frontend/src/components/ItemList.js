import React, {useEffect, useState} from "react";
import axios from 'axios';
import '../style.css';
const ItemList = ({onEdit, onDelete}) => {
    const [items, setItems] = useState([]);
    useEffect( () => {
        fetchItems();
    }, []);

    const fetchItems = async () =>  {
        try {
            const response = await
            axios.get('http://localhost:8000/api/items/')
            setItems(response.data);
        } catch (error) {
            console.error('There was an error fetching the items', error)
        }
    };

    return (
        <div>
            <h1>
                Items
            </h1>
            <ul>
                {items.map(item =>(
                    <li key={item.id}>
                        <div>First Name: {item.first_name}</div>
                        <div>Middle Name: {item.middle_name}</div>
                        <div>Last Name: {item.last_name}</div>
                        <div className= "Student-Information" >
                        <div>Age: {item.age}</div>   
                        <div>Sex: {item.sex}</div>   
                        <div>Date of Birth: {item.date_of_birth}</div> 
                        <div>Place of Birth: {item.place_of_birth}</div> 
                        <div>Civil Status: {item.civil_status}</div> 
                        <div>Citizenship: {item.citizenship}</div>  
                        <div>Religion: {item.religion}</div>  
                        <div>Province: {item.province}</div>  
                        <div>Municipality: {item.municipality}</div>  
                        <div>Address: {item.address}</div>
                        <div>Zip Code: {item.zip_code}</div>  
                        <div>Email: {item.email}</div> 
                        <div>Telephone: {item.tele_no}</div> 
                        <div>Mobile Phone: {item.mobile_no}</div>   
                        <div>Blood Type: {item.blood_type}</div>  
                        <div>Height: {item.height}</div>  
                        <div>Weight: {item.weight}</div>  
                        <div>Mother's First Name: {item.mother_first_name}</div>  
                        <div>Mother's Maiden Middle Name: {item.mother_maiden_middle_name}</div>   
                        <div>Mother's Last Name: {item.mother_maiden_last_name}</div>   
                        <div>Father's First Name: {item.father_first_name}</div>   
                        <div>Father's Middle Name: {item.father_middle_name}</div>   
                        <div>Father's Last Name: {item.father_last_name}</div>   
                        </div>  
                        <button onClick={()=> onEdit(item)}>Edit</button>
                        <button onClick={()=> onDelete(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;