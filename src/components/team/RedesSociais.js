import React from 'react';
import styles from './Teams.module.css';
import estilos from './SpecificImages.module.css';
import Logo from '../../images/logo.png';
import Isa from '../../images/team/colab/Isa-Ribeiro.jpeg';
import FernandaA from '../../images/team/redes/Fernanda-Azevedo.jpeg';
import camile from '../../images/team/redes/camile.jpeg';
import dani from '../../images/team/redes/dani.jpeg';
import dudalemos from '../../images/team/redes/dudalemos.jpeg';
import leticia from '../../images/team/redes/leticia.jpeg';
import madson from '../../images/team/redes/madson.jpeg';
import mariana from '../../images/team/redes/mariana.jpeg';
import marina from '../../images/team/redes/marina.jpeg';
import moizes from '../../images/team/redes/moizes.jpeg';
import rafalopes from '../../images/team/redes/rafalopes.jpeg';
import sophia from '../../images/team/redes/sophia.jpeg';
import livia from '../../images/team/redes/livia.jpeg';
import monica from '../../images/team/redes/monica.jpeg';

export class RedesSociais extends React.Component {
    render() {
        return (
            <div className={styles.container} style={{ background: 'var(--red)' }}>
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
                        EQUIPE DAS REDES SOCIAIS
                    </h1>
                </div>

                <main>
                    <div className={styles.fila}>
                        <section className={[styles.personBox, styles.red]}>
                            <div className={styles.personContent} style={{ background: 'var(--red)' }}>
                                <img src={Isa} alt="Isabelly Ribeiro" width='8%' />

                                <div>
                                    <strong>Isabelly Ribeiro</strong>
                                    <p>Rio de Janeiro | 18 anos</p>
                                    <p className={styles.occupation}><i>Fundadora/Supervisora dos Colaboradores e Geral</i></p>
                                </div>
                            </div>
                        </section>

                        <section className={[styles.personBox, styles.red]}>
                            <div className={styles.personContent} style={{ background: 'var(--red)' }}>
                                <img src={FernandaA} alt="Fernanda Azevedo" width='8%' />

                                <div>
                                    <strong>Fernanda Azevedo</strong>
                                    <p>Rio de Janeiro | 19 anos</p>
                                    <p className={styles.occupation}><i>Co-Fundadora/Supervisora das Redes Sociais</i></p>
                                </div>
                            </div>
                        </section>

                        <section className={[styles.personBox, styles.red]}>
                            <div className={styles.personContent} style={{ background: 'var(--red)' }}>
                                <img src={marina} alt="Marina Carvalho" width='8%' />

                                <div>
                                    <strong>Manira Carvalho</strong>
                                    <p>São Paulo | 17 anos</p>
                                    <p className={styles.occupation}><i>Designer</i></p>
                                </div>
                            </div>
                        </section>

                        <section className={[styles.personBox, styles.red]}>
                            <div className={styles.personContent} style={{ background: 'var(--red)' }}>
                                <img src={rafalopes} alt="Rafaela Lopes" width='8%' />

                                <div>
                                    <strong>Rafaela Lopes</strong>
                                    <p>Santa Catarina | 15 anos</p>
                                    <p className={styles.occupation}><i>Desginer e Redatora</i></p>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className={styles.fila}>
                        <section className={[styles.personBox, styles.red]}>
                            <div className={styles.personContent} style={{ background: 'var(--red)' }}>
                                <img src={mariana} alt="Mariana Lopes" width='8%' className={estilos.mariana} />

                                <div>
                                    <strong>Mariana Lopes</strong>
                                    <p>São Paulo | 15 anos</p>
                                    <p className={styles.occupation}><i>Designer</i></p>
                                </div>
                            </div>
                        </section>

                        <section className={[styles.personBox, styles.red]}>
                            <div className={styles.personContent} style={{ background: 'var(--red)' }}>
                                <img src={leticia} alt="Letícia Bolosco" className={estilos.leticia} />

                                <div>
                                    <strong>Letícia Bolosco</strong>
                                    <p>São Paulo | 15 anos</p>
                                    <p className={styles.occupation}><i>Desgner e Criadora de Conteúdo</i></p>
                                </div>
                            </div>
                        </section>

                        <section className={[styles.personBox, styles.red]}>
                            <div className={styles.personContent} style={{ background: 'var(--red)' }}>
                                <img src={madson} alt="Madson Kennedy" width='8%' className={estilos.madson} />

                                <div>
                                    <strong>Madson Kennedy</strong>
                                    <p>Santa Catarina | 17 anos</p>
                                    <p className={styles.occupation}><i>Criador de Conteúdo</i></p>
                                </div>
                            </div>
                        </section>

                        <section className={[styles.personBox, styles.red]}>
                            <div className={styles.personContent} style={{ background: 'var(--red)' }}>
                                <img src={dudalemos} alt="Maria Eduarda Lemos" width='8%' className={estilos.duda} />

                                <div>
                                    <strong>Maria Eduarda Lemos</strong>
                                    <p>São Paulo | 17 anos</p>
                                    <p className={styles.occupation}><i>Criadora de Conteúdo</i></p>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className={styles.fila}>
                        <section className={[styles.personBox, styles.red]}>
                            <div className={styles.personContent} style={{ background: 'var(--red)' }}>
                                <img src={livia} alt="Lívia Fernandes" width='8%' className={estilos.duda} />

                                <div>
                                    <strong>Lívia Fernandes</strong>
                                    <p>Rio de Janeiro | 16 anos</p>
                                    <p className={styles.occupation}><i>Roteirista</i></p>
                                </div>
                            </div>
                        </section>

                        <section className={[styles.personBox, styles.red]}>
                            <div className={styles.personContent} style={{ background: 'var(--red)' }}>
                                <img src={monica} alt="Mônica Maway" width='8%' className={estilos.duda} />

                                <div>
                                    <strong>Mônica Maway</strong>
                                    <p>Rio de Janeiro | 20 anos</p>
                                    <p className={styles.occupation}><i>Redatora</i></p>
                                </div>
                            </div>
                        </section>

                        <section className={[styles.personBox, styles.red]}>
                            <div className={styles.personContent} style={{ background: 'var(--red)' }}>
                                <img src={dani} alt="Daniela Yoshihara" width='8%' className={estilos.dani} />

                                <div>
                                    <strong>Daniela Yoshihara</strong>
                                    <p>São Paulo | 17 anos</p>
                                    <p className={styles.occupation}><i>Programadora Web</i></p>
                                </div>
                            </div>
                        </section>

                        <section className={[styles.personBox, styles.red]}>
                            <div className={styles.personContent} style={{ background: 'var(--red)' }}>
                                <img src={moizes} alt="Moizés Henriques" width='8%' />

                                <div>
                                    <strong>Moizés Henriques</strong>
                                    <p>Paraíba | 18 anos</p>
                                    <p className={styles.occupation}><i>Programador Web</i></p>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className={styles.fila}>
                        <section className={[styles.personBox, styles.red]}>
                            <div className={styles.personContent} style={{ background: 'var(--red)' }}>
                                <img src={camile} alt="Camile Abade" width='8%' className={estilos.camile} />

                                <div>
                                    <strong>Camile Abade</strong>
                                    <p>São Paulo | 17 anos</p>
                                    <p className={styles.occupation}><i>Editora</i></p>
                                </div>
                            </div>
                        </section>

                        <section className={[styles.personBox, styles.red]}>
                            <div className={styles.personContent} style={{ background: 'var(--red)' }}>
                                <img src={sophia} alt="Sophia Fontana" width='8%' className={estilos.sophia}/>

                                <div>
                                    <strong>Sophia Fontana</strong>
                                    <p>Rio de Janeiro | 17 anos</p>
                                    <p className={styles.occupation}><i>Editora</i></p>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        );
    }
}