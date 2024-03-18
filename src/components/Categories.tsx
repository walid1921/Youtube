import { Button } from './Button'

type CategoryProps = {
  categories: string[]
  selectedCategory: string
  onSelect: (category: string) => void
}

const Categories = ({
  categories,
  selectedCategory,
  onSelect,
}: CategoryProps) => {
  return (
    <div className="overflow-x-hidden scroll-m-5 ">
      <div className="flex gap-3 transition-transform w-[max-content]">
        {categories.map((category, index) => (
          <Button
            key={index}
            className="py-1 px-3 rounded-lg whitespace-nowrap"
            variant={selectedCategory === category ? 'dark' : 'default'}
            onClick={() => onSelect(category)}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default Categories
