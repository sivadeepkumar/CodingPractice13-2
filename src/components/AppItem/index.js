import './index.css'

const AppItem = props => {
  const {eachItem} = props
  // const {appId, category,appName, imageUrl} = eachItem
  const {appName, imageUrl} = eachItem

  return (
    <li>
      <img src={imageUrl} alt={appName} className="image1" />
      <h1>{appName}</h1>
    </li>
  )
}

export default AppItem
