"use client";

import {
  type Dispatch,
  type SetStateAction,
  useState,
  useCallback,
} from "react";
import { Button } from "../Button";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

interface SelectorProps {
  title: string;
}

function Selector({ title }: SelectorProps) {
  return (
    <div className="flex w-3/4 items-center justify-between">
      <span className="text-xl font-bold">{title}</span>

      {/* TODO: Add dropdown component */}
      <input
        type="text"
        className="w-3/4 rounded-md border-2 border-dusty-pink p-2"
        placeholder="Enter something"
      />
    </div>
  );
}

const TABS = ["section", "instructor", "crn"] as const;
type TabType = (typeof TABS)[number];

interface TabProps {
  title: string;
  currentTab: TabType;
  tab: TabType;
  changeTab: (tab: TabType) => void;
}

function Tab({ title, tab, currentTab, changeTab }: TabProps) {
  return (
    <button
      className={`${currentTab === tab ? "bg-bulldog-red text-white" : "bg-dusty-pink text-secondary-foreground"} w-full rounded-t-lg p-2 ps-6 text-left font-bold duration-150`}
      onClick={() => changeTab(tab)}
    >
      {title}
    </button>
  );
}

export function AddCourses() {
  const SEARCH_PARAMS_KEY = "search_by";

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const searchBy = searchParams.get(SEARCH_PARAMS_KEY);
  const [tab, setTab] = useState<TabType>(
    searchBy && TABS.includes(searchBy as TabType)
      ? (searchBy as TabType)
      : "section",
  );

  const createQueryString = useCallback(
    (tab: TabType) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(SEARCH_PARAMS_KEY, tab);

      return params.toString();
    },
    [searchParams],
  );

  const changeTab = (tab: TabType) => {
    router.push(pathname + "?" + createQueryString(tab));

    setTab(tab);
  };

  return (
    <div className="h-full">
      <div id="tabs" className="flex w-full items-center justify-between gap-3">
        <Tab
          title="By Section"
          tab="section"
          currentTab={tab}
          changeTab={changeTab}
        />
        <Tab
          title="By Instructor"
          tab="instructor"
          currentTab={tab}
          changeTab={changeTab}
        />
        <Tab title="By CRN" tab="crn" currentTab={tab} changeTab={changeTab} />
      </div>
      <main className="flex flex-col justify-between gap-4 border-2 border-dusty-pink bg-secondary px-12 py-8">
        <div className="flex flex-col items-center justify-center space-y-4 py-12">
          <Selector title="Subject" />
          <Selector title="Course" />
        </div>
        <div className="flex items-center justify-end gap-4">
          <Button>Search</Button>
          <Button>Add</Button>
        </div>
      </main>
    </div>
  );
}
