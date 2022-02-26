import * as React from "react"
import Layout from "../components/Layout"

const Contact = () => {
    return (
        <Layout>
            <main className="page">
                <section className="contact-page">

                    <article className="contact-info">
                        <h3>Want To Get In Touch?</h3>
                        <p>;ifj;aijwe;fijweifj aefaknioewnc ;aowiejf;aowijef;oaijd fawej f;wiej f;aowiejf </p>
                        <p>wefoijwoqifjiowej fwiqejfowiejfoic woieji</p>
                        <p>wifejiojf owef ioqwej ceaoicmwioec woiecj wioejc woiwjeiocjioweh woe cowiec iwoehcioweh
                            wifejiojf owef ioqwej ceaoicmwioec woiecj wioejc woiwjeiocjioweh woe cowiec iwoehcioweh
                            wifejiojf owef ioqwej ceaoicmwioec woiecj wioejc woiwjeiocjioweh woe cowiec iwoehcioweh
                        </p>
                    </article>
                    <article>
                        <form className="form contact-form">
                            <div className="form-row">
                                <label htmlFor="name">Your Name</label>
                                <input type="text" name="name" id="name"/>
                            </div>
                            <div className="form-row">
                                <label htmlFor="email">Your Email</label>
                                <input type="text" name="email" id="email"/>
                            </div>
                            <div className="form-row">
                                <label htmlFor="message">Your Message</label>
                                <textarea name="message" id="message" ></textarea>
                            </div>
                            <button type="submit" className="btn block">Submit</button>
                        </form>
                    </article>
                </section>
            </main>
        </Layout>

    )
}

export default Contact

