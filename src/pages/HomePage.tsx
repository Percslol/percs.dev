import { type Component } from "dreamland/core";

const Homepage: Component = function () {
	return (
		<div>
			<img src="/pfp.webp" alt="percs" id="me" height="128px" weight="128px" />
            <section>
                <h3>about me</h3>
                <p>hey!</p>
                <p>i'm percs, a 16 y/o developer living in texas</p>
                <p>
                    i make cool software with{" "}
                    <a href="https://mercurywork.shop">mercury workshop</a> and work on my
                    own personal projects.
                </p>
            </section>
		</div>
	);
};

export default Homepage;
