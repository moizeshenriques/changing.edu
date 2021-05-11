import { Component } from 'react';
import Logo from '../images/logo.png';
import styles from '../styles/components/Team.module.css';
import computer from '../images/computer.png';
import document from '../images/document.png';
import team from '../images/team.png';
import hands from '../images/hands.png';

export class Team extends Component {
    render() {
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

                    <h1>
                        EQUIPE
                        <span style={{ fontFamily: "Oswald", marginLeft: "0.6rem", marginTop: '-0.6rem' }}>CHANGING EDUCATION</span>
                    </h1>
                </div>

                <div className={styles.contentBox}>
                    <div className={styles.superior} style={{marginTop: '2rem'}}>
                        <a href="/central/team/redes-sociais" className={styles.botao} style={{background: 'var(--red)'}}>
                            <img src={computer} alt="Computador" width="47.4%" style={{background: 'var(--red)'}} />
                            <strong>REDES SOCIAIS</strong>
                        </a>

                        <a href="/central/team/suporte" className={styles.botao} style={{background: 'var(--extra-hard-orange)'}}>
                            <img src={document} alt="Documento" width="45%" style={{background: 'var(--extra-hard-orange)'}}/>
                            <strong>SUPORTE</strong>
                        </a>
                    </div>

                    <div className={styles.superior} style={{marginBottom: '2rem'}}>
                        <a href="/central/team/colaboradores" className={styles.botao} style={{background: 'var(--soft-orange)'}}>
                            <img src={team} alt="Time" width="45%" style={{background: 'var(--soft-orange)'}}/>
                            <strong>COLABORADORES</strong>
                        </a>

                        <a href="/central/team/relacoes-publicas" className={styles.botao} style={{background: 'var(--hard-yellow)'}}>
                            <img src={hands} alt="Mãos apertadas" width="45%" style={{background: 'var(--hard-yellow)'}}/>
                            <strong>RELAÇÕES PÚBLICAS</strong>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}