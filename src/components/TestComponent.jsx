import { useEffect } from "react";
import axios from 'axios';
const TestComponent = () => {
    const get_method = async () => {
        const data = await axios.get('https://cms-backend-9pa3.onrender.com/get-data');
        console.log(data);
    }
    const post_method = async () => {
        const data = await axios.post('https://cms-backend-9pa3.onrender.com/post-data', { user_name: 'coder' });
        console.log(data);
    }
    useEffect(() => {
        get_method();
        post_method();
    });
    return (
        <div>
            <h1>Hello Test</h1>
        </div>
    )
}
export default TestComponent;
