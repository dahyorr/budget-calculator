import {useState, useEffect} from 'react'
import Form from "./Form"
import List from "./List"

const Wrapper = () => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState("");
    const [type, setType] = useState('+');
    const [entries, setEntries] = useState([])
    const [formStyle, setformStyle] = useState('form-green')
    const [incomeTotal, setIncomeTotal] = useState(0)
    const [expenseTotal, setExpenseTotal] = useState(0)

    useEffect(() => {
        let incomeSum = 0
        let expenseSum = 0
        if (entries.length > 0){
            entries.forEach(({budgetType, amount}) => {
                budgetType === 'income' ?incomeSum += amount : expenseSum += amount
            })
        }
        setIncomeTotal(incomeSum)
        setExpenseTotal(expenseSum)
        
    }, [entries])

    const formatAmount = (x) => {
        return `${x>=0?'':'−'}₦${Math.abs(x).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(description.trim() !== "" && amount >= 1){
            const item = {
                id: entries.length + 1,
                description: description,
                amount: parseInt(amount),
                budgetType: type === '+' ? 'income':'expense' 
            }
            setEntries([...entries, item]) 
            setAmount("")
            setDescription("")
        }
    }
    const onRemove = (id) => {
        console.log(id)
        setEntries(entries.filter(item => id !== item.id))
    }

    const onChange = (e) => {
        if (e.target.name === 'description'){
            setDescription(e.target.value)
        }
        if (e.target.name === 'amount'){
            setAmount(e.target.value)
        }
        if (e.target.name === 'budget-type'){
            setType(e.target.value)
            setformStyle(e.target.value === '+' ? 'form-green' : 'form-red')
        }
        else return null
    }

    const balance = incomeTotal - expenseTotal
    return(
        <div className='Wrapper'>
            <Form handleSubmit={handleSubmit}
            onChange={onChange} 
            amount={amount} 
            description={description}
            budgetType={type}
            formStyle={formStyle}/>

            <List entries={entries} formatAmount={formatAmount} onRemove={onRemove}/>
            
            <div className='display'>
                <div className='flex totals'>
                    <h2>Total Income: {formatAmount(incomeTotal)}</h2>
                    <h2>Total Expense: {formatAmount(expenseTotal)}</h2>
                </div>
                <h1 className={balance >= 0 ? 'text-green':'text-red'}>Balance: {formatAmount(balance)}</h1>
            </div>
        </div>
    )
}
export default Wrapper