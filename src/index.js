import React from "react"
import ReactDOM from "react-dom"
const root=document.getElementById("root")

function MyBlurb()
{
    return (
        <div>
            <h1>Aditya Dhiman</h1>
            <p1>This is MyBlurb...</p1>
            <ul>
<li>item:Vaibhav</li>
<li>item:Yashvi</li>
<li>item:Abhishek</li>
<li>item:Adhish</li>
</ul>
        </div>
    )
}


ReactDOM.render(<MyBlurb/>,root)

