import { Component } from 'react';
import Logo from '../images/logo.png';
import styles from '../styles/components/BePartOf.module.css';
import Turmas from '../images/turmas.svg';
import Time from '../images/time.svg';
import Sponsor from '../images/patrocinador.svg';

export class BePartOf extends Component {
    render () {
        return (
            <div className={styles.container}>
                <div className={styles.navigationBar}>
                    <div className={styles.topBarContainer}>
                        <a href="/" className={styles.logo}>
                            <img src={Logo} alt="Logo Changing Education" />
                            <p>CHANGING <br /> EDUCATION</p>
                        </a>

                        <ul>
                            <li><a href="/central/project">Projeto</a></li>
                            <li><a href="/central/team">Equipe</a></li>
                            <li><a href="/central/sponsor">Apadrinhamento</a></li>
                            <li><a href="/central/be-part-of">Faça parte!</a></li>
                        </ul>
                    </div>

                    <h1>FAÇA PARTE DO PROJETO!</h1>
                </div>

                <main className={styles.contentBox}>
                    <section>
                        <p>
                            <a href="/">
                                <img 
                                src={Turmas} 
                                alt="Faça parte das nossas turmas"
                                width={'70%'} 
                                className={styles.firstImg}
                                />
                            </a>
                        </p>
                    </section>

                    <section>
                        <p>
                            <a href="/">
                                <img 
                                src={Time} 
                                alt="Faça parte do nosso time" 
                                width={'70%'} 
                                />
                            </a>
                        </p>
                    </section>

                    <section>
                        <p>
                            <a href="/">
                                <img 
                                src={Sponsor} 
                                alt="Seja um patrocinador do projeto" 
                                width={'70%'}
                                className={styles.secondImg}
                                />
                            </a>
                        </p>
                    </section>
                </main>
            </div>
        );
    }
}