import './index.css'

const TabItem = props => {
  const {eachItem, onClicked} = props
  const {tabId, displayText} = eachItem
  const onlyDisplayTextShown = () => {
    onClicked(tabId)
  }

  return <li onClick={onlyDisplayTextShown}>{displayText}</li>
}

export default TabItem
