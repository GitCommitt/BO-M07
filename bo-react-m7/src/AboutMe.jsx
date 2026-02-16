import './AboutMe.css'
export function AboutMe(){

    return (
        <div className='aboutMe'>
            <img className='about-me_selfie' src="./src/assets/img/selfie.png" alt="ca" />
            <div className='about-me_info'>
                <h2 className='about-me-info_h2'>About Me</h2>
                <p className='about-me-info_p'>Info over mij
                    Mijn naam is Daan Pronk.
                    Ik ben een enthousiaste en leergierige student met een grote passie voor technologie en creativiteit.
                    <br /><br />In mijn vrije tijd werk ik graag met LEGO. Ik vind het leuk om dingen te bouwen en mijn fantasie te gebruiken om nieuwe creaties te maken. Het bedenken en samenstellen van bouwwerken past goed bij mijn interesse in techniek en ontwerpen.
                    <br /><br />Ik studeer aan het Media College en volg daar de opleiding Software Developer. Tijdens deze opleiding leer ik programmeren, applicaties ontwikkelen en werken aan verschillende digitale projecten. Ik vind het interessant om problemen op te lossen met code en nieuwe vaardigheden te blijven ontwikkelen.
                </p>
            </div>
        </div>
    )
}