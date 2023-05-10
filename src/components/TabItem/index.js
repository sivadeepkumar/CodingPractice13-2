import './index.css'

const TabItem = props => {
  const {eachItem, onClicked, isActive} = props
  const {tabId, displayText} = eachItem

  const addCss = isActive ? 'highlight' : ''

  const onlyDisplayTextShown = () => {
    onClicked(tabId)
  }

  return (
    <li className={`liEle ${addCss}`}>
      <button type="button" onClick={onlyDisplayTextShown}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
