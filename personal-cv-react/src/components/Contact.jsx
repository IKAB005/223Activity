import { useState } from "react";
function Contact() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
    return (
        <section className="card">
                <h2>Contact Me</h2>
                <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                    <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <textarea placeholder="Message"></textarea>
                    <button type="submit" id="submitBtn">Send</button>
                </form>
        </section>
    )
}
function handleSubmit(e) {
    e.preventDefault();
    alert(`Thank you ${name}!`);
}
export default Contact;