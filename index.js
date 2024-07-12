const Notification = (props) => {
    const { className, message, iconUrl } = props
    const containerClassName = `container ${className}`
    return (
        <div className={containerClassName}>
            <img src={iconUrl} className="image" />
            <p>{message}</p>
        </div>
    )
}

const element = (
    <div className="bg-container">
        <h1>Notifications</h1>
        <div className="notification-container">
            <Notification
                iconUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
                message="Information Message"
                className="primary" />
            <Notification
                iconUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                message="Information Message"
                className="secondary" />
            <Notification
                iconUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
                message="Information Message"
                className="warning" />
            <Notification
                iconUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
                message="Information Message"
                className="info" />

        </div>

    </div>

)
ReactDOM.render(element, document.getElementById("root"));