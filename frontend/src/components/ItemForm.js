import React, {useEffect, useState} from "react";
import axios from 'axios';
import '../style.css';

const ItemForm = ({item, onSuccess}) => {
    const [first_name, setFName] = useState('');
    const [middle_name, setMName] = useState('');
    const [last_name, setLName] = useState('');
    const [age, setAge] = useState('');
    const [sex, setSex] = useState('');
    const [date_of_birth, setDBirth] = useState('');
    const [place_of_birth, setPBirth] = useState('');
    const [civil_status, setCStatus] = useState('');
    const [citizenship, setCitizenship] = useState('');
    const [religion, setReligion] = useState('');
    const [province, setProvince] = useState('');
    const [municipality, setMunicipality] = useState('');
    const [address, setAddress] = useState('');
    const [zip_code, setZip] = useState('');
    const [email, setEmail] = useState('');
    const [tele_no, setTele] = useState('');
    const [mobile_no, setMobile] = useState('');
    const [blood_type, setBType] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [mother_first_name, setMFName] = useState('');
    const [mother_maiden_middle_name, setMMMName] = useState('');
    const [mother_maiden_last_name, setMMLName] = useState('');
    const [father_first_name, setFFName] = useState('');
    const [father_middle_name, setFMName] = useState('');
    const [father_last_name, setFLName] = useState('');

    useEffect(() => {
        if (item) {
            setFName(item.first_name);
            setMName(item.middle_name);
            setLName(item.last_name);
            setAge(item.age);
            setSex(item.sex);
            setDBirth(item.date_of_birth);
            setPBirth(item.place_of_birth);
            setCStatus(item.civil_status);
            setCitizenship(item.citizenship);
            setReligion(item.religion);
            setProvince(item.province);
            setMunicipality(item.municipality);
            setAddress(item.address);
            setZip(item.zip_code);
            setEmail(item.email);
            setTele(item.tele_no);
            setMobile(item.mobile_no);
            setBType(item.blood_type);
            setHeight(item.height);
            setWeight(item.weight);
            setMFName(item.mother_first_name);
            setMMMName(item.mother_maiden_middle_name);
            setMMLName(item.mother_maiden_last_name);
            setFFName(item.father_first_name);
            setFMName(item.father_middle_name);
            setFLName(item.father_last_name);
        }
    }, [item]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {first_name, middle_name, last_name, age, sex, date_of_birth, place_of_birth, civil_status, citizenship, religion, 
            province, municipality, address, zip_code, email, tele_no, mobile_no, blood_type, height, weight, mother_first_name, mother_maiden_middle_name, 
            mother_maiden_last_name, father_first_name, father_middle_name, father_last_name};
        try {
            if (item){
                await
                axios.put(`http://localhost:8000/api/items/${item.id}/`, data);
            }else{
                axios.post('http://localhost:8000/api/items/', data);
            }
            onSuccess();

            setFName('');
            setMName('');
            setLName('');
            setAge('');
            setSex('');
            setDBirth('');
            setPBirth('');
            setCStatus('');
            setCitizenship('');
            setReligion('');
            setProvince('');
            setMunicipality('');
            setAddress('');
            setZip('');
            setEmail('');
            setTele('');
            setMobile('');
            setBType('');
            setHeight('');
            setWeight('');
            setMFName('');
            setMMMName('');
            setMMLName('');
            setFFName('');
            setFMName('');
            setFLName('');
        } catch (error){
            console.error('There was an error submitting the form', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name:</label>
                <input type="text" value={first_name} onChange={(e) => setFName(e.target.value)}/>
            </div>
            <div>
                <label>Middle Name:</label>
                <input type="text" value={middle_name} onChange={(e) => setMName(e.target.value)}/>
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text" value={last_name} onChange={(e) => setLName(e.target.value)}/>
            </div>
            <div>
                <label>Age:</label>
                <input type="text" value={age} onChange={(e) => setAge(e.target.value)}/>
            </div>
            <div>
                <label>Sex:</label>
                <input type="text" value={sex} onChange={(e) => setSex(e.target.value)}/>
            </div>
            <div>
                <label>Date of Birth:</label>
                <input type="date" value={date_of_birth} onChange={(e) => setDBirth(e.target.value)}/>
            </div>
            <div>
                <label>Place of Birth:</label>
                <input type="text" value={place_of_birth} onChange={(e) => setPBirth(e.target.value)}/>
            </div>
            <div>
                <label>Citizenship:</label>
                <input type="text" value={citizenship} onChange={(e) => setCitizenship(e.target.value)}/>
            </div>
            <div>
                <label>Civil Status:</label>
                <input type="text" value={civil_status} onChange={(e) => setCStatus(e.target.value)}/>
            </div>
            <div>
                <label>Religion:</label>
                <input type="text" value={religion} onChange={(e) => setReligion(e.target.value)}/>
            </div>
            <div>
                <label>Province:</label>
                <input type="text" value={province} onChange={(e) => setProvince(e.target.value)}/>
            </div>
            <div>
                <label>Municipality:</label>
                <input type="text" value={municipality} onChange={(e) => setMunicipality(e.target.value)}/>
            </div>
            <div>
                <label>Address:</label>
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)}/>
            </div>
            <div>
                <label>Zip Code:</label>
                <input type="text" value={zip_code} onChange={(e) => setZip(e.target.value)}/>
            </div>
            <div>
                <label>Email:</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <label>Telephone:</label>
                <input type="text" value={tele_no} onChange={(e) => setTele(e.target.value)}/>
            </div>
            <div>
                <label>Mobile Phone:</label>
                <input type="text" value={mobile_no} onChange={(e) => setMobile(e.target.value)}/>
            </div>
            <div>
                <label>Blood Type:</label>
                <input type="text" value={blood_type} onChange={(e) => setBType(e.target.value)}/>
            </div>
            <div>
                <label>Height:</label>
                <input type="text" value={height} onChange={(e) => setHeight(e.target.value)}/>
            </div>
            <div>
                <label>Weight:</label>
                <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)}/>
            </div>
            <div>
                <label>Mother's First Name:</label>
                <input type="text" value={mother_first_name} onChange={(e) => setMFName(e.target.value)}/>
            </div>
            <div>           
                <label>Mother's Maiden Middle Name:</label>
                <input type="text" value={mother_maiden_middle_name} onChange={(e) => setMMMName(e.target.value)}/>
            </div>
            <div>
                <label>Mother's Maiden Last Name:</label>
                <input type="text" value={mother_maiden_last_name} onChange={(e) => setMMLName(e.target.value)}/>
            </div>
            <div>
                <label>Father's First Name:</label>
                <input type="text" value={father_first_name} onChange={(e) => setFFName(e.target.value)}/>
            </div>
            <div>
                <label>Father's Middle Name:</label>
                <input type="text" value={father_middle_name} onChange={(e) => setFMName(e.target.value)}/>
            </div>
            <div>
                <label>Father's Last Name:</label>
                <input type="text" value={father_last_name} onChange={(e) => setFLName(e.target.value)}/>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ItemForm;