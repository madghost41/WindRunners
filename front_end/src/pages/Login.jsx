import { useState } from "react";
import { useOutletContext } from "react-router-dom"
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { userLogin } from "../utilities";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const { setUser } = useOutletContext();

    return (
        <>
            <h1>Log In</h1>
            <Form
                onSubmit={async (e) => [
                    e.preventDefault(),
                    setUser(await userLogin(email, password)),
                ]}
            >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        placeholder="Enter Email"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Group>
                <Button variant="primary" type="submit">Login</Button>
            </Form>

        </>
    )
}

export default Login