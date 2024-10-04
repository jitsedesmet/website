<svelte:head>
    <title>About Me | Jitse De Smet</title>
    <meta name="description" content="Personal info of Jitse De Smet">
</svelte:head>

<p>
    Hi inter web browser,<br>
    My name is <a href="/">Jitse De Smet</a>.
    I am a <a href="publications">doctoral researcher</a> at <a href="http://www.ugent.be/ea/idlab/en">IDLab</a> with the
    <a href="https://knows.idlab.ugent.be/">KNoWS</a> research group.
    My research focuses on writing abstractions for decentralized data ecosystems.
</p>
<p>
    These abstractions are brought to life using the <a href="https://comunica.dev/">Comunica</a> query engine.
    I have many years of developers experience in the Comunica project.
    Dating back to many conributions made in the expression evaluator,
    previously known as <a href="https://github.com/comunica/sparqlee">sparqlee</a>.
</p>

<p>
    Besides working, I also like to spend my time on other activities,
    like rock climbing which I mostly practice indoors.
    It allows me to spend many of my nights with the amazing friends from the climbing gym.
    Outdoor climbing is of course also amazing!
    I've enjoyed climbing in the
    <a href="https://www.klimenbergsportfederatie.be/rotsmassieven">Belgian Ardennes</a>,
    <a href="https://www.google.com/maps/place/44126+Albarracín,+Teruel,+Spain">Albarracin</a>,
    <a href="https://www.google.com/maps/place/77300+Fontainebleau,+France/">Fontainebleau</a>,
    and <a href="https://www.google.com/maps/place/Magic+Wood/@46.566847,9.4351112,17z/data=!3m1!4b1!4m6!3m5!1s0x4784f2c609330221:0xc5cbbc821a7dfb59!8m2!3d46.5668433!4d9.4376861!16s%2Fg%2F1ynnq173g?entry=tts&g_ep=EgoyMDI0MDkyMi4wKgBIAVAD">Magic Wood</a>.

    Besides climbing, I also like inline skating to escape from other people and be with myself for a bit.
</p>

<div class="timeline">
    <h2>Experience</h2>


    <div class="years">
        2024 - now
    </div>
    <div class="title">
        Doctoral researcher
    </div>
    <div class="institute">
        <a href='https://www.fwo.be/en/'>FWO fellowship</a>
    </div>
    <div class="info">
        Optimizing Write Performance in Decentralized Personal Data Ecosystems.
        My PhD is executed at the <a href="https://knows.idlab.ugent.be/">KNoWS group</a> at
        <a href='https://www.ugent.be/en'>Ghent University</a>.
    </div>


    <div class="years">
        2021 - 2024
    </div>
    <div class="title">
        Software developer
    </div>
    <div class="institute">
        <a href='https://www.ugent.be/en'>Ghent University</a>
    </div>
    <div class="info">
        Collaborated with IDLab / imec to improve their Expression Evaluator Sparqlee used in their Linked Data Query engine
        <a href="https://comunica.dev/">Comunica</a>.
    </div>


    <div class="years">
        2023 - 2023
    </div>
    <div class="title">
        Software developer
    </div>
    <div class="institute">
        <a href='https://www.guardsquare.com/'>GuardSquare</a>
    </div>
    <div class="info">Increasing debuggability of
        <a href="https://github.com/Guardsquare/proguard-core">ProGuardCORE</a> project by creating
        <a href="https://github.com/Mouwrice/proguard-core-visualizer">ProGuardCORE visualizer</a>.
    </div>

    <h2>Education</h2>
    <div class="years">
        2022-2024
    </div>
    <div class="title">
        Master of Science in Computer Science Engineering
    </div>
    <div class="institute">
        <a href='https://www.ugent.be/en'>Ghent University</a>
    </div>
    <div class="info">Graduated with the high honors in 2024.</div>


    <div class="years">
        2019-2022
    </div>
    <div class="title">
        Bachelor's of Science in Computer Science
    </div>
    <div class="institute">
        <a href='https://www.ugent.be/en'>Ghent University</a>
    </div>
    <div class="info">Graduated with the highest honors in 2022.</div>


    <div class="years">
        2015-2019
    </div>
    <div class="title">
        Secondary education
    </div>
    <div class="institute">
        <a href='https://secundair.romerocollege.be/campus-primary-overview/campus-van-winckel'>Óscar Romerocollege</a>
    </div>
    <div class="info">Specialized course trajectory in industrial sciences with a focus on advanced mathematics, mechanics, and electrical sciences.</div>
</div>

<style>
    h2 {
        color: var(--color-primary);
        font-size: 1.1em;
        font-weight: bold;
    }
    .timeline {
        display: grid;
        column-gap: 10px;
        grid-auto-flow: row;
        grid-template-columns: auto 1fr auto;
    }
    .timeline h2 {
        grid-column: auto / span 3;
    }
    .years {
        grid-row: auto / span 2;
    }
    .title {
        font-size: 1em;
        font-weight: bold;
    }
    .info {
        font-size: 1em;
        font-style: italic;
        color: var(--color-secondary);
        margin: 0 0 1rem 0;
    }
    .institute {
        grid-row: auto / span 2;
        text-align: end;
    }
</style>
