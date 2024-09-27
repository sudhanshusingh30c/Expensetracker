import styles from './Add.module.css'
import Button from '../../buttons/button';
import { useState } from 'react'
import { useSnackbar } from 'notistack';

export default function AddBalanceForm({ setIsOpen, setBalance }) {

    const [money, setmoney] = useState('')
    const { enqueueSnackbar } = useSnackbar();

    const handleSubmit = (e) => {
        e.preventDefault()

        if (Number(money) < 0) {
            enqueueSnackbar("Income should be greater than 0", { variant: "warning" })
            setIsOpen(false)
            return
        }

        setBalance(prev => prev + Number(money))
        setIsOpen(false)
    }

    return (

        <div className={styles.form}>
            <h3>Add Balance</h3>
            <form onSubmit={handleSubmit}>

                <input
                    type="number"
                    placeholder='Income Amount'
                    value={money}
                    onChange={(e) => setmoney(e.target.value)}
                    required
                />

                <Button type="submit" style="primary" shadow>Add Balance</Button>

                <Button
                    style='secondary'
                    shadow
                    handleClick={() => setIsOpen(false)}
                >
                    Cancel
                </Button>
            </form>
        </div>

    )
}