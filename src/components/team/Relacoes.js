import React from 'react';
import styles from './Teams.module.css';
import estilos from './SpecificImages.module.css';
import Logo from '../../images/logo.png';
import Isa from '../../images/team/colab/Isa-Ribeiro.jpeg';
import Victor from '../../images/team/relacoes/Victor.jpeg';
import leticia from '../../images/team/relacoes/leticia.jpeg';
import thiago from '../../images/team/relacoes/thiago.jpeg';
import san from '../../images/team/relacoes/san.jpeg';
import monica from '../../images/team/relacoes/monica.jpeg';
import leticiarebello from '../../images/team/relacoes/leticiarebello.jpeg';

export class Relacoes extends React.Component {
    render () {
        return (
            <div className={styles.container} style={{background: 'var(--hard-yellow)'}}>
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
                        EQUIPE DE RELAÇÕES PÚBLICAS
                    </h1>
                </div>

                <main className={styles.main}>
                    <div className={styles.fila}>
                        <section className={[styles.personBox, styles.red]}>
                            <div className={styles.personContent} style={{ background: 'var(--hard-yellow)' }}>
                                <img src={Isa} alt="Isabelly Ribeiro" width='8%' />

                                <div>
                                    <strong>Isabelly Ribeiro</strong>
                                    <p>Rio de Janeiro | 18 anos</p>
                                    <p className={styles.occupation}><i>Fundadora/Supervisora dos Colaboradores e Geral</i></p>
                                </div>
                            </div>
                        </section>

                        <section className={[styles.personBox, styles.red]}>
                            <div className={styles.personContent} style={{background: 'var(--hard-yellow)'}}>
                                <img src={Victor} alt="Victor Gabriel" width='8%' className={estilos.victor} />

                                <div>
                                    <strong>Victor Gabriel</strong>
                                    <p>Mato Grosso | 16 anos</p>
                                    <p className={styles.occupation}><i>Supervisor de Relações Públicas</i></p>
                                </div>
                            </div>
                        </section>

                        <section className={[styles.personBox, styles.red]}>
                            <div className={styles.personContent} style={{background: 'var(--hard-yellow)'}}>
                                <img src={thiago} alt="Thiago Augusto" width='8%' />

                                <div>
                                    <strong>Thiago Augusto</strong>
                                    <p>Ceará | 26 anos</p>
                                    <p className={styles.occupation}><i>Gestor de Relações Públicas</i></p>
                                </div>
                            </div>
                        </section>

                        <section className={[styles.personBox, styles.red]}>
                            <div className={styles.personContent} style={{background: 'var(--hard-yellow)'}}>
                                <img src={leticia} alt="Letícia Bolosco" className={estilos.leticia} />

                                <div>
                                    <strong>Letícia Bolosco</strong>
                                    <p>São Paulo | 15 anos</p>
                                    <p className={styles.occupation}><i>Relações Públicas</i></p>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className={styles.fila}>
                        <section className={[styles.personBox, styles.red]}>
                            <div className={styles.personContent} style={{background: 'var(--hard-yellow)'}}>
                                <img src={san} alt="San Hartwig" width='8%' className={estilos.san} />

                                <div>
                                    <strong>San Hartwig</strong>
                                    <p>Rondônia | 16 anos</p>
                                    <p className={styles.occupation}><i>Analista Comercial</i></p>
                                </div>
                            </div>
                        </section>

                        <section className={[styles.personBox, styles.red]}>
                            <div className={styles.personContent} style={{background: 'var(--hard-yellow)'}}>
                                <img src={leticiarebello} alt="Letícia Rebello" width='8%' className={estilos.leticiarebello} />

                                <div>
                                    <strong>Letícia Rebello</strong>
                                    <p>Rio Grande do Norte | 18 anos</p>
                                    <p className={styles.occupation}><i>Analista Comercial</i></p>
                                </div>
                            </div>
                        </section>

                        <section className={[styles.personBox, styles.red]}>
                            <div className={styles.personContent} style={{background: 'var(--hard-yellow)'}}>
                                <img src={monica} alt="Mônica Maway" width='8%' className={estilos.monica} />

                                <div>
                                    <strong>Mônica Maway</strong>
                                    <p>Rio de Janeiro | 20 anos</p>
                                    <p className={styles.occupation}><i>Acessora Comercial</i></p>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        );
    }
}