import { useState } from "react"

const QueryResults = (props) => {
    const { query } = props
    

    return (
        <div className="QueryResults">
            {query ? <p>Results for username {query}:</p> : null}
            {<h2>no user posts found</h2>}

            <div></div>
        </div>
    )
}

export default QueryResults
