import { CATEGORIES } from '@/utils/const'
import { capitalizeString } from '@/utils/utils'
import propTypes from 'prop-types'

export const SelectCategory = ({ handleSetCategory }) => {
  const handleCategory = e => {
    if (e.target.value === 'category') {
      handleSetCategory(null)
      return
    }
    handleSetCategory(capitalizeString(e.target.value))
  }
  return (
    <div className="relative h-10 w-full">
      <select
        id="select-category"
        onChange={handleCategory}
        className="
        shadow
        peer h-full w-full rounded border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-gray-500 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-slate-200 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
      >
        {CATEGORIES.map(category => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
      <label
        htmlFor="select-category"
        className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 dark:peer-focus:text-slate-200 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-slate-300 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-slate-300 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-500"
      >
        Select a category
      </label>
    </div>
  )
}

SelectCategory.propTypes = {
  handleSetCategory: propTypes.func,
}
