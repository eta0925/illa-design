/** @jsxImportSource @emotion/react */
import { Children, cloneElement, createContext, forwardRef, ReactNode, ReactElement } from "react"
import { AvatarGroupContextProps, AvatarGroupProps } from "./interface"
import { css } from "@emotion/react"
import { Avatar } from "./avatar"
import { globalColor, illaPrefix } from "@illa-design/theme"

const avatarGroupCss = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const AvatarGroupContext = createContext<AvatarGroupContextProps | undefined>(undefined)

export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>((props, ref) => {
  const {
    zIndexAscend = false,
    maxCount = Number.MAX_VALUE,
    colorScheme,
    size,
    ...otherProps
  } = props

  const childrenCount = Children.count(props.children)
  let nodeList: ReactNode[]
  if (childrenCount <= maxCount) {
    nodeList = Children.toArray(props.children)
  } else {
    nodeList = Children.toArray(props.children).splice(0, maxCount)
  }
  if (childrenCount > maxCount) {
    nodeList = [...nodeList, <Avatar colorScheme={"gray"} text={`+${childrenCount - maxCount}`} />]
  }

  let marginLeft: string
  switch (props.size) {
    default:
    case "small":
      marginLeft = "-8px"
      break
    case "medium":
      marginLeft = "-12px"
      break
    case "large":
      marginLeft = "-20px"
      break
  }
  const newNodeList = Children.map(nodeList, (child, index) => {
    const isFirstAvatar = index === 0

    const childProps = {
      style: {
        marginLeft: isFirstAvatar ? "0px" : marginLeft,
        border: `solid 2px ${globalColor(`--${illaPrefix}-white-01`)}`,
        borderRadius: "50%",
        zIndex: zIndexAscend ? index : nodeList.length - index,
      },
    }

    return cloneElement(child as ReactElement, childProps)
  })
  return <div ref={ref} {...otherProps}>
    <AvatarGroupContext.Provider value={{
      zIndexAscend, maxCount, colorScheme, size,
    }}>
      <div css={avatarGroupCss}>
        {newNodeList}
      </div>
    </AvatarGroupContext.Provider>
  </div>
})