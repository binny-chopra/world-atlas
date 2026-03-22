export const Contact = () => {
    const handleFormSubmit = (formData) => {
        const formInputData = Object.fromEntries(formData.entries());
        console.log(formInputData);
    }
    return <>
        <section className="section-contact">
            <h2 className="container-title">Contact Us</h2>
            <div className="container contact-wrapper">
                <form action={handleFormSubmit}>
                    <input
                        type="text"
                        required
                        autoComplete="off"
                        className="form-control"
                        placeholder="Enter your name" name="username" />

                    <input
                        type="email"
                        required
                        autoComplete="off"
                        className="form-control"
                        placeholder="Enter your email" name="email" />

                    <textarea
                        className="form-control"
                        rows="10"
                        required
                        autoComplete="off"
                        placeholder="Enter your message" name="message" >
                    </textarea>

                    <button type="submit" value="send">Send</button>
                </form>
            </div>
        </section>
    </>
}