import Title from "./Title";
function SubTitle() {
    const array = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];


    return (
        <div style={{ color: '#ed6e66' }}>
            {array.length ?
                <ul>
                    {
                        array.map((item, index) => (<Title key={index} />))
                    }
                </ul> : null
            }

        </div>
    )
}

export default SubTitle;