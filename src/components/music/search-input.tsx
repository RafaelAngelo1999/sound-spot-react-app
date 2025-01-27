import { Command, CommandInput } from "@/components/ui/command";

interface SearchCommandProps {
  // onSelect?: (item: string) => void;
  value?: string;
}

const SearchCommand: React.FC<SearchCommandProps> = ({ value }) => {
  // const [searchTerm, setSearchTerm] = useState("");

  // const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchTerm(e.target.value);
  //   console.log(() => onSelect);
  // };

  return (
    <Command className="rounded-lg border shadow-md md:min-w-[450px]">
      <CommandInput
        placeholder="Digite para pesquisar..."
        value={value}
        className="w-full px-6 py-4 text-lg border-primary focus:ring-primary focus:outline-none rounded-lg"
      />
    </Command>
  );
};

export default SearchCommand;
