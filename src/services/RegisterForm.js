import Form from '../components/Form';
import {dataBase} from '../Firebase';

function RegisterForm(userData) {

    const addUser = async (user) => {
        await dataBase.collection('users').doc().set(user);
        console.log("Listo");
    }

    return(
        <div className="container">
            <Form addUser={addUser}/>
        </div>
    );
}

export default RegisterForm;