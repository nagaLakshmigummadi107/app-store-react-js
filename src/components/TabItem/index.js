// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, updateTabActiveId, isActive} = props
  const {displayText, tabId} = tabDetails

  const onClickTabItem = () => {
    updateTabActiveId(tabId)
  }

  const activeTabClassName = isActive ? 'active-tab-btn' : ''

  return (
    <>
      <li className="tab-item-container ">
        <button
          type="button"
          className={`tab-btn ${activeTabClassName}`}
          onClick={onClickTabItem}
        >
          {displayText}
        </button>
      </li>
    </>
  )
}

export default TabItem
