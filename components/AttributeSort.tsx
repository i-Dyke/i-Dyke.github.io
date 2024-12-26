import React from 'react'
import { Button } from "../components/ui/button"

interface AttributeSortProps {
  attributes: string[]
  selectedAttribute: string | null
  onSelectAttribute: (attribute: string | null) => void
}

const AttributeSort: React.FC<AttributeSortProps> = ({ attributes, selectedAttribute, onSelectAttribute }) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl mb-4 font-light">Sort by Attribute:</h3>
      <div className="flex flex-wrap gap-2">
        {attributes.map((attribute) => (
          <Button
            key={attribute}
            variant={selectedAttribute === attribute ? "default" : "outline"}
            onClick={() => onSelectAttribute(selectedAttribute === attribute ? null : attribute)}
            className={`text-sm ${
              selectedAttribute === attribute
                ? "bg-header-primary hover:bg-header-secondary text-text-heading"
                : "bg-background-secondary hover:bg-background-tertiary text-text-body-primary"
            }`}
          >
            {attribute}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default AttributeSort

