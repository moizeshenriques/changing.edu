import { Component } from 'react';
import Logo from '../images/logo.png';
import styles from '../styles/components/Sponsor.module.css';
import insta from '../images/instagram.png';
import go from '../images/go-computer.svg';
import sponsor1 from '../images/favicon.png';

export class Sponsor extends Component {
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

                    <h1>APADRINHAMENTO DE ALUNOS</h1>
                </div>

                <main className={styles.contentBox}>
                    <section>
                        <div>
                            <img src={sponsor1} alt="Logo do Patrocinador" width='50%' />

                            <div>
                                <strong>Nome do Patrocinador</strong>
                                <p>
                                    <i>
                                        description description description description description description
                                        description description description description description description
                                        description description description.
                                    </i>
                                </p>
                            </div>

                            <div className={styles.inferior}>
                                <a href="/">
                                    <img src={insta} alt="Instagram do Patrocinador" className={styles.footer} />
                                </a>

                                <a href="/">
                                    <img src={go} alt="Website do Patrocinador" style={{width: '2000%'}} className={styles.footer} />
                                </a>                              
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        );
    }
}