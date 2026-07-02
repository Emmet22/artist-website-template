import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Section from "../components/common/Section";

function Home() {
    return (
        <div>
            <Navbar />
            <main>
                <Section>
                    <h2>Home Page</h2>
                    <p>This is the home page</p>
                </Section>
            </main>
            <Footer />
        </div>
    );
}