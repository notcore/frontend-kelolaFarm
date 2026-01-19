import FilterChip from "@/components/atoms/FilterChip";

const RegionFilter = ({ regions, activeId, onSelect }) => {

    console.log(regions);
  return (
    <div className="max-w-full relative overflow-hidden">
      <div className="flex overflow-x-auto py-3 gap-5 w-[100%]">
        <FilterChip
          label="Semua"
          isActive={activeId === "all"}
          onClick={() => onSelect("all")}
          className="text-white"
        />
        {regions.map((item) => (
          <FilterChip
            key={item.id}
            label={item.nama_daerah}
            isActive={activeId === item.id}
            onClick={() => onSelect(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default RegionFilter;