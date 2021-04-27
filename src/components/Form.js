const Form = ({handleSubmit, formStyle, onChange, description, amount, budgetType}) =>{
    return(
        <div className='Form'>
                <form className={'flex ' + formStyle} onSubmit={handleSubmit}>
                    
                    <input 
                    name="description" 
                    type='text' 
                    autoComplete='off' 
                    placeholder='Description'
                    onChange={onChange}
                    value={description}
                    />


                    <input 
                    name="amount" 
                    type='number' 
                    autoComplete='off' 
                    placeholder='Amount'
                    onChange={onChange}
                    value={amount}
                    />


                    <select name="budget-type" id="budget-type" onChange={onChange} value={budgetType}>
                        <option value="+">Income</option>
                        <option value="-">Expense</option>
                    </select>


                    <button type='submit'><i className="fas fa-check-circle fa-2x"></i></button>
                
                
                </form>       
            </div>
    )
} 
export default Form