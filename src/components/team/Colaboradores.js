import React from 'react';
import styles from './Teams.module.css';
import estilos from './SpecificImages.module.css';
import Logo from '../../images/logo.png';
import Isa from '../../images/team/colab/Isa-Ribeiro.jpeg';
import mariaclara from '../../images/team/colab/mariaclara.jpeg';
import leticiarebello from '../../images/team/colab/leticiarebello.jpeg';
import thiago from '../../images/team/colab/thiago.jpeg';
import rafaella from '../../images/team/colab/rafaella.jpeg';
import matheus from '../../images/team/colab/matheus.jpeg';
import mariana from '../../images/team/colab/mariana.jpeg';
import lucas from '../../images/team/colab/lucas.jpeg';
import livia from '../../images/team/colab/livia.jpeg';
import julio from '../../images/team/colab/julio.jpeg';
import helloyse from '../../images/team/colab/helloyse.jpeg';
import gyordanne from '../../images/team/colab/gyordanne.jpeg';
import emilia from '../../images/team/colab/emilia.jpeg';
import dudalemos from '../../images/team/colab/dudalemos.jpeg';
import dani from '../../images/team/colab/dani.jpeg';
import bela from '../../images/team/colab/bela.jpeg';
import angel from '../../images/team/colab/angel.jpeg';

