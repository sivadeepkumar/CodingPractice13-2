import './index.css'

const AppItem = props => {
  const {eachItem} = props
  // const {appId, category,appName, imageUrl} = eachItem
  const {appId, appName, imageUrl} = eachItem

  return (
    <li>
      <img src={imageUrl} alt={appName} className="image1" />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
