import {React, useState} from 'react';

function Form(props) {
    const [form, setForm] = useState({
        name: "",
        username: " ",
        password: " "
    });

    const manageValues = e => {
        const {name, value} = e.target;
        setForm({...form, [name]: value});
    };

    const submit = (e) => {
        e.preventDefault();
        props.addUser(form);
    }

    return(
        <form className="card card-body" onSubmit={submit}>
            <div className="form-group input-group">
                <div className="input-group-text bg-light"> 
                    <i className="material-icons">account_circle</i>
                </div>
                <input type="text" name="name" className="form-control" placeholder="Full Name" onChange={manageValues} />
            </div>

            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="material-icons">account_circle</i>
                </div>
                <input type="text" name="username" className="form-control" placeholder="Usarname" onChange={manageValues} />
            </div>
            
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="material-icons">vpn_key</i>
                </div>
                <input type="password" name="password" className="form-control" placeholder="Password" onChange={manageValues} />
            </div>
            <button className="btn btn-info btn-block"> Login</button>
        </form>
    );
}

export default Form;