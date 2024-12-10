'use client';

import SearchIcon from '@mui/icons-material/Search';
import Form from 'next/form';
import { useSearchParams } from 'next/navigation';

export default function Search() {
  const searchParams = useSearchParams();
  
  return (
    <Form action="#" className="flex-grow max-w-2xl mx-8 relative pl-0 hidden md:block">
      <input
        key={searchParams?.get('q')}
        type="text"
        name="q"
        placeholder="Rechercher de produits..."
        autoComplete="off"
        defaultValue={searchParams?.get('q') || ''}
        className="text-md w-full rounded-lg border bg-white px-4 py-2 text-black placeholder:text-neutral-500 md:text-sm dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400"
      />
      <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
      <SearchIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>
    </Form>
  );
}

export function SearchSkeleton() {
  return (
    <form className="sticky top-0 z-5 p-2 my-3">
      <div className="relative w-full">
        <input
          placeholder="Rechercher des produits..."
          className="w-full rounded-lg border bg-white px-4 py-2 text-sm text-black placeholder:text-neutral-500 dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400"
        />
        <SearchIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>
    </form>
  );
}