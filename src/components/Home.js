import { Component } from "react";
import Logo from '../images/logo.png';
import Button from '../images/go.svg';
import styles from '../styles/components/Home.module.css';

export class Home extends Component {
    render() {
        return (
            <div className={styles.container}>
                <section className={styles.sideLeft}>
                    <img src={Logo} alt="Logo Changing Education"/>
                </section>

                <section className={styles.sideRight}>
                    <h1>
                        CHANGING <br/>
                        EDUCATION
                    </h1>

                    <div className={styles.phrases}>
                        <h2>Feito por jovens, com jovens!</h2>

                        <p>Democratizando o conhecimento de um modo que
                            você nunca viu antes.
                        </p>
                    </div>

                    <a href="/central">
                        <img src={Button} alt="Vamos seguir"/>
                    </a>
                </section>
            </div>
        );
    }
}