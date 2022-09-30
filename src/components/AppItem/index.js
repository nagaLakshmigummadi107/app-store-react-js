// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appId, imageUrl, appName} = appDetails
  return (
    <>
      <li className="app-item-container">
        <img className="app-item-image" src={imageUrl} alt={appName} />
        <div className="app-item-details-container">
          <p className="app-item-title">{appName}</p>
        </div>
      </li>
    </>
  )
}

export default AppItem