export class Colaboradores extends React.Component {
    render () {
        return (
            <div className={styles.container} style={{background: 'var(--soft-orange)'}}>
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
                        EQUIPE DOS COLABORADORES
                    </h1>
                </div>

                <main>
                    <div className={styles.fila}>
                        <section className={[styles.personBox, styles.red]}>
                            <div className={styles.personContent} style={{background: 'var(--soft-orange)'}}>
                                <img 
                                src={mariaclara} 
                                alt="Maria Clara Neto" 
                                style={{width: '50%'}} 
                                className={estilos.mariaclara} />

                                <div>
                                    <strong>Maria Clara Neto</strong>
                                    <p>São Paulo | 12 anos</p>
                                    <p className={styles.occupation}><i>Supervisora dos Colaboradores e Colab. de Ed. Financeira</i></p>
                                </div>
                            </div>
                        </section>

                        <section className={[styles.personBox, styles.red]}>
                            <div className={styles.personContent} style={{background: 'var(--soft-orange)'}}>
                                <img src={thiago} alt="Thiago Augusto" width='8%' />

                                <div>
                                    <strong>Thiago Augusto</strong>
                                    <p>Ceará | 26 anos</p>
                                    <p className={styles.occupation}><i>Colabarorador de Direcionamento Vocacional</i></p>
                                </div>
                            </div>
                        </section>

                        <section className={[styles.personBox, styles.red]}>
                            <div className={styles.personContent} style={{background: 'var(--soft-orange)'}}>
                                <img src={leticiarebello} alt="Letícia Rebello" style={{width: '40%'}} className={estilos.leticiarebello} />

                                <div>
                                    <strong>Letícia Rebello</strong>
                                    <p>Rio Grande do Norte | 18 anos</p>
                                    <p className={styles.occupation}><i>Colabaroradora de Direcionamento Vocacional</i></p>
                                </div>
                            </div>
                        </section>

                        <section className={[styles.personBox, styles.red]}>
                            <div className={styles.personContent} style={{background: 'var(--soft-orange)'}}>
                                <img src={mariana} alt="Mariana Lopes" width='8%' />

                                <div>
                                    <strong>Mariana Lopes</strong>
                                    <p>São Paulo | 15 anos</p>
                                    <p className={styles.occupation}><i>Colabaroradora de Club do Livro</i></p>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className={styles.fila}>

                        <section className={[styles.personBox, styles.red]}>
                            <div className={styles.personContent} style={{ background: 'var(--soft-orange)' }}>
                                <img src={dudalemos} alt="Maria Eduarda Lemos" width='8%' className={estilos.duda} />

                                <div>
                                    <strong>Maria Eduarda Lemos</strong>
                                    <p>São Paulo | 17 anos</p>
                                    <p className={styles.occupation}><i>Colaboradora de Soft Skills</i></p>
                                </div>
                            </div>
                        </section>

                        <section className={[styles.personBox, styles.red]}>
                            <div className={styles.personContent} style={{ background: 'var(--soft-orange)' }}>
                                <img src={gyordanne} alt="Gyordanne Alves" width='8%' className={estilos.gyordanne} />

                                <div>
                                    <strong>Gyordanne Alves</strong>
                                    <p>Paraíba | 16 anos</p>
                                    <p className={styles.occupation}><i>Colaboradora de Soft Skills</i></p>
                                </div>
                            </div>
                        </section>

                        <section className={[styles.personBox, styles.red]}>
                            <div className={styles.personContent} style={{ background: 'var(--soft-orange)' }}>
                                <img src={dani} alt="Daniela Yoshihara" width='8%' className={estilos.dani} />

                                <div>
                                    <strong>Daniela Yoshihara</strong>
                                    <p>São Paulo | 17 anos</p>
                                    <p className={styles.occupation}><i>Colaboradora de Ciências Climáticas</i></p>
                                </div>
                            </div>
                        </section>

                        <section className={[styles.personBox, styles.red]}>
                            <div className={styles.personContent} style={{ background: 'var(--soft-orange)' }}>
                                <img src={angel} alt="Angel Corrêa" width='8%' />

                                <div>
                                    <strong>Ángel Corrêa</strong>
                                    <p>Rio de Janeiro | 15 anos</p>
                                    <p className={styles.occupation}><i>Colaboradora de Ciências Climáticas</i></p>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className={styles.fila}>

                        <section className={[styles.personBox, styles.red]}>
                            <div className={styles.personContent} style={{ background: 'var(--soft-orange)' }}>
                                <img src={julio} alt="Júlio César" width='8%' />

                                <div>
                                    <strong>Júlio César</strong>
                                    <p>Paraná | 17 anos</p>
                                    <p className={styles.occupation}><i>Colaborador de Comunicação</i></p>
                                </div>
                            </div>
                        </section>

                        <section className={[styles.personBox, styles.red]}>
                            <div className={styles.personContent} style={{ background: 'var(--soft-orange)' }}>
                                <img src={livia} alt="Lívia Fernandes" width='8%' />

                                <div>
                                    <strong>Lívia Fernandes</strong>
                                    <p>Rio de Janeiro | 16 anos</p>
                                    <p className={styles.occupation}><i>Colaboradora de Inglês</i></p>
                                </div>
                            </div>
                        </section>

                        <section className={[styles.personBox, styles.red]}>
                            <div className={styles.personContent} style={{ background: 'var(--soft-orange)' }}>
                                <img src={bela} alt="Isabela Maia Feitosa" width='8%' className={estilos.bela} />

                                <div>
                                    <strong>Isabela Maia Feitosa</strong>
                                    <p>Ceará | 16 anos</p>
                                    <p className={styles.occupation}><i>Colaboradora de Inglês</i></p>
                                </div>
                            </div>
                        </section>

                        <section className={[styles.personBox, styles.red]}>
                            <div className={styles.personContent} style={{ background: 'var(--soft-orange)' }}>
                                <img src={helloyse} alt="Helloyse Ramos" width='8%' />

                                <div>
                                    <strong>Helloyse Ramos</strong>
                                    <p>São Paulo | 16 anos</p>
                                    <p className={styles.occupation}><i>Colaboradora de Francês</i></p>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className={styles.fila}>

                        <section className={[styles.personBox, styles.red]}>
                            <div className={styles.personContent} style={{ background: 'var(--soft-orange)' }}>
                                <img src={lucas} alt="Lucas Souza" width='8%' />

                                <div>
                                    <strong>Lucas Souza</strong>
                                    <p>Bahia | 16 anos</p>
                                    <p className={styles.occupation}><i>Colab. de Ed. Financeira e Empreendedorismo</i></p>
                                </div>
                            </div>
                        </section>

                        <section className={[styles.personBox, styles.red]}>
                            <div className={styles.personContent} style={{ background: 'var(--soft-orange)' }}>
                                <img src={matheus} alt="Matheus Pinho" width='8%' />

                                <div>
                                    <strong>Matheus Pinho</strong>
                                    <p>São Paulo | 21 anos</p>
                                    <p className={styles.occupation}><i>Colaborador de Tecnologia</i></p>
                                </div>
                            </div>
                        </section>

                        <section className={[styles.personBox, styles.red]}>
                            <div className={styles.personContent} style={{ background: 'var(--soft-orange)' }}>
                                <img src={emilia} alt="Emília Mendes" width='8%' className={estilos.dani} />

                                <div>
                                    <strong>Emília Mendes</strong>
                                    <p>Ceará | 21 anos</p>
                                    <p className={styles.occupation}><i>Colaboradora de Direito dos Estudantes</i></p>
                                </div>
                            </div>
                        </section>
                        
                        <section className={[styles.personBox, styles.red]}>
                            <div className={styles.personContent} style={{ background: 'var(--soft-orange)' }}>
                                <img src={rafaella} alt="Rafaella Cardoso" width='8%' className={estilos.rafaella} />

                                <div>
                                    <strong>Rafaella Cardoso</strong>
                                    <p>São Paulo | 17 anos</p>
                                    <p className={styles.occupation}><i>Colaboradora de Direito dos Estudantes</i></p>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className={styles.fila}>
                    </div>
                </main>
            </div>
        );
    }
}