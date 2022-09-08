import React from 'react'

const Tabs = props => {
    const tabContents = ["test", "values", "here"];

    const tabHandler = (e, value) => {
        props.changeTab(value);
    }

    return tabContents.map( (item, index) => {
        return <button onClick = { (e) => tabHandler(e, item) }>Tab {index+1}</button>;
    }
  )
}

export default Tabs