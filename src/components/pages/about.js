import switzerland from '../../resources/switzerland.jpg';
import paris from '../../resources/paris.jpg';
import amsterdam from '../../resources/amsterdam.jpg';

const hrStyle = {
    border: 'none',
    height: '5px',
    backgroundColor: '#B47EDE',
};

function About() {
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>About Us!</h1>

            <hr style={hrStyle} />

            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col"}>
                        <h2>Our Goal</h2>
                        <p style={{ fontSize: "20px" }}>
                            Women in Engineering and Computer Science (WECS) has a goal to create a community for women and gender-non-conforming individuals at the University of Victoria to grow as students and professionals.</p>
                    </div>
                    <div className={"col-6"} >
                        <img alt="Switzerland" src={switzerland} width='500' height='667' class="img-fluid" />
                    </div>
                </div>

                <hr style={hrStyle} />

                <div className={"row"}>
                    <div className={"col-6"} >
                        <img alt="Paris" src={paris} width='500' height='667' class="img-fluid" />
                    </div>
                    <div className={"col"}>
                        <h2>Our Focus</h2>
                        <p style={{ fontSize: "20px" }}>
                            We have three core areas of focus: Academia, Professional Development, and Community. Within each focus, we provide low-commitment opportunities to support our members.
                            <br></br>
                            <br></br>
                            Example of opportunities we host include (but are not limited to):
                            <br></br>
                            Academia: review sessions and study hours
                            <br></br>
                            Professional Development: networking events and speaker series
                            <br></br>
                            Community: tote bag paint night and exam fuel and chill
                        </p>
                    </div>
                </div>

                <hr style={hrStyle} />

                <div className={"row"}>
                    <div className={"col"}>
                        <h2>The Revival</h2>
                        <p style={{ fontSize: "20px" }}>
                            WECS was restarted in October 2023 by Emily, the current President.
                            She took the initiative to find previous WECS members, hunt for account passwords, and build a dedicated team of awesome people.
                            <br></br>
                            <br></br>
                        </p>
                    </div>
                    <div className={"col-6"} >
                        <img alt="Amsterdam" src={amsterdam} width='500' height='667' class="img-fluid" />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default About;