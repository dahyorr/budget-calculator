const List = ({entries, formatAmount, onRemove}) =>{
    const income = entries.filter(item => item.budgetType === 'income').map(({id, description, amount}) => (

        <div className='item' key={id}>
                <div className='delete' onClick={() => onRemove(id)}><i className='far fa-trash-alt'></i></div>
                <h3>{description}</h3>
                <p className='amount' >+{formatAmount(amount)} </p>
        </div>
    ))

    const expense = entries.filter(item => item.budgetType === 'expense').map(({id, amount, description}) => (

        <div className='item' key={id} >
            <div className='delete' onClick={() => onRemove(id)} >
                <i className='far fa-trash-alt'></i>
            </div>
                <h3>{description}</h3>
                <p className='amount' >−{formatAmount(amount)} </p>
        </div>
    ))

    return(
        <div className='List'>
            <div className='income column'>
                {income}
            </div>

            <div className='expense column'>
                {expense}
            </div>
        </div>
    )
}
export default List