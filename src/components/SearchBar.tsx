"use client";
import { useState } from "react";

type Option = { label: string; value: string };

function Select({
  items,
  value,
  onChange,
}: {
  items: Option[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-700 shadow-sm outline-none transition hover:border-zinc-300 focus:border-blue-500"
    >
      {items.map((opt) => (
        <option key={opt.label} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}

const locations: Option[] = [
  { label: "Location", value: "" },
  { label: "Beverly Hills", value: "beverly-hills" },
  { label: "New York", value: "new-york" },
  { label: "Miami", value: "miami" },
];

const types: Option[] = [
  { label: "Property Type", value: "" },
  { label: "House", value: "house" },
  { label: "Apartment", value: "apartment" },
  { label: "Villa", value: "villa" },
];

const prices: Option[] = [
  { label: "Min. Price", value: "" },
  { label: "$500k", value: "500000" },
  { label: "$1M", value: "1000000" },
  { label: "$2M", value: "2000000" },
];

export default function SearchBar() {
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (location) params.set("location", location);
    if (type) params.set("type", type);
    if (price) params.set("minPrice", price);
    alert(`Searching with: ${params.toString() || "no filters"}`);
  };

  return (
    <form
      onSubmit={onSearch}
      className="w-full rounded-xl bg-white/95 p-3 shadow-lg ring-1 ring-black/5 backdrop-blur"
    >
      <div className="flex items-center justify-between px-2 pb-2 text-xs text-zinc-500">
        <span>Advanced search</span>
        <a href="#" className="text-blue-600 hover:text-blue-700">
          Sign in
        </a>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-4">
        <Select items={locations} value={location} onChange={setLocation} />
        <Select items={types} value={type} onChange={setType} />
        <Select items={prices} value={price} onChange={setPrice} />
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
        >
          Search
        </button>
      </div>
    </form>
  );
}
