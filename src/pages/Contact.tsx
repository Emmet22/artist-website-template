import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Section from "../components/common/Section";

function Contact() {
    return (
        <div>
            <Navbar />
            <main>
                <Section>
                    <h2>Contact Page</h2>
                    <p>This is the contact page</p>
                </Section>
            </main>
            <Footer />
        </div>
    );
}