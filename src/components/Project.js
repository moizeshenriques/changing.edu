import { Component } from 'react';
import Logo from '../images/logo.png';
import styles from '../styles/components/Project.module.css';
import Instagram from '../images/instagram.png';
import Youtube from '../images/youtube.png';
import Linkedin from '../images/linkedin.png';

export class Project extends Component {
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

                    <h1>SOBRE O PROJETO</h1>
                </div>

                <main className={styles.contentBox}>
                    <div className={styles.column}>
                        <section>
                            <div className={styles.columnContent} style={{marginBottom: 0, paddingBottom: 0, paddingTop: 0}}>
                                <strong>QUEM SOMOS</strong>
                                <p>Somos jovens, que buscam transmitir conhecimentos que a vida nos cobra, mas que não são
                                ensinados nas instituições brasileiras. Acreditamos na mudança, e entendemos que ela já
                                começou! Não podemos cruzar os braços por mais 150 anos na espera de que esse cenário seja
                                revertido. Cansados de esperar por melhorias no sistema educacional, decidimos fazer algo,
                                levar educação prática e didática para os alunos de escolas públicas. Sendo exemplos de
                                disciplinas abordadas no projeto: Direcionamento Vocacional, Soft Skills, Direito dos Estudantes,
                                Club do Livro, Idiomas, Comunicação, Educação Financeira, Empreendedorismo, Ciências
                                Climáticas, etc…</p>
                            </div>
                        </section>

                        <section>
                            <div className={styles.columnContent} style={{marginTop: '0.2rem', paddingTop: 0}}>
                                <strong>NOSSA MISSÃO</strong>
                                <p>O Changing tem como objetivo a mudança da educação. Sua missão é alcançar um grande
                                número de jovens e acompanhá-los para que eles consigam se desenvolver, gerando assim
                                um impacto na vida dos mesmos.
                            </p>
                            </div>
                        </section>
                    </div>

                    <div className={styles.column}>
                        <section>
                            <div className={styles.columnContent}>
                                <strong>COMO ATUAMOS</strong>
                                <p>
                                    <ul>
                                        <li><p>Construindo um ambiente de aprendizado e crescimento;</p></li>
                                        <li><p>Por meio de métodos práticos, divertidos e eficientes;</p></li>
                                        <li><p>Transformando vidas;</p></li>
                                        <li><p>Fazendo com que no futuro esse jovem consiga utilizar na sua vida;</p></li>
                                        <li>
                                            <p>
                                                Profissional e pessoal o conhecimento adquirido, podendo também ser
                                                ponte para passar adiante o que foi ensinado nas aulas;
                                        </p>
                                        </li>
                                        <li><p>Dinâmica de colaboradores: jovens que vão ensinar sobre determinados assuntos.</p></li>
                                    </ul>
                                Utilizamos o Discord para avisos, para a interação entre alunos, tendo também
                                comunicação direta com a equipe do projeto, e para disponibilizar os links das aulas que
                                acontecem no Google Meet. As aulas são preparadas e conduzidas por nossos
                                colaboradores, jovens que querem compartilhar seu conhecimento, fazer a diferença e
                                ensinar de maneira fácil e eficaz, de jovem para jovem.
                                </p>
                            </div>
                        </section>
                    </div>
                </main>

                <footer>
                    <div className={styles.top}>
                        <strong>QUER SABER MAIS SOBRE O PROJETO?</strong>
                        <small>Visite as nossas redes sociais:</small>
                    </div>

                    <div className={styles.bottom}>
                        <a href="" target="_blank"><img src={Instagram} alt="" width="60%" style={{marginLeft: '-3rem'}} /></a>
                        <a href="" target="_blank"><img src={Youtube} alt="" width="130%" style={{marginLeft: '-2.5rem'}} /></a>
                        <a href="" target="_blank"><img src={Linkedin} alt="" width="150%" style={{marginLeft: '1rem'}}/></a>
                    </div>
                </footer>
            </div>
        );
    }
}