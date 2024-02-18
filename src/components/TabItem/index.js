import './index.css'

const TabItem = props => {
  const {tabsList, updateTadItems, isActive} = props
  const {tabId, displayText} = tabsList

  const btnStylr = isActive ? 'active-btn-style' : ''

  const onClickTabItems = () => {
    updateTadItems(tabId)
  }

  return (
    <li className="tab-list-item">
      <button
        type="button"
        id={tabId}
        className={`tabItem-heading ${btnStylr}`}
        onClick={onClickTabItems}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
