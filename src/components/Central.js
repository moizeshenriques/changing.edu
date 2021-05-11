import { Component } from 'react';
import Logo from '../images/logo.png';
import styles from '../styles/components/Central.module.css';
import Background from '../images/time.jpeg';

export class Central extends Component {
    render () {
        return (
            <div className={styles.container}>
                <div className={styles.navigationBar}>
                    <a href="/" className={styles.logo}>
                        <img src={Logo} alt="Logo Changing Education"/>
                        <p>CHANGING <br/> EDUCATION</p>
                    </a>

                    <ul>
                        <li><a href="/central/project">Projeto</a></li>
                        <li><a href="/central/team">Equipe</a></li>
                        <li><a href="/central/sponsor">Apadrinhamento</a></li>
                        <li><a href="/contral/be-part-of">Faça parte!</a></li>
                    </ul>
                </div>

                <div className={styles.contentBox}>
                    <img src={Background} alt="Imagem de fundo"
                    style={{opacity: 0.3}}
                    />

                    <section>
                        <h1>SEJA BEM VINDO(A)!</h1>
                        <h3>Esperamos que goste de sua experiência.</h3>
                        <p><i>Foi tudo feito com muito carinho.</i></p>
                        <p><i>De jovens, para jovens.</i></p>
                    </section>
                </div>
            </div>
        );
    }
}