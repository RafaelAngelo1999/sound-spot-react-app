import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { Calendar, Smile, User, CreditCard, Settings } from "lucide-react"; // Exemplo de ícones
import { useState } from "react";

interface SearchCommandProps {
  onSelect: (item: string) => void;
}

const SearchCommand: React.FC<SearchCommandProps> = ({ onSelect }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const mockData = [
    { name: "Calendar", icon: <Calendar />, shortcut: "⌘C" },
    { name: "Search Emoji", icon: <Smile />, shortcut: "⌘E" },
    { name: "Profile", icon: <User />, shortcut: "⌘P" },
    { name: "Billing", icon: <CreditCard />, shortcut: "⌘B" },
    { name: "Settings", icon: <Settings />, shortcut: "⌘S" },
  ];

  return (
    <Command className="rounded-lg border shadow-md md:min-w-[450px]">
      <CommandInput
        placeholder="Type a command or search..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="w-full px-6 py-4 text-lg border-primary focus:ring-primary focus:outline-none rounded-lg"
      />
      {/* <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          {mockData
            .filter((item) =>
              item.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((item) => (
              <CommandItem key={item.name} onClick={() => onSelect(item.name)}>
                {item.icon}
                <span>{item.name}</span>
                <CommandShortcut>{item.shortcut}</CommandShortcut>
              </CommandItem>
            ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
        </CommandGroup>
      </CommandList> */}
    </Command>
  );
};

export default SearchCommand;
