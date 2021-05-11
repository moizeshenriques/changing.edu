import React from 'react';
import styles from './Teams.module.css';
import estilos from './SpecificImages.module.css';
import Logo from '../../images/logo.png';
import Isa from '../../images/team/colab/Isa-Ribeiro.jpeg';
import Amanda from '../../images/team/suporte/Amandinha.jpeg';
import anaclara from '../../images/team/suporte/anaclara.jpeg';
import celena from '../../images/team/suporte/celena.jpeg';
import marina from '../../images/team/suporte/marina.jpeg';

export class Suporte extends React.Component {
    render () {
        return (
            <div className={styles.container} style={{background: 'var(--hard-orange)'}}>
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
                        EQUIPE DO SUPORTE
                    </h1>
                </div>

                <main className={styles.main}>
                    <div className={styles.fila}>
                        <section className={[styles.personBox, styles.red]}>
                            <div className={styles.personContent} style={{background: 'var(--hard-orange)'}}>
                                <img src={Isa} alt="Isabelly Ribeiro" width='8%' />

                                <div>
                                    <strong>Isabelly Ribeiro</strong>
                                    <p>Rio de Janeiro | 18 anos</p>
                                    <p className={styles.occupation}><i>Fundadora/Supervisora dos Colaboradores e Geral</i></p>
                                </div>
                            </div>
                        </section>

                        <section className={[styles.personBox, styles.red]}>
                            <div className={styles.personContent} style={{background: 'var(--hard-orange)'}}>
                                <img src={Amanda} alt="Amanda Saldanha" width='8%' />

                                <div>
                                    <strong>Amanda Saldanha</strong>
                                    <p>Rio de Janeiro | 17 anos</p>
                                    <p className={styles.occupation}><i>Co-Fundadora/Supervisora do Suporte</i></p>
                                </div>
                            </div>
                        </section>

                        <section className={[styles.personBox, styles.red]}>
                            <div className={styles.personContent} style={{background: 'var(--hard-orange)'}}>
                                <img src={anaclara} alt="Ana Clara Ribeiro" width='8%' className={estilos.anaclara} />

                                <div>
                                    <strong>Ana Clara Ribeiro</strong>
                                    <p>Rio de Janeiro | 16 anos</p>
                                    <p className={styles.occupation}><i>Suporte</i></p>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className={styles.fila}>
                        <section className={[styles.personBox, styles.red]}>
                            <div className={styles.personContent} style={{background: 'var(--hard-orange)'}}>
                                <img src={marina} alt="Marina Carvalho" width='8%' />

                                <div>
                                    <strong>Marina Carvalho</strong>
                                    <p>São Paulo | 17 anos</p>
                                    <p className={styles.occupation}><i>Suporte</i></p>
                                </div>
                            </div>
                        </section>

                        <section className={[styles.personBox, styles.red]}>
                            <div className={styles.personContent} style={{background: 'var(--hard-orange)'}}>
                                <img src={celena} alt="Celena Gomes" width='8%' className={estilos.celena} />

                                <div>
                                    <strong>Celena Gomes</strong>
                                    <p>São Paulo | 16 anos</p>
                                    <p className={styles.occupation}><i>Suporte</i></p>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        );
    }
}