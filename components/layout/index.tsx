import { PropsWithChildren } from "react";
import { Header } from "../header";
import styles from './styles.module.scss'

export function Layout ({children}: PropsWithChildren) {
    return (
        <div className={`grid_container ${styles.layout_container}`}>
            <Header />
            <main className="column-12" id={styles.main_container}>
                {children}
            </main>
        </div>
    )
}