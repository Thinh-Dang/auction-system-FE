import { Listbox } from "@headlessui/react"
import { Select, Option } from "@material-tailwind/react"
import { useState } from "react";

const SelectInput = ( {label, options, classes}: ISelectInputProps) => {
    const [input, setInput] = useState<any>(options[0]);
  return (
    <div className="">
            <label className="text-xs">
                <span className="text-neutral-40">{label}</span>
            </label>
            <Listbox value={input} onChange={setInput}>
                <Listbox.Button className="">{input}</Listbox.Button>
                <Listbox.Options className="">
                    {options.map((option) => (
                        <Listbox.Option
                            className=""
                            key={option}
                            value={option}
                        >
                            {option}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </Listbox>
        </div>
  )
}

export default SelectInput