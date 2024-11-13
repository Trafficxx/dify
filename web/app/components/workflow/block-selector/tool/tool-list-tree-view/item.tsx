'use client'
import type { FC } from 'react'
import React from 'react'
import type { ToolWithProvider } from '../../../types'
import Tool from '../tool'
import type { BlockEnum } from '../../../types'
import { ViewType } from '../../view-type-select'
import type { ToolDefaultValue } from '../../types'

type Props = {
  groupName: string
  toolList: ToolWithProvider[]
  onSelect: (type: BlockEnum, tool?: ToolDefaultValue) => void
}

const Item: FC<Props> = ({
  groupName,
  toolList,
  onSelect,
}) => {
  return (
    <div>
      <div className='flex items-center px-3 h-[22px] text-xs font-medium text-gray-500'>
        {groupName}
      </div>
      <div>
        {toolList.map((tool: ToolWithProvider) => (
          <Tool
            key={tool.id}
            payload={tool}
            viewType={ViewType.tree}
            isShowLetterIndex={false}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  )
}

export default React.memo(Item)