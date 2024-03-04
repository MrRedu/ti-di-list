import propTypes from 'prop-types'

export const Input = ({
  type,
  name,
  placeholder,
  id,
  value,
  onChange,
  inputRef,
  minLength,
  maxLength,
  className,
}) => {
  return (
    <>
      <div className={`relative h-10 w-full ${className}`}>
        <input
          ref={inputRef}
          type={type}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          minLength={minLength}
          maxLength={maxLength}
          placeholder="" // use the placeholder prop below
          className="
          shadow
          peer h-full w-full rounded border bg-transparent px-3 py-2.5 text-sm font-normal 
          text-slate-700 dark:text-slate-300 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-gray-200 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
        />
        <label
          htmlFor={id}
          className="
          before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 dark:peer-focus:text-slate-300 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-slate-200 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-slate-200 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
        >
          {placeholder}
        </label>
      </div>
    </>
  )
}

Input.propTypes = {
  type: propTypes.string,
  name: propTypes.string,
  placeholder: propTypes.string,
  id: propTypes.string,
  value: propTypes.string,
  onChange: propTypes.func,
  inputRef: propTypes.any,
  minLength: propTypes.number,
  maxLength: propTypes.number,
  className: propTypes.string,
}
