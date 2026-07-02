import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Section from "../components/common/Section";

function About () {
    return (
        <div>
            <Navbar />
            <main>
                <Section>
                    <h2>About Page</h2>
                    <p>This is the about page</p>
                </Section>
            </main>
            <Footer />
        </div>
    );
}