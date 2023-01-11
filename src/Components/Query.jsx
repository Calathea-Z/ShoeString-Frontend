const Query = (props) => {
    const { handleChange, handleSubmit } = props
    return (
        <div className="QueryResults">
            <form onSubmit={handleSubmit}>
                <div onChange={handleChange}>
                    <label htmlFor="name">
                        <input type="text" id="name" name="name" placeholder="enter username" onChange={handleChange} aria-describedby="searchHelpBlock" />
                    </label>
                    <button>Search</button>
                </div>
            </form>
        </div>
    )
}

export default Query
