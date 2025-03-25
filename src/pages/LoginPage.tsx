import React, { useState } from "react"
import styles from "../styles/FormPage.module.css"
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";

function LoginPage() {

    const [hide, setHide] = useState<boolean>(true);

    return (
        <div className={styles.Container}>
            <form className={styles.Form}>
                <div className={styles.Head}>
                    Вход
                </div>
                <label className={styles.Label}>
                    Email: <br/>
                    <input className={styles.Input}/>
                </label>
                <label className={styles.Label}>
                    Пароль: <br/>
                    <input className={styles.Input}/>
                    <div className={styles.button} onClick={() => setHide(!hide)}>
                        {
                            hide ? <BiHide className={styles.hideButton}/> : <BiShow className={styles.hideButton}/>
                        }
                    </div>
                        
                </label>
                <input className={styles.Submit} value="Войти" type="submit"/>
            </form>
        </div>
    )
}

export default LoginPage;