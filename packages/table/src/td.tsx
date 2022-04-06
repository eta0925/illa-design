import { forwardRef, useContext } from "react"
import { TdProps } from "./interface"
import { applyBorderStyle, applyNormalStyle, applySizeStyle } from "./style"
import { css } from "@emotion/react"
import { TableContext } from "./table-context"

export const Td = forwardRef<HTMLTableDataCellElement, TdProps>(
  (props, ref) => {
    const { size, borderedCell, striped, align, _css, ...otherProps } = props

    const tableContext = useContext(TableContext)

    return (
      <td
        align={align ?? tableContext?.align ?? "left"}
        css={css(
          applyNormalStyle,
          applySizeStyle(size ?? tableContext?.size ?? "medium"),
          applyBorderStyle(
            borderedCell ?? tableContext?.borderedCell,
            striped ?? tableContext?.striped,
          ),
          _css,
        )}
        ref={ref}
        {...otherProps}
      />
    )
  },
)

Td.displayName = "Td"
