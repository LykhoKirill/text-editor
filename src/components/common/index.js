import React from 'react'
import Layout from 'Containers/layout'

export default class Common extends React.Component {
    // Component that allows you to decide render entire app
    // or just, for example, show stub
    render() {
        return (
            <div>
                <Layout />
            </div>
        )
    }
}