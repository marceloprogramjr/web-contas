import styles from "./IncrementDecrement.module.css"

function IncrementDecrement() {
    return (
        <div className={styles.container}>
            <h2>Incrementing and Decrementing a number</h2>

            <span>Usando variavél</span>
            <button>
                <span> - </span>
            </button>
            <button>
                <span> + </span>
            </button>
            <div>

            </div>
        </div>
    )
}
export default IncrementDecrement;