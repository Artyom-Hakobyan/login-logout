import { useState } from 'react';
import './styles/FormComponent.css'
import './styles/Label.css'
import './styles/Submit.css'

const InputComponent = (props) => {
    const [userInfo, setUserInfo] = useState({
        username: "",
        password: ""
    })

    const handleChange = (event) => {
        event.preventDefault()
        setUserInfo({ ...userInfo, [event.target.name]: event.target.value })
        console.log(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.addUserInfo(userInfo)
        setUserInfo({ username: "", password: "" })
    }

    return (
        <div>
            <form className='formComponent' onSubmit={handleSubmit}>
                <label className='label'>Username
                    <input type="text" name='username' value={userInfo.username} onChange={handleChange} />
                </label>
                <br />
                <label className='label'>Password
                    <input type="text" name='password' value={userInfo.password} onChange={handleChange} />
                </label>
                <br />
                <input type="submit" value="Login" className='submit' />
            </form >
        </div>
    );
};

export default InputComponent;