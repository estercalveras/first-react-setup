function Title() {
    const blueText = true;
    const redBg = false;
    const idH1 = 4553

    // { backgroundColor: '#fdfdfd' }

    return (
        <div style={{ backgroundColor: '#fdfdfd' }}>
            <h1
                id={`myItem${idH1}`}
                className={blueText ? 'test-class' : ''}
                style={redBg ? {
                    backgroundColor: '#e63429',
                } : { fontWeight: 200 }}
            >
                Hello world, I am the title component!
            </h1>
        </div>
    )
}

export default Title;