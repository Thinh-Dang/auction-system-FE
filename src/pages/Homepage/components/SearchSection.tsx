import { useState } from "react";
import SelectInput from "./SelectInput";
import { Select, Option } from "@material-tailwind/react"

const SearchSection = () => {
  const [locations, setLocations] = useState(['Vietnam', 'Campodia','Thailand', 'Singapore','China']);
  const [religions, setReligions] = useState(['Ankowat', 'Asatro', 'Budda', 'Chirstian'])
  const [types, setTypes] = useState(['Weapons','Clocks','Statues','Vases'])
  return (
    <section className='w-full px-[10rem] gap-[10rem] items-center shadow-searchSection min-h-[10rem] rounded-2xl'>
      <SelectInput label="Locations" options={locations} />
      {/* <SelectInput label="Religions" options={religions} />
      <SelectInput label="Types" options={types} /> */}
    </section>
  )
}

export default SearchSection