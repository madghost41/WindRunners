import { useState } from "react";
import Button from "react-bootstrap/Button";
import { useOutletContext } from "react-router-dom";
import { userSignup } from "../utilities";
import Form from "react-bootstrap/Form";


const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setUser } = useOutletContext();

    return (
        <>
            <h1>SignUp</h1>
            <Form
                onSubmit={async (e) => [
                    e.preventDefault(),
                    setUser(await userSignup(email, password)),
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
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </>
    )
}

export default SignUp